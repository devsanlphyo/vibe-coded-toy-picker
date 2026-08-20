/**
 * Toy Definitions and Vector Plushie Renderers
 */
const TOY_CATALOGUE = [
    // COMMON TIER
    {
        id: 'bear',
        name: 'Honey Bear',
        rarity: 'common',
        radius: 26,
        color: '#b5713b',
        accentColor: '#fadbb8',
        tagline: 'Loves warm honey and cozy hugs.',
        draw(ctx, r) {
            // Ears
            ctx.fillStyle = '#8f4f1e';
            ctx.beginPath();
            ctx.arc(-r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.arc(r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fadbb8';
            ctx.beginPath();
            ctx.arc(-r * 0.7, -r * 0.65, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.7, -r * 0.65, r * 0.18, 0, Math.PI * 2);
            ctx.fill();

            // Main Body
            ctx.fillStyle = '#b5713b';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Muzzle
            ctx.fillStyle = '#fadbb8';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.2, r * 0.45, r * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();

            // Nose
            ctx.fillStyle = '#3a2010';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.1, r * 0.16, r * 0.12, 0, 0, Math.PI * 2);
            ctx.fill();

            // Mouth
            ctx.strokeStyle = '#3a2010';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(-r * 0.1, r * 0.25, r * 0.1, 0, Math.PI);
            ctx.arc(r * 0.1, r * 0.25, r * 0.1, 0, Math.PI);
            ctx.stroke();

            // Eyes
            ctx.fillStyle = '#22150c';
            ctx.beginPath();
            ctx.arc(-r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2);
            ctx.arc(r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2);
            ctx.fill();

            // Eye shine
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.39, -r * 0.16, r * 0.045, 0, Math.PI * 2);
            ctx.arc(r * 0.33, -r * 0.16, r * 0.045, 0, Math.PI * 2);
            ctx.fill();

            // Cheeks
            ctx.fillStyle = 'rgba(255, 140, 140, 0.4)';
            ctx.beginPath();
            ctx.arc(-r * 0.55, r * 0.15, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.55, r * 0.15, r * 0.18, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'duck',
        name: 'Rubber Ducky',
        rarity: 'common',
        radius: 25,
        color: '#ffd026',
        accentColor: '#ff7700',
        tagline: 'Always ready for bath time splashing!',
        draw(ctx, r) {
            // Body
            ctx.fillStyle = '#ffd026';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Little wing
            ctx.fillStyle = '#e6b30b';
            ctx.beginPath();
            ctx.ellipse(-r * 0.35, r * 0.2, r * 0.35, r * 0.22, -0.2, 0, Math.PI * 2);
            ctx.fill();

            // Beak
            ctx.fillStyle = '#ff7700';
            ctx.beginPath();
            ctx.ellipse(r * 0.5, r * 0.05, r * 0.35, r * 0.18, 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Eye
            ctx.fillStyle = '#222';
            ctx.beginPath();
            ctx.arc(r * 0.15, -r * 0.2, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Shine
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(r * 0.12, -r * 0.24, r * 0.05, 0, Math.PI * 2);
            ctx.fill();

            // Cheek
            ctx.fillStyle = 'rgba(255, 120, 120, 0.45)';
            ctx.beginPath();
            ctx.arc(r * 0.05, r * 0.1, r * 0.16, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'bunny',
        name: 'Fluffy Bunny',
        rarity: 'common',
        radius: 25,
        color: '#fcedea',
        accentColor: '#f7a8b8',
        tagline: 'Gentle twitchy nose and ultra soft fur.',
        draw(ctx, r) {
            // Long Ears
            ctx.fillStyle = '#eed6d3';
            ctx.beginPath();
            ctx.ellipse(-r * 0.45, -r * 0.85, r * 0.2, r * 0.55, -0.2, 0, Math.PI * 2);
            ctx.ellipse(r * 0.45, -r * 0.85, r * 0.2, r * 0.55, 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#f7a8b8';
            ctx.beginPath();
            ctx.ellipse(-r * 0.45, -r * 0.85, r * 0.1, r * 0.38, -0.2, 0, Math.PI * 2);
            ctx.ellipse(r * 0.45, -r * 0.85, r * 0.1, r * 0.38, 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Head
            ctx.fillStyle = '#fcedea';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Nose
            ctx.fillStyle = '#f7a8b8';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.12, r * 0.12, r * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#422a2a';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Eye shines
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.12, r * 0.04, 0, Math.PI * 2);
            ctx.arc(r * 0.29, -r * 0.12, r * 0.04, 0, Math.PI * 2);
            ctx.fill();

            // Rosy cheeks
            ctx.fillStyle = 'rgba(247, 168, 184, 0.5)';
            ctx.beginPath();
            ctx.arc(-r * 0.5, r * 0.18, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.5, r * 0.18, r * 0.16, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'penguin',
        name: 'Cuddle Penguin',
        rarity: 'common',
        radius: 25,
        color: '#28364a',
        accentColor: '#ffaa33',
        tagline: 'Waddles with joy when holding a pebble.',
        draw(ctx, r) {
            // Main Body
            ctx.fillStyle = '#28364a';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // White Belly / Face
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.15, r * 0.65, r * 0.72, 0, 0, Math.PI * 2);
            ctx.fill();

            // Beak
            ctx.fillStyle = '#ff9800';
            ctx.beginPath();
            ctx.moveTo(-r * 0.16, r * 0.05);
            ctx.lineTo(r * 0.16, r * 0.05);
            ctx.lineTo(0, r * 0.3);
            ctx.closePath();
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#1c2430';
            ctx.beginPath();
            ctx.arc(-r * 0.3, -r * 0.15, r * 0.1, 0, Math.PI * 2);
            ctx.arc(r * 0.3, -r * 0.15, r * 0.1, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.33, -r * 0.18, r * 0.04, 0, Math.PI * 2);
            ctx.arc(r * 0.27, -r * 0.18, r * 0.04, 0, Math.PI * 2);
            ctx.fill();

            // Cheeks
            ctx.fillStyle = 'rgba(255, 150, 150, 0.4)';
            ctx.beginPath();
            ctx.arc(-r * 0.45, r * 0.08, r * 0.14, 0, Math.PI * 2);
            ctx.arc(r * 0.45, r * 0.08, r * 0.14, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'frog',
        name: 'Tiny Froggie',
        rarity: 'common',
        radius: 25,
        color: '#65be4c',
        accentColor: '#a2eb8c',
        tagline: 'Ribbit! Expert fly catcher and lilypad lounger.',
        draw(ctx, r) {
            // Eye Bumps
            ctx.fillStyle = '#53a83b';
            ctx.beginPath();
            ctx.arc(-r * 0.5, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.arc(r * 0.5, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.fill();

            // Body
            ctx.fillStyle = '#65be4c';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Eyes inside bumps
            ctx.fillStyle = '#1e3814';
            ctx.beginPath();
            ctx.arc(-r * 0.5, -r * 0.65, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.5, -r * 0.65, r * 0.18, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.54, -r * 0.7, r * 0.07, 0, Math.PI * 2);
            ctx.arc(r * 0.46, -r * 0.7, r * 0.07, 0, Math.PI * 2);
            ctx.fill();

            // Cheerful mouth
            ctx.strokeStyle = '#2b521e';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, r * 0.05, r * 0.4, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // Pink Cheeks
            ctx.fillStyle = 'rgba(255, 130, 160, 0.5)';
            ctx.beginPath();
            ctx.arc(-r * 0.52, r * 0.18, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.52, r * 0.18, r * 0.18, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    // RARE TIER
    {
        id: 'cat',
        name: 'Calico Kitten',
        rarity: 'rare',
        radius: 27,
        color: '#fdfbf7',
        accentColor: '#e07a38',
        tagline: 'Purrs at 40Hz and loves sunny windowsills.',
        draw(ctx, r) {
            // Left Ear (Orange)
            ctx.fillStyle = '#e07a38';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2);
            ctx.lineTo(-r * 0.6, -r * 1.05);
            ctx.lineTo(-r * 0.1, -r * 0.6);
            ctx.closePath();
            ctx.fill();

            // Right Ear (Dark Grey)
            ctx.fillStyle = '#3f3835';
            ctx.beginPath();
            ctx.moveTo(r * 0.8, -r * 0.2);
            ctx.lineTo(r * 0.6, -r * 1.05);
            ctx.lineTo(r * 0.1, -r * 0.6);
            ctx.closePath();
            ctx.fill();

            // Body
            ctx.fillStyle = '#fdfbf7';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Calico orange patch on face
            ctx.fillStyle = '#e07a38';
            ctx.beginPath();
            ctx.ellipse(-r * 0.35, -r * 0.2, r * 0.4, r * 0.35, -0.3, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#228b22'; // Emerald cat eyes
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.ellipse(-r * 0.32, -r * 0.05, r * 0.05, r * 0.1, 0, 0, Math.PI * 2);
            ctx.ellipse(r * 0.32, -r * 0.05, r * 0.05, r * 0.1, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.09, r * 0.04, 0, Math.PI * 2);
            ctx.arc(r * 0.29, -r * 0.09, r * 0.04, 0, Math.PI * 2);
            ctx.fill();

            // Little pink nose
            ctx.fillStyle = '#f78ca0';
            ctx.beginPath();
            ctx.moveTo(-r * 0.08, r * 0.12);
            ctx.lineTo(r * 0.08, r * 0.12);
            ctx.lineTo(0, r * 0.2);
            ctx.closePath();
            ctx.fill();

            // Whiskers
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.35, r * 0.2); ctx.lineTo(-r * 0.75, r * 0.15);
            ctx.moveTo(-r * 0.35, r * 0.26); ctx.lineTo(-r * 0.75, r * 0.32);
            ctx.moveTo(r * 0.35, r * 0.2); ctx.lineTo(r * 0.75, r * 0.15);
            ctx.moveTo(r * 0.35, r * 0.26); ctx.lineTo(r * 0.75, r * 0.32);
            ctx.stroke();
        }
    },
    {
        id: 'shiba',
        name: 'Shiba Inu',
        rarity: 'rare',
        radius: 27,
        color: '#e28834',
        accentColor: '#fbf4ea',
        tagline: 'Such fluff, very loyal, wow plushie.',
        draw(ctx, r) {
            // Ears
            ctx.fillStyle = '#ba6518';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2);
            ctx.lineTo(-r * 0.6, -r * 1.0);
            ctx.lineTo(-r * 0.15, -r * 0.6);
            ctx.closePath();
            ctx.moveTo(r * 0.8, -r * 0.2);
            ctx.lineTo(r * 0.6, -r * 1.0);
            ctx.lineTo(r * 0.15, -r * 0.6);
            ctx.closePath();
            ctx.fill();

            // Body
            ctx.fillStyle = '#e28834';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // White Shiba Cheeks/Muzzle
            ctx.fillStyle = '#fbf4ea';
            ctx.beginPath();
            ctx.arc(-r * 0.35, r * 0.3, r * 0.38, 0, Math.PI * 2);
            ctx.arc(r * 0.35, r * 0.3, r * 0.38, 0, Math.PI * 2);
            ctx.ellipse(0, r * 0.35, r * 0.45, r * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();

            // White Eyebrow dots
            ctx.fillStyle = '#fbf4ea';
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.35, r * 0.1, 0, Math.PI * 2);
            ctx.arc(r * 0.35, -r * 0.35, r * 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#26170d';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.05, r * 0.09, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.05, r * 0.09, 0, Math.PI * 2);
            ctx.fill();

            // Black Shiba Nose
            ctx.fillStyle = '#1e140d';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.2, r * 0.14, r * 0.1, 0, 0, Math.PI * 2);
            ctx.fill();

            // Tongue
            ctx.fillStyle = '#ff7a8a';
            ctx.beginPath();
            ctx.arc(0, r * 0.42, r * 0.1, 0, Math.PI);
            ctx.fill();
        }
    },
    {
        id: 'mushroom',
        name: 'Magic Shroom',
        rarity: 'rare',
        radius: 26,
        color: '#e73845',
        accentColor: '#ffffff',
        tagline: 'Glows faintly beneath enchanted forest canopies.',
        draw(ctx, r) {
            // Stem
            ctx.fillStyle = '#f7eedb';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.35, r * 0.5, r * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cap
            ctx.fillStyle = '#e73845';
            ctx.beginPath();
            ctx.arc(0, -r * 0.05, r * 0.95, Math.PI, Math.PI * 2);
            ctx.bezierCurveTo(r * 0.9, r * 0.25, -r * 0.9, r * 0.25, -r * 0.95, -r * 0.05);
            ctx.fill();

            // Polka dots on cap
            ctx.fillStyle = '#ffffff';
            const dots = [
                [-r * 0.5, -r * 0.45, r * 0.18],
                [0, -r * 0.7, r * 0.2],
                [r * 0.5, -r * 0.45, r * 0.18],
                [-r * 0.2, -r * 0.2, r * 0.12],
                [r * 0.25, -r * 0.2, r * 0.14]
            ];
            dots.forEach(([dx, dy, dr]) => {
                ctx.beginPath();
                ctx.arc(dx, dy, dr, 0, Math.PI * 2);
                ctx.fill();
            });

            // Sleepy eyes on stem
            ctx.strokeStyle = '#4a3828';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(-r * 0.2, r * 0.35, r * 0.08, Math.PI, Math.PI * 2);
            ctx.arc(r * 0.2, r * 0.35, r * 0.08, Math.PI, Math.PI * 2);
            ctx.stroke();

            // Rosy cheeks
            ctx.fillStyle = 'rgba(255, 120, 140, 0.45)';
            ctx.beginPath();
            ctx.arc(-r * 0.35, r * 0.42, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.35, r * 0.42, r * 0.12, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'cloud',
        name: 'Starry Cloud',
        rarity: 'rare',
        radius: 27,
        color: '#c2e3f7',
        accentColor: '#ffd700',
        tagline: 'Floats on gentle dreams and stardust breezes.',
        draw(ctx, r) {
            // Fluffy cloud puffs
            ctx.fillStyle = '#c2e3f7';
            ctx.beginPath();
            ctx.arc(-r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2);
            ctx.arc(r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2);
            ctx.arc(0, -r * 0.4, r * 0.55, 0, Math.PI * 2);
            ctx.arc(-r * 0.35, r * 0.25, r * 0.45, 0, Math.PI * 2);
            ctx.arc(r * 0.35, r * 0.25, r * 0.45, 0, Math.PI * 2);
            ctx.arc(0, r * 0.3, r * 0.48, 0, Math.PI * 2);
            ctx.fill();

            // Golden star accessory in middle
            ctx.fillStyle = '#ffcf10';
            ctx.beginPath();
            const starR = r * 0.32;
            for (let i = 0; i < 5; i++) {
                const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                const x = Math.cos(a) * starR;
                const y = r * 0.35 + Math.sin(a) * starR;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();

            // Cute smiling eyes
            ctx.strokeStyle = '#23496d';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.05, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.arc(r * 0.28, -r * 0.05, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // Sparkle cheeks
            ctx.fillStyle = 'rgba(255, 170, 200, 0.5)';
            ctx.beginPath();
            ctx.arc(-r * 0.48, 0, r * 0.14, 0, Math.PI * 2);
            ctx.arc(r * 0.48, 0, r * 0.14, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'octo',
        name: 'Octo Plush',
        rarity: 'rare',
        radius: 26,
        color: '#b094e8',
        accentColor: '#f7caf0',
        tagline: 'Has eight arms for holding eight snacks at once.',
        draw(ctx, r) {
            // Tentacles at base
            ctx.fillStyle = '#9b7ad8';
            for (let i = -3; i <= 3; i++) {
                const angle = (i * 0.26);
                ctx.beginPath();
                ctx.arc(Math.sin(angle) * r * 0.8, r * 0.6 + Math.abs(i) * 2, r * 0.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Head dome
            ctx.fillStyle = '#b094e8';
            ctx.beginPath();
            ctx.arc(0, -r * 0.1, r * 0.85, 0, Math.PI * 2);
            ctx.fill();

            // Big Anime Eyes
            ctx.fillStyle = '#221144';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.16, 0, Math.PI * 2);
            ctx.fill();

            // Double shine
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.36, -r * 0.14, r * 0.06, 0, Math.PI * 2);
            ctx.arc(r * 0.28, -r * 0.14, r * 0.06, 0, Math.PI * 2);
            ctx.arc(-r * 0.26, -r * 0.02, r * 0.03, 0, Math.PI * 2);
            ctx.arc(r * 0.38, -r * 0.02, r * 0.03, 0, Math.PI * 2);
            ctx.fill();

            // Little 'o' mouth
            ctx.fillStyle = '#ff7ca8';
            ctx.beginPath();
            ctx.arc(0, r * 0.18, r * 0.08, 0, Math.PI * 2);
            ctx.fill();

            // Pastel blush
            ctx.fillStyle = 'rgba(247, 202, 240, 0.6)';
            ctx.beginPath();
            ctx.arc(-r * 0.52, r * 0.1, r * 0.15, 0, Math.PI * 2);
            ctx.arc(r * 0.52, r * 0.1, r * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    // LEGENDARY TIER
    {
        id: 'dragon',
        name: 'Golden Dragon',
        rarity: 'legendary',
        radius: 28,
        color: '#f7c93e',
        accentColor: '#ff5722',
        tagline: 'Legendary guardian of ancient treasure vaults.',
        draw(ctx, r) {
            // Little wings
            ctx.fillStyle = '#e69819';
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, -r * 0.2);
            ctx.lineTo(-r * 1.15, -r * 0.6);
            ctx.lineTo(-r * 0.8, 0);
            ctx.closePath();
            ctx.moveTo(r * 0.6, -r * 0.2);
            ctx.lineTo(r * 1.15, -r * 0.6);
            ctx.lineTo(r * 0.8, 0);
            ctx.closePath();
            ctx.fill();

            // Horns
            ctx.fillStyle = '#ff5722';
            ctx.beginPath();
            ctx.moveTo(-r * 0.45, -r * 0.6);
            ctx.lineTo(-r * 0.6, -r * 1.1);
            ctx.lineTo(-r * 0.25, -r * 0.8);
            ctx.closePath();
            ctx.moveTo(r * 0.45, -r * 0.6);
            ctx.lineTo(r * 0.6, -r * 1.1);
            ctx.lineTo(r * 0.25, -r * 0.8);
            ctx.closePath();
            ctx.fill();

            // Body
            const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
            grad.addColorStop(0, '#fff48d');
            grad.addColorStop(0.7, '#f7c93e');
            grad.addColorStop(1, '#d89b0a');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Belly Scales
            ctx.fillStyle = '#fff4a3';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.35, r * 0.5, r * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#800020'; // Ruby eyes
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.fill();

            // Golden shine
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.36, -r * 0.13, r * 0.05, 0, Math.PI * 2);
            ctx.arc(r * 0.28, -r * 0.13, r * 0.05, 0, Math.PI * 2);
            ctx.fill();

            // Nostril sparks
            ctx.fillStyle = '#e65100';
            ctx.beginPath();
            ctx.arc(-r * 0.12, r * 0.12, r * 0.05, 0, Math.PI * 2);
            ctx.arc(r * 0.12, r * 0.12, r * 0.05, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'unicorn',
        name: 'Rainbow Unicorn',
        rarity: 'legendary',
        radius: 28,
        color: '#ffffff',
        accentColor: '#ff66c4',
        tagline: 'Spreads prismatic rainbows wherever it gallops.',
        draw(ctx, r) {
            // Rainbow mane strands behind
            const maneColors = ['#ff66c4', '#a066ff', '#5ce1e6', '#7ed957', '#ffde59'];
            maneColors.forEach((col, idx) => {
                ctx.fillStyle = col;
                ctx.beginPath();
                ctx.arc(-r * 0.6 + idx * 3, -r * 0.3 + idx * 6, r * 0.25, 0, Math.PI * 2);
                ctx.fill();
            });

            // Golden Horn
            const hornGrad = ctx.createLinearGradient(0, -r * 1.3, 0, -r * 0.6);
            hornGrad.addColorStop(0, '#fff475');
            hornGrad.addColorStop(1, '#ffb800');
            ctx.fillStyle = hornGrad;
            ctx.beginPath();
            ctx.moveTo(-r * 0.15, -r * 0.65);
            ctx.lineTo(0, -r * 1.35);
            ctx.lineTo(r * 0.15, -r * 0.65);
            ctx.closePath();
            ctx.fill();

            // Head
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Pretty Eyelash Eyes
            ctx.strokeStyle = '#5a189a';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.arc(-r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1);
            ctx.arc(r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1);
            ctx.stroke();

            // Lashes
            ctx.beginPath();
            ctx.moveTo(-r * 0.42, 0); ctx.lineTo(-r * 0.52, -r * 0.1);
            ctx.moveTo(r * 0.42, 0); ctx.lineTo(r * 0.52, -r * 0.1);
            ctx.stroke();

            // Rosy Sparkle Cheeks
            ctx.fillStyle = 'rgba(255, 102, 196, 0.5)';
            ctx.beginPath();
            ctx.arc(-r * 0.48, r * 0.2, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.48, r * 0.2, r * 0.18, 0, Math.PI * 2);
            ctx.fill();

            // Little heart nose
            ctx.fillStyle = '#ff66c4';
            ctx.beginPath();
            ctx.arc(0, r * 0.28, r * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'egg',
        name: 'Royal Mystery Egg',
        rarity: 'legendary',
        radius: 28,
        color: '#ffc107',
        accentColor: '#9c27b0',
        tagline: 'Crowned with jewels, holds mythical surprises.',
        draw(ctx, r) {
            // Golden Crown on top
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.65);
            ctx.lineTo(-r * 0.6, -r * 1.15);
            ctx.lineTo(-r * 0.2, -r * 0.85);
            ctx.lineTo(0, -r * 1.25);
            ctx.lineTo(r * 0.2, -r * 0.85);
            ctx.lineTo(r * 0.6, -r * 1.15);
            ctx.lineTo(r * 0.5, -r * 0.65);
            ctx.closePath();
            ctx.fill();

            // Crown jewels
            ctx.fillStyle = '#e91e63';
            ctx.beginPath();
            ctx.arc(0, -r * 1.05, r * 0.08, 0, Math.PI * 2);
            ctx.arc(-r * 0.45, -r * 0.95, r * 0.06, 0, Math.PI * 2);
            ctx.arc(r * 0.45, -r * 0.95, r * 0.06, 0, Math.PI * 2);
            ctx.fill();

            // Egg Body with luxury gradient
            const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r);
            grad.addColorStop(0, '#ffe57f');
            grad.addColorStop(0.6, '#ffb300');
            grad.addColorStop(1, '#ff6f00');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.85, r, 0, 0, Math.PI * 2);
            ctx.fill();

            // Ornamental ribbons
            ctx.strokeStyle = '#ab47bc';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.85, r * 0.35, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Smiling cute face
            ctx.fillStyle = '#3e2723';
            ctx.beginPath();
            ctx.arc(-r * 0.25, -r * 0.1, r * 0.09, 0, Math.PI * 2);
            ctx.arc(r * 0.25, -r * 0.1, r * 0.09, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.13, r * 0.035, 0, Math.PI * 2);
            ctx.arc(r * 0.22, -r * 0.13, r * 0.035, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#3e2723';
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.arc(0, r * 0.08, r * 0.12, 0, Math.PI);
            ctx.stroke();
        }
    },
    {
        id: 'astrocat',
        name: 'Cosmic Astro-Cat',
        rarity: 'legendary',
        radius: 28,
        color: '#2a1b4e',
        accentColor: '#00e5ff',
        tagline: 'Explores the Milky Way on moonbeams and purrs.',
        draw(ctx, r) {
            // Starry helmet bubble
            const helmetGrad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r * 1.05);
            helmetGrad.addColorStop(0, 'rgba(0, 229, 255, 0.45)');
            helmetGrad.addColorStop(0.8, 'rgba(42, 27, 78, 0.9)');
            helmetGrad.addColorStop(1, 'rgba(0, 229, 255, 0.8)');
            ctx.fillStyle = helmetGrad;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Inner Cat Ears
            ctx.fillStyle = '#ff80ab';
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, -r * 0.3);
            ctx.lineTo(-r * 0.4, -r * 0.75);
            ctx.lineTo(-r * 0.15, -r * 0.4);
            ctx.closePath();
            ctx.moveTo(r * 0.6, -r * 0.3);
            ctx.lineTo(r * 0.4, -r * 0.75);
            ctx.lineTo(r * 0.15, -r * 0.4);
            ctx.closePath();
            ctx.fill();

            // Glowing Cosmic Eyes
            ctx.fillStyle = '#00e5ff';
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Pupil slit
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(-r * 0.28, -r * 0.05, r * 0.04, r * 0.1, 0, 0, Math.PI * 2);
            ctx.ellipse(r * 0.28, -r * 0.05, r * 0.04, r * 0.1, 0, 0, Math.PI * 2);
            ctx.fill();

            // Glass Reflection Arc
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.78, -Math.PI * 0.8, -Math.PI * 0.4);
            ctx.stroke();
        }
    },

    // --- VIRAL & TRENDY TOYS ---
    {
        id: 'capybara',
        name: 'Cool Guy Capybara',
        rarity: 'rare',
        radius: 29,
        color: '#d8a873',
        accentColor: '#38bdf8',
        tagline: 'Super chill with retro blue shades and double thumbs up! 👍😎👍',
        draw(ctx, r) {
            ctx.save();

            // 1. Outer Ears
            ctx.fillStyle = '#9c5825';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.5;

            // Left Ear
            ctx.beginPath();
            ctx.arc(-r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Right Ear
            ctx.beginPath();
            ctx.arc(r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Inner Ear Patches
            ctx.fillStyle = '#3a1f0c';
            ctx.beginPath();
            ctx.arc(-r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2);
            ctx.fill();

            // 2. Main Head & Body (Rounded pear/loaf shape)
            ctx.fillStyle = '#d8a873';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.8;

            ctx.beginPath();
            ctx.arc(0, r * 0.05, r * 0.96, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Whisker dashes on cheeks (2 left, 2 right)
            ctx.fillStyle = '#221408';
            ctx.beginPath();
            ctx.roundRect(-r * 0.98, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(-r * 0.98, -r * 0.08, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.08, r * 0.14, r * 0.07, 2);
            ctx.fill();

            // 3. Toasted Caramel Muzzle
            ctx.fillStyle = '#b86629';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.ellipse(0, r * 0.18, r * 0.42, r * 0.38, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Capybara 'T' Nose & Mouth
            ctx.strokeStyle = '#181008';
            ctx.lineWidth = 3.2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            // Top cross of T
            ctx.moveTo(-r * 0.14, r * 0.02);
            ctx.lineTo(r * 0.14, r * 0.02);
            // Downward stem
            ctx.moveTo(0, r * 0.02);
            ctx.lineTo(0, r * 0.24);
            // Smiling chin curve
            ctx.arc(0, r * 0.24, r * 0.12, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // 4. Cool Retro Sunglasses (Thick black frame with blue lenses)
            // Left Lens Frame
            ctx.fillStyle = '#18181b';
            ctx.beginPath();
            ctx.moveTo(-r * 0.85, -r * 0.35);
            ctx.lineTo(-r * 0.1, -r * 0.15);
            ctx.lineTo(-r * 0.15, -r * 0.02);
            ctx.lineTo(-r * 0.78, -r * 0.05);
            ctx.closePath();
            ctx.fill();

            // Right Lens Frame
            ctx.beginPath();
            ctx.moveTo(r * 0.85, -r * 0.35);
            ctx.lineTo(r * 0.1, -r * 0.15);
            ctx.lineTo(r * 0.15, -r * 0.02);
            ctx.lineTo(r * 0.78, -r * 0.05);
            ctx.closePath();
            ctx.fill();

            // Center Bridge
            ctx.strokeStyle = '#18181b';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.moveTo(-r * 0.12, -r * 0.15);
            ctx.lineTo(r * 0.12, -r * 0.15);
            ctx.stroke();

            // Blue Glass Lenses
            ctx.fillStyle = '#42a5f5';
            // Left Lens
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.32);
            ctx.lineTo(-r * 0.15, -r * 0.17);
            ctx.lineTo(-r * 0.2, -r * 0.06);
            ctx.lineTo(-r * 0.74, -r * 0.08);
            ctx.closePath();
            ctx.fill();

            // Right Lens
            ctx.beginPath();
            ctx.moveTo(r * 0.8, -r * 0.32);
            ctx.lineTo(r * 0.15, -r * 0.17);
            ctx.lineTo(r * 0.2, -r * 0.06);
            ctx.lineTo(r * 0.74, -r * 0.08);
            ctx.closePath();
            ctx.fill();

            // White Diagonal Sunglasses Glare Stripes
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            // Left lens shines
            ctx.beginPath();
            ctx.moveTo(-r * 0.62, -r * 0.3); ctx.lineTo(-r * 0.52, -r * 0.1);
            ctx.moveTo(-r * 0.42, -r * 0.24); ctx.lineTo(-r * 0.34, -r * 0.1);
            // Right lens shines
            ctx.moveTo(r * 0.42, -r * 0.24); ctx.lineTo(r * 0.34, -r * 0.1);
            ctx.moveTo(r * 0.62, -r * 0.3); ctx.lineTo(r * 0.52, -r * 0.1);
            ctx.stroke();

            // 5. Double Thumbs Up Paws 👍 👍
            ctx.fillStyle = '#a85f26';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.4;

            // Left Paw with Thumb Up
            ctx.beginPath();
            // Thumb
            ctx.ellipse(-r * 0.68, r * 0.4, r * 0.11, r * 0.22, -0.2, 0, Math.PI * 2);
            // Fist
            ctx.arc(-r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Right Paw with Thumb Up
            ctx.beginPath();
            // Thumb
            ctx.ellipse(r * 0.68, r * 0.4, r * 0.11, r * 0.22, 0.2, 0, Math.PI * 2);
            // Fist
            ctx.arc(r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        }
    },
    {
        id: 'capy_duck',
        name: 'Capy & Duck Pal',
        rarity: 'legendary',
        radius: 29,
        color: '#7b4c22',
        accentColor: '#ffd700',
        tagline: 'Best buddies exploring the world together in cozy harmony.',
        draw(ctx, r) {
            // Capybara Main Body
            ctx.fillStyle = '#7b4c22';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.15, r * 0.95, r * 0.82, 0, 0, Math.PI * 2);
            ctx.fill();

            // Ears
            ctx.fillStyle = '#4e2d12';
            ctx.beginPath();
            ctx.arc(-r * 0.68, -r * 0.35, r * 0.15, 0, Math.PI * 2);
            ctx.arc(r * 0.68, -r * 0.35, r * 0.15, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#5c3515';
            ctx.beginPath();
            ctx.roundRect(-r * 0.4, r * 0.08, r * 0.8, r * 0.58, 7);
            ctx.fill();

            // Nostrils
            ctx.fillStyle = '#221105';
            ctx.beginPath();
            ctx.ellipse(-r * 0.16, r * 0.32, r * 0.05, r * 0.035, -0.2, 0, Math.PI * 2);
            ctx.ellipse(r * 0.16, r * 0.32, r * 0.05, r * 0.035, 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Relaxed Eyes
            ctx.strokeStyle = '#221105';
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(-r * 0.55, -r * 0.04); ctx.lineTo(-r * 0.3, -r * 0.04);
            ctx.moveTo(r * 0.3, -r * 0.04); ctx.lineTo(r * 0.55, -r * 0.04);
            ctx.stroke();

            // Cozy Red Scarf
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.7, r * 0.55, r * 1.4, r * 0.26, 6);
            ctx.fill();

            ctx.fillStyle = '#c0392b';
            ctx.fillRect(-r * 0.15, r * 0.65, r * 0.3, r * 0.28);

            // Mini Duckling on head! 🐥
            const duckY = -r * 0.75;
            ctx.fillStyle = '#ffd500';
            ctx.beginPath();
            ctx.arc(0, duckY, r * 0.32, 0, Math.PI * 2);
            ctx.fill();

            // Duck Beak
            ctx.fillStyle = '#ff7700';
            ctx.beginPath();
            ctx.ellipse(r * 0.26, duckY + r * 0.05, r * 0.14, r * 0.08, 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Duck Eye
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(r * 0.06, duckY - r * 0.08, r * 0.05, 0, Math.PI * 2);
            ctx.fill();

            // Duck Cheek
            ctx.fillStyle = 'rgba(255, 100, 100, 0.5)';
            ctx.beginPath();
            ctx.arc(0, duckY + r * 0.1, r * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'boba_axolotl',
        name: 'Boba Axolotl',
        rarity: 'rare',
        radius: 27,
        color: '#ffb6c1',
        accentColor: '#8d6e63',
        tagline: 'Sweet as milk tea, with extra chewy brown sugar pearls.',
        draw(ctx, r) {
            // Axolotl Frills (Gills)
            const frillColors = ['#ff8da1', '#ff6b8b', '#ff4d79'];
            [-1, 1].forEach(side => {
                for (let i = 0; i < 3; i++) {
                    ctx.fillStyle = frillColors[i];
                    ctx.beginPath();
                    ctx.ellipse(side * (r * 0.85 + i * 2), -r * 0.25 + i * 9, r * 0.24, r * 0.12, side * (0.3 + i * 0.2), 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Head & Body
            ctx.fillStyle = '#ffccd5';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Cute smiling wide eyes
            ctx.fillStyle = '#3a1a24';
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.1, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.35, -r * 0.1, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Eye shine
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.38, -r * 0.14, r * 0.05, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.14, r * 0.05, 0, Math.PI * 2);
            ctx.fill();

            // Smile
            ctx.strokeStyle = '#592534';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.18, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // Cheeks
            ctx.fillStyle = 'rgba(255, 105, 140, 0.55)';
            ctx.beginPath();
            ctx.arc(-r * 0.52, r * 0.12, r * 0.15, 0, Math.PI * 2);
            ctx.arc(r * 0.52, r * 0.12, r * 0.15, 0, Math.PI * 2);
            ctx.fill();

            // Boba Tea Cup in hands 🧋
            const bobaY = r * 0.4;
            ctx.fillStyle = '#d7ccc8'; // Milk tea cup
            ctx.beginPath();
            ctx.roundRect(-r * 0.24, bobaY - r * 0.15, r * 0.48, r * 0.45, [2, 2, 6, 6]);
            ctx.fill();

            // Brown Sugar Tea Fill
            ctx.fillStyle = '#c79268';
            ctx.beginPath();
            ctx.roundRect(-r * 0.21, bobaY - r * 0.05, r * 0.42, r * 0.32, [0, 0, 5, 5]);
            ctx.fill();

            // Tapioca Pearls
            ctx.fillStyle = '#3e2723';
            [-r * 0.12, 0, r * 0.12].forEach(px => {
                ctx.beginPath();
                ctx.arc(px, bobaY + r * 0.2, r * 0.055, 0, Math.PI * 2);
                ctx.fill();
            });

            // Boba Straw
            ctx.strokeStyle = '#e91e63';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(0, bobaY - r * 0.12);
            ctx.lineTo(r * 0.08, bobaY - r * 0.35);
            ctx.stroke();
        }
    },
    {
        id: 'matcha_dino',
        name: 'Matcha Dino',
        rarity: 'common',
        radius: 26,
        color: '#9bc472',
        accentColor: '#5c8a32',
        tagline: 'Tiny stomper who enjoys warm herbal tea and clover fields.',
        draw(ctx, r) {
            // Spikes on back
            ctx.fillStyle = '#5c8a32';
            [-r * 0.6, -r * 0.2, r * 0.2, r * 0.6].forEach(sx => {
                ctx.beginPath();
                ctx.moveTo(sx - r * 0.12, -r * 0.6);
                ctx.lineTo(sx, -r * 0.92);
                ctx.lineTo(sx + r * 0.12, -r * 0.6);
                ctx.closePath();
                ctx.fill();
            });

            // Body
            ctx.fillStyle = '#9bc472';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Matcha Swirl on belly
            ctx.fillStyle = '#e8f5e9';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.25, r * 0.55, r * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#1e3814';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.1, r * 0.1, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.1, r * 0.1, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.14, r * 0.04, 0, Math.PI * 2);
            ctx.arc(r * 0.29, -r * 0.14, r * 0.04, 0, Math.PI * 2);
            ctx.fill();

            // Cheerful mouth
            ctx.strokeStyle = '#2d501c';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(0, r * 0.1, r * 0.2, 0.1, Math.PI - 0.1);
            ctx.stroke();

            // Cheeks
            ctx.fillStyle = 'rgba(255, 150, 170, 0.5)';
            ctx.beginPath();
            ctx.arc(-r * 0.48, r * 0.12, r * 0.14, 0, Math.PI * 2);
            ctx.arc(r * 0.48, r * 0.12, r * 0.14, 0, Math.PI * 2);
            ctx.fill();
        }
    }
];

window.TOY_CATALOGUE = TOY_CATALOGUE;

