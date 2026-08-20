const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPNG(width, height, drawPixelFunc) {
    // RGBA buffer with 1 filter byte per row
    const rowSize = 1 + width * 4;
    const rawBuffer = Buffer.alloc(height * rowSize);

    for (let y = 0; y < height; y++) {
        const rowOffset = y * rowSize;
        rawBuffer[rowOffset] = 0; // Filter type 0 (None)
        for (let x = 0; x < width; x++) {
            const pixelOffset = rowOffset + 1 + x * 4;
            const [r, g, b, a] = drawPixelFunc(x, y, width, height);
            rawBuffer[pixelOffset] = r;
            rawBuffer[pixelOffset + 1] = g;
            rawBuffer[pixelOffset + 2] = b;
            rawBuffer[pixelOffset + 3] = a;
        }
    }

    const compressed = zlib.deflateSync(rawBuffer);

    // CRC table
    const crcTable = [];
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        crcTable[n] = c;
    }

    function crc32(buf) {
        let crc = 0 ^ (-1);
        for (let i = 0; i < buf.length; i++) {
            crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
        }
        return (crc ^ (-1)) >>> 0;
    }

    function createChunk(type, data) {
        const len = Buffer.alloc(4);
        len.writeUInt32BE(data.length, 0);

        const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32BE(crc32(typeAndData), 0);

        return Buffer.concat([len, typeAndData, crc]);
    }

    const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(width, 0);
    ihdrData.writeUInt32BE(height, 4);
    ihdrData[8] = 8;  // bit depth
    ihdrData[9] = 6;  // color type 6 (RGBA)
    ihdrData[10] = 0; // compression
    ihdrData[11] = 0; // filter
    ihdrData[12] = 0; // interlace

    const ihdrChunk = createChunk('IHDR', ihdrData);
    const idatChunk = createChunk('IDAT', compressed);
    const iendChunk = createChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Shader / Drawer for Arcade Capybara Icon
function iconShader(x, y, w, h) {
    const nx = (x / w) * 2 - 1; // -1 to 1
    const ny = (y / h) * 2 - 1; // -1 to 1
    const dist = Math.hypot(nx, ny);

    // Background gradient (Warm dark arcade cabinet wood)
    let r = Math.floor(45 - dist * 25);
    let g = Math.floor(24 - dist * 15);
    let b = Math.floor(14 - dist * 8);
    let a = 255;

    // Gold border ring
    if (dist > 0.82 && dist < 0.94) {
        r = 212; g = 175; b = 55;
    } else if (dist >= 0.94 && dist < 0.98) {
        r = 50; g = 30; b = 15;
    } else if (dist >= 0.98) {
        a = 0; // Rounded corners maskable
    }

    // Crane Cable & Claw
    if (Math.abs(nx) < 0.04 && ny < -0.3) {
        r = 255; g = 215; b = 0;
    }

    // Capybara Head
    const headDist = Math.hypot(nx, ny - 0.2);
    if (headDist < 0.52) {
        r = 216; g = 168; b = 115; // Golden brown capy fur

        // Muzzle
        const muzzleDist = Math.hypot(nx / 0.45, (ny - 0.32) / 0.35);
        if (muzzleDist < 0.6) {
            r = 184; g = 102; b = 41;
            // Nose / mouth
            if (Math.abs(nx) < 0.05 && ny > 0.25 && ny < 0.38) {
                r = 24; g = 16; b = 8;
            }
        }

        // Cool Blue Sunglasses
        if (ny > -0.02 && ny < 0.18 && Math.abs(nx) < 0.44 && Math.abs(nx) > 0.04) {
            // Glass lens
            r = 56; g = 189; b = 248; // Cyan/blue lens
            // Glare
            if (nx < -0.18 && nx > -0.26 && ny > 0.02 && ny < 0.14) {
                r = 255; g = 255; b = 255;
            }
            if (nx > 0.18 && nx < 0.26 && ny > 0.02 && ny < 0.14) {
                r = 255; g = 255; b = 255;
            }
        }
        // Shades frame bridge
        if (ny > 0.05 && ny < 0.11 && Math.abs(nx) <= 0.05) {
            r = 24; g = 24; b = 27;
        }
    }

    // Capybara Ears
    const leftEar = Math.hypot(nx + 0.35, ny + 0.18);
    const rightEar = Math.hypot(nx - 0.35, ny + 0.18);
    if (leftEar < 0.16 || rightEar < 0.16) {
        r = 156; g = 88; b = 37;
    }

    // Double Thumbs Up
    const leftThumb = Math.hypot(nx + 0.42, ny - 0.48);
    const rightThumb = Math.hypot(nx - 0.42, ny - 0.48);
    if (leftThumb < 0.14 || rightThumb < 0.14) {
        r = 168; g = 95; b = 38;
    }

    return [
        Math.max(0, Math.min(255, r)),
        Math.max(0, Math.min(255, g)),
        Math.max(0, Math.min(255, b)),
        Math.max(0, Math.min(255, a))
    ];
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

console.log('Generating icon-192.png...');
const png192 = createPNG(192, 192, iconShader);
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), png192);

console.log('Generating icon-512.png...');
const png512 = createPNG(512, 512, iconShader);
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), png512);

console.log('✅ Generated 192x192 and 512x512 PWA icons successfully!');
