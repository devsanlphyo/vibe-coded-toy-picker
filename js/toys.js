/**
 * Toy Definitions and Vector Plushie Renderers
 * Massive 50-Toy Store Catalogue across 5 Thematic Categories:
 * 1. 🦫 Capybaras (10 Toys)
 * 2. 🐱 Cats (10 Toys)
 * 3. 🐶 Dogs & Puppies (10 Toys)
 * 4. 🐼 Forest & Wildlife (10 Toys)
 * 5. 🦄 Fantasy & Mythical (10 Toys)
 */
const TOY_CATALOGUE = [
    // =========================================================================
    // 🦫 1. CAPYBARA COLLECTION (10 TOYS)
    // =========================================================================
    {
        id: 'capy_cool',
        category: 'capybara',
        name: 'Cool Guy Capybara',
        rarity: 'rare',
        radius: 29,
        color: '#d8a873',
        accentColor: '#38bdf8',
        tagline: 'Super chill with retro blue shades and double thumbs up! 👍😎👍',
        draw(ctx, r) {
            ctx.save();
            ctx.fillStyle = '#9c5825'; ctx.strokeStyle = '#221408'; ctx.lineWidth = 2.5;
            ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2);
            ctx.arc(r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#3a1f0c';
            ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#d8a873'; ctx.strokeStyle = '#221408'; ctx.lineWidth = 2.8;
            ctx.beginPath(); ctx.arc(0, r * 0.05, r * 0.96, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = '#221408';
            ctx.beginPath(); ctx.roundRect(-r * 0.98, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(-r * 0.98, -r * 0.08, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.08, r * 0.14, r * 0.07, 2); ctx.fill();
            ctx.fillStyle = '#b86629'; ctx.strokeStyle = '#221408'; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.ellipse(0, r * 0.18, r * 0.42, r * 0.38, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.strokeStyle = '#181008'; ctx.lineWidth = 3.2; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(-r * 0.14, r * 0.02); ctx.lineTo(r * 0.14, r * 0.02);
            ctx.moveTo(0, r * 0.02); ctx.lineTo(0, r * 0.24); ctx.arc(0, r * 0.24, r * 0.12, 0.2, Math.PI - 0.2); ctx.stroke();
            ctx.fillStyle = '#18181b';
            ctx.beginPath(); ctx.moveTo(-r * 0.85, -r * 0.35); ctx.lineTo(-r * 0.1, -r * 0.15);
            ctx.lineTo(-r * 0.15, -r * 0.02); ctx.lineTo(-r * 0.78, -r * 0.05); ctx.closePath();
            ctx.moveTo(r * 0.85, -r * 0.35); ctx.lineTo(r * 0.1, -r * 0.15);
            ctx.lineTo(r * 0.15, -r * 0.02); ctx.lineTo(r * 0.78, -r * 0.05); ctx.closePath(); ctx.fill();
            ctx.strokeStyle = '#18181b'; ctx.lineWidth = 3.5;
            ctx.beginPath(); ctx.moveTo(-r * 0.12, -r * 0.15); ctx.lineTo(r * 0.12, -r * 0.15); ctx.stroke();
            ctx.fillStyle = '#42a5f5';
            ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.32); ctx.lineTo(-r * 0.15, -r * 0.17);
            ctx.lineTo(-r * 0.2, -r * 0.06); ctx.lineTo(-r * 0.74, -r * 0.08); ctx.closePath();
            ctx.moveTo(r * 0.8, -r * 0.32); ctx.lineTo(r * 0.15, -r * 0.17);
            ctx.lineTo(r * 0.2, -r * 0.06); ctx.lineTo(r * 0.74, -r * 0.08); ctx.closePath(); ctx.fill();
            ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.moveTo(-r * 0.62, -r * 0.3); ctx.lineTo(-r * 0.52, -r * 0.1);
            ctx.moveTo(-r * 0.42, -r * 0.24); ctx.lineTo(-r * 0.34, -r * 0.1);
            ctx.moveTo(r * 0.42, -r * 0.24); ctx.lineTo(r * 0.34, -r * 0.1);
            ctx.moveTo(r * 0.62, -r * 0.3); ctx.lineTo(r * 0.52, -r * 0.1); ctx.stroke();
            ctx.fillStyle = '#a85f26'; ctx.strokeStyle = '#221408'; ctx.lineWidth = 2.4;
            ctx.beginPath(); ctx.ellipse(-r * 0.68, r * 0.4, r * 0.11, r * 0.22, -0.2, 0, Math.PI * 2);
            ctx.arc(-r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.beginPath(); ctx.ellipse(r * 0.68, r * 0.4, r * 0.11, r * 0.22, 0.2, 0, Math.PI * 2);
            ctx.arc(r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.restore();
        }
    },
    {
        id: 'capy_orange',
        category: 'capybara',
        name: 'Yuzu Zen Capybara',
        rarity: 'common',
        radius: 28,
        color: '#8b5a2b',
        accentColor: '#ff9800',
        tagline: 'Master of ultimate relaxation with an orange hat. 🍊',
        draw(ctx, r) {
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath(); ctx.ellipse(0, r * 0.1, r * 0.95, r * 0.85, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#5c3614';
            ctx.beginPath(); ctx.arc(-r * 0.7, -r * 0.45, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.7, -r * 0.45, r * 0.16, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c';
            ctx.beginPath(); ctx.roundRect(-r * 0.42, 0, r * 0.84, r * 0.62, 8); ctx.fill();
            ctx.strokeStyle = '#2b1506'; ctx.lineWidth = 2.2;
            ctx.beginPath(); ctx.moveTo(-r * 0.58, -r * 0.08); ctx.lineTo(-r * 0.32, -r * 0.08);
            ctx.moveTo(r * 0.32, -r * 0.08); ctx.lineTo(r * 0.58, -r * 0.08); ctx.stroke();
            const oy = -r * 0.82;
            ctx.fillStyle = '#ff9800'; ctx.beginPath(); ctx.arc(0, oy, r * 0.28, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.ellipse(r * 0.12, oy - r * 0.26, r * 0.1, r * 0.05, 0.5, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'capy_duck',
        category: 'capybara',
        name: 'Capy & Duck Pal',
        rarity: 'legendary',
        radius: 29,
        color: '#7b4c22',
        accentColor: '#ffd700',
        tagline: 'Best buddies exploring the world with a cozy red winter scarf. 🐥',
        draw(ctx, r) {
            ctx.fillStyle = '#7b4c22'; ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.95, r * 0.82, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#5c3515'; ctx.beginPath(); ctx.roundRect(-r * 0.4, r * 0.08, r * 0.8, r * 0.58, 7); ctx.fill();
            ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.roundRect(-r * 0.7, r * 0.55, r * 1.4, r * 0.26, 6); ctx.fill();
            const dy = -r * 0.75;
            ctx.fillStyle = '#ffd500'; ctx.beginPath(); ctx.arc(0, dy, r * 0.32, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff7700'; ctx.beginPath(); ctx.ellipse(r * 0.26, dy + r * 0.05, r * 0.14, r * 0.08, 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(r * 0.06, dy - r * 0.08, r * 0.05, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'capy_spa',
        category: 'capybara',
        name: 'Onsen Spa Capybara',
        rarity: 'rare',
        radius: 28,
        color: '#936037',
        accentColor: '#00bcd4',
        tagline: 'Soaking in a hot spring with a folded spa towel. ♨️',
        draw(ctx, r) {
            ctx.fillStyle = '#80deea'; ctx.beginPath(); ctx.ellipse(0, r * 0.6, r * 0.95, r * 0.35, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#936037'; ctx.beginPath(); ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#734522'; ctx.beginPath(); ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.55, 6); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.roundRect(-r * 0.45, -r * 0.95, r * 0.9, r * 0.32, 4); ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; ctx.lineWidth = 1.8;
            ctx.beginPath(); ctx.moveTo(-r * 0.3, -r * 1.05); ctx.quadraticCurveTo(-r * 0.4, -r * 1.3, -r * 0.25, -r * 1.45); ctx.stroke();
        }
    },
    {
        id: 'capy_croissant',
        category: 'capybara',
        name: 'Bakery Capybara',
        rarity: 'common',
        radius: 28,
        color: '#8b5a2b',
        accentColor: '#ffb300',
        tagline: 'Chief pastry chef holding a fresh buttery croissant. 🥐',
        draw(ctx, r) {
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.arc(0, r * 0.1, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(-r * 0.2, -r * 0.9, r * 0.25, 0, Math.PI * 2);
            ctx.arc(r * 0.2, -r * 0.9, r * 0.25, 0, Math.PI * 2); ctx.roundRect(-r * 0.45, -r * 0.75, r * 0.9, r * 0.25, 3); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.5, 6); ctx.fill();
            ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(0, r * 0.45, r * 0.32, 0.8, Math.PI - 0.8, true); ctx.fill();
        }
    },
    {
        id: 'capy_strawb',
        category: 'capybara',
        name: 'Strawberry Capybara',
        rarity: 'rare',
        radius: 28,
        color: '#8b5a2b',
        accentColor: '#e91e63',
        tagline: 'Sporting a fresh red strawberry hat with cute seed dots. 🍓',
        draw(ctx, r) {
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.arc(0, r * 0.1, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e91e63';
            ctx.beginPath(); ctx.arc(0, -r * 0.55, r * 0.5, Math.PI, Math.PI * 2);
            ctx.bezierCurveTo(r * 0.5, -r * 0.2, -r * 0.5, -r * 0.2, -r * 0.5, -r * 0.55); ctx.fill();
            ctx.fillStyle = '#ffeb3b'; ctx.beginPath(); ctx.arc(0, -r * 0.75, r * 0.04, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.ellipse(0, -r * 1.05, r * 0.15, r * 0.08, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.5, 6); ctx.fill();
        }
    },
    {
        id: 'capy_frog',
        category: 'capybara',
        name: 'Froggy Raincoat Capy',
        rarity: 'common',
        radius: 28,
        color: '#7cb342',
        accentColor: '#8b5a2b',
        tagline: 'Splashing in puddles wearing a froggy hooded raincoat. 🐸',
        draw(ctx, r) {
            ctx.fillStyle = '#7cb342';
            ctx.beginPath(); ctx.arc(-r * 0.45, -r * 0.75, r * 0.25, 0, Math.PI * 2);
            ctx.arc(r * 0.45, -r * 0.75, r * 0.25, 0, Math.PI * 2); ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.45, -r * 0.75, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.45, -r * 0.75, r * 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.6, r * 0.55, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.3, r * 0.15, r * 0.6, r * 0.4, 5); ctx.fill();
        }
    },
    {
        id: 'capy_donut',
        category: 'capybara',
        name: 'Donut Float Capybara',
        rarity: 'rare',
        radius: 29,
        color: '#8b5a2b',
        accentColor: '#f06292',
        tagline: 'Floating gently inside a pink strawberry sprinkle donut. 🍩',
        draw(ctx, r) {
            ctx.fillStyle = '#ff80ab'; ctx.beginPath(); ctx.arc(0, r * 0.2, r * 0.85, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffeb3b'; ctx.fillRect(-10, r * 0.3, 6, 3); ctx.fillStyle = '#00e5ff'; ctx.fillRect(8, r * 0.3, 6, 3);
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.arc(0, -r * 0.15, r * 0.55, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.28, -r * 0.15, r * 0.56, r * 0.4, 5); ctx.fill();
        }
    },
    {
        id: 'capy_wizard',
        category: 'capybara',
        name: 'Star Wizard Capybara',
        rarity: 'legendary',
        radius: 29,
        color: '#4a148c',
        accentColor: '#ffd700',
        tagline: 'Casts spells of infinite chillness with a starry wizard hat. 🧙‍♂️✨',
        draw(ctx, r) {
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.arc(0, r * 0.15, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4a148c';
            ctx.beginPath(); ctx.ellipse(0, -r * 0.45, r * 0.75, r * 0.2, 0, 0, Math.PI * 2);
            ctx.moveTo(-r * 0.45, -r * 0.45); ctx.lineTo(r * 0.1, -r * 1.35); ctx.lineTo(r * 0.45, -r * 0.45); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(0, -r * 0.85, r * 0.12, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.36, r * 0.12, r * 0.72, r * 0.48, 6); ctx.fill();
        }
    },
    {
        id: 'capy_boba',
        category: 'capybara',
        name: 'Boba Milk Tea Capybara',
        rarity: 'legendary',
        radius: 29,
        color: '#8b5a2b',
        accentColor: '#d7ccc8',
        tagline: 'Sipping brown sugar boba milk tea all day long. 🧋',
        draw(ctx, r) {
            ctx.fillStyle = '#8b5a2b'; ctx.beginPath(); ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6a401c'; ctx.beginPath(); ctx.roundRect(-r * 0.38, -r * 0.05, r * 0.76, r * 0.45, 6); ctx.fill();
            const by = r * 0.45;
            ctx.fillStyle = '#bcaaa4'; ctx.beginPath(); ctx.roundRect(-r * 0.28, by - r * 0.15, r * 0.56, r * 0.48, [2, 2, 6, 6]); ctx.fill();
            ctx.fillStyle = '#a1887f'; ctx.beginPath(); ctx.roundRect(-r * 0.24, by - r * 0.05, r * 0.48, r * 0.35, [0, 0, 5, 5]); ctx.fill();
            ctx.fillStyle = '#3e2723';
            [-r * 0.14, 0, r * 0.14].forEach(px => { ctx.beginPath(); ctx.arc(px, by + r * 0.22, r * 0.055, 0, Math.PI * 2); ctx.fill(); });
            ctx.strokeStyle = '#e91e63'; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(0, by - r * 0.12); ctx.lineTo(r * 0.12, by - r * 0.38); ctx.stroke();
        }
    },

    // =========================================================================
    // 🐱 2. CAT COLLECTION (10 TOYS)
    // =========================================================================
    {
        id: 'cat_nah',
        category: 'cat',
        name: 'The "NAH" Meme Cat',
        rarity: 'legendary',
        radius: 29,
        color: '#fdfbf7',
        accentColor: '#e07a38',
        tagline: 'Huge teary eyes and an unmistakable viral attitude: NAH. 😾',
        draw(ctx, r) {
            ctx.save();
            // Left Ear (Orange calico patch)
            ctx.fillStyle = '#d97736';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.6);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            // Right Ear (Black/dark grey calico patch)
            ctx.fillStyle = '#2d2d38';
            ctx.beginPath();
            ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.6);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            // Main Head (Fluffy white)
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.8;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Calico Forehead Patches
            ctx.fillStyle = '#d97736';
            ctx.beginPath();
            ctx.ellipse(-r * 0.35, -r * 0.35, r * 0.38, r * 0.3, -0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#2d2d38';
            ctx.beginPath();
            ctx.ellipse(r * 0.35, -r * 0.45, r * 0.3, r * 0.25, 0.3, 0, Math.PI * 2);
            ctx.fill();

            // Red Collar & Bell
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.55, r * 0.62, r * 1.1, r * 0.18, 4);
            ctx.fill();

            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(0, r * 0.76, r * 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Pink Nose
            ctx.fillStyle = '#ff8da1';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.08, r * 0.12, r * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();

            // Tiny cute mouth
            ctx.strokeStyle = '#3e2723';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(-r * 0.08, r * 0.2, r * 0.08, 0.2, Math.PI - 0.2);
            ctx.arc(r * 0.08, r * 0.2, r * 0.08, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // HUGE Glistening Teary/Glassy Meme Eyes!
            [-r * 0.38, r * 0.38].forEach((ex) => {
                // Eye base
                ctx.fillStyle = '#111116';
                ctx.beginPath();
                ctx.arc(ex, -r * 0.08, r * 0.26, 0, Math.PI * 2);
                ctx.fill();

                // Glassy deep reflection gradient
                const eyeGrad = ctx.createRadialGradient(ex - 2, -r * 0.08 - 2, 2, ex, -r * 0.08, r * 0.26);
                eyeGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
                eyeGrad.addColorStop(0.35, 'rgba(70, 80, 110, 0.3)');
                eyeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = eyeGrad;
                ctx.beginPath();
                ctx.arc(ex, -r * 0.08, r * 0.26, 0, Math.PI * 2);
                ctx.fill();

                // Giant White Glare Highlights (the iconic teary meme look!)
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(ex - r * 0.08, -r * 0.16, r * 0.09, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(ex + r * 0.09, -r * 0.02, r * 0.045, 0, Math.PI * 2);
                ctx.fill();
            });

            // Iconic "NAH" Meme Text Banner across bottom!
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 3.5;
            ctx.font = '900 13px "Impact", "Arial Black", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.strokeText('NAH', 0, r * 0.42);
            ctx.fillText('NAH', 0, r * 0.42);

            ctx.restore();
        }
    },
    {
        id: 'cat_calico',
        category: 'cat',
        name: 'Calico Kitten',
        rarity: 'common',
        radius: 27,
        color: '#fdfbf7',
        accentColor: '#e07a38',
        tagline: 'Purrs at 40Hz and loves sunny windowsills. 🐱',
        draw(ctx, r) {
            ctx.fillStyle = '#e07a38'; ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.6); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#3f3835'; ctx.beginPath(); ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.6); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#fdfbf7'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e07a38'; ctx.beginPath(); ctx.ellipse(-r * 0.35, -r * 0.2, r * 0.4, r * 0.35, -0.3, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#228b22'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_orange',
        category: 'cat',
        name: 'Chonky Orange Tabby',
        rarity: 'common',
        radius: 28,
        color: '#ff9800',
        accentColor: '#e65100',
        tagline: '100% fluff, 0% thoughts, 1000% love! 🐾',
        draw(ctx, r) {
            ctx.fillStyle = '#f57c00'; ctx.beginPath(); ctx.moveTo(-r * 0.75, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 1.0); ctx.lineTo(-r * 0.1, -r * 0.55); ctx.moveTo(r * 0.75, -r * 0.2); ctx.lineTo(r * 0.55, -r * 1.0); ctx.lineTo(r * 0.1, -r * 0.55); ctx.fill();
            ctx.fillStyle = '#ff9800'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e65100'; ctx.beginPath(); ctx.moveTo(-r * 0.15, -r * 0.65); ctx.lineTo(0, -r * 0.35); ctx.lineTo(r * 0.15, -r * 0.65); ctx.lineTo(0, -r * 0.5); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#2e7d32'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_toast',
        category: 'cat',
        name: 'Bread Toast Cat',
        rarity: 'common',
        radius: 28,
        color: '#d7a15c',
        accentColor: '#f7d08a',
        tagline: 'Stuck its head right through a slice of golden buttered toast! 🍞',
        draw(ctx, r) {
            ctx.fillStyle = '#b0722e'; ctx.beginPath(); ctx.roundRect(-r * 0.95, -r * 0.95, r * 1.9, r * 1.9, 14); ctx.fill();
            ctx.fillStyle = '#fce4b8'; ctx.beginPath(); ctx.roundRect(-r * 0.8, -r * 0.8, r * 1.6, r * 1.6, 10); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, r * 0.65, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.2, -r * 0.05, r * 0.09, 0, Math.PI * 2); ctx.arc(r * 0.2, -r * 0.05, r * 0.09, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_black',
        category: 'cat',
        name: 'Midnight Witch Cat',
        rarity: 'rare',
        radius: 27,
        color: '#1a1a24',
        accentColor: '#ffd700',
        tagline: 'Sleek black kitten with glowing gold eyes and purple bow. 🐈‍⬛',
        draw(ctx, r) {
            ctx.fillStyle = '#1a1a24';
            ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.5); ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.5); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.08, r * 0.15, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.08, r * 0.15, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(-r * 0.32, -r * 0.08, r * 0.04, r * 0.12, 0, 0, Math.PI * 2); ctx.ellipse(r * 0.32, -r * 0.08, r * 0.04, r * 0.12, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#9c27b0'; ctx.beginPath(); ctx.roundRect(-r * 0.45, r * 0.65, r * 0.9, r * 0.18, 4); ctx.fill();
        }
    },
    {
        id: 'cat_siamese',
        category: 'cat',
        name: 'Siamese Princess',
        rarity: 'rare',
        radius: 27,
        color: '#f5ebe0',
        accentColor: '#4a2810',
        tagline: 'Elegant chocolate-point mask with sparkling sapphire eyes. 💎',
        draw(ctx, r) {
            ctx.fillStyle = '#3e2723'; ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.5); ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.5); ctx.fill();
            ctx.fillStyle = '#f5ebe0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4e342e'; ctx.beginPath(); ctx.ellipse(0, 0, r * 0.65, r * 0.55, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#1e88e5'; ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.08, r * 0.13, 0, Math.PI * 2); ctx.arc(r * 0.28, -r * 0.08, r * 0.13, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_sushi',
        category: 'cat',
        name: 'Neko Salmon Sushi',
        rarity: 'rare',
        radius: 28,
        color: '#ff6f61',
        accentColor: '#2e7d32',
        tagline: 'White rice kitten wearing salmon sashimi and seaweed belt. 🍣',
        draw(ctx, r) {
            ctx.fillStyle = '#ff6f61'; ctx.beginPath(); ctx.roundRect(-r * 0.85, -r * 0.9, r * 1.7, r * 0.45, 8); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, r * 0.05, r * 0.85, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#1b382b'; ctx.fillRect(-r * 0.3, -r * 0.88, r * 0.6, r * 1.75);
            ctx.strokeStyle = '#221105'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(-r * 0.45, 0, r * 0.1, 0.2, Math.PI - 0.2); ctx.arc(r * 0.45, 0, r * 0.1, 0.2, Math.PI - 0.2); ctx.stroke();
        }
    },
    {
        id: 'cat_boba',
        category: 'cat',
        name: 'Matcha Boba Cat',
        rarity: 'rare',
        radius: 28,
        color: '#81c784',
        accentColor: '#388e3c',
        tagline: 'Pastel matcha cat enjoying cold boba tea with cat-shaped pearls. 🍵',
        draw(ctx, r) {
            ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.moveTo(-r * 0.75, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 0.95); ctx.lineTo(-r * 0.15, -r * 0.5); ctx.moveTo(r * 0.75, -r * 0.2); ctx.lineTo(r * 0.55, -r * 0.95); ctx.lineTo(r * 0.15, -r * 0.5); ctx.fill();
            ctx.fillStyle = '#a5d6a7'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            const by = r * 0.4;
            ctx.fillStyle = '#c8e6c9'; ctx.beginPath(); ctx.roundRect(-r * 0.24, by - r * 0.15, r * 0.48, r * 0.45, [2, 2, 6, 6]); ctx.fill();
            ctx.fillStyle = '#388e3c'; ctx.beginPath(); ctx.roundRect(-r * 0.2, by - r * 0.05, r * 0.4, r * 0.32, [0, 0, 5, 5]); ctx.fill();
        }
    },
    {
        id: 'cat_astro',
        category: 'cat',
        name: 'Cosmic Astro-Cat',
        rarity: 'legendary',
        radius: 28,
        color: '#2a1b4e',
        accentColor: '#00e5ff',
        tagline: 'Explores the Milky Way in a glowing astronaut bubble helmet. 🚀🌌',
        draw(ctx, r) {
            const helmetGrad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 0, 0, 0, r * 1.05);
            helmetGrad.addColorStop(0, 'rgba(0, 229, 255, 0.45)'); helmetGrad.addColorStop(1, 'rgba(0, 229, 255, 0.8)');
            ctx.fillStyle = helmetGrad; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#00e5ff'; ctx.lineWidth = 2.5; ctx.stroke();
            ctx.fillStyle = '#ff80ab'; ctx.beginPath(); ctx.moveTo(-r * 0.6, -r * 0.3); ctx.lineTo(-r * 0.4, -r * 0.75); ctx.lineTo(-r * 0.15, -r * 0.4); ctx.moveTo(r * 0.6, -r * 0.3); ctx.lineTo(r * 0.4, -r * 0.75); ctx.lineTo(r * 0.15, -r * 0.4); ctx.fill();
            ctx.fillStyle = '#00e5ff'; ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_shark',
        category: 'cat',
        name: 'Shark Costume Kitty',
        rarity: 'legendary',
        radius: 29,
        color: '#42a5f5',
        accentColor: '#ffffff',
        tagline: 'Ferociously cuddly kitten wearing a shark suit with teeth and fin! 🦈',
        draw(ctx, r) {
            ctx.fillStyle = '#1976d2'; ctx.beginPath(); ctx.moveTo(0, -r * 0.7); ctx.lineTo(r * 0.35, -r * 1.35); ctx.lineTo(-r * 0.15, -r * 0.9); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#42a5f5'; ctx.beginPath(); ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(0, r * 0.05, r * 0.75, r * 0.65, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fce4ec'; ctx.beginPath(); ctx.ellipse(0, r * 0.1, r * 0.58, r * 0.5, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#221105'; ctx.beginPath(); ctx.arc(-r * 0.26, 0, r * 0.09, 0, Math.PI * 2); ctx.arc(r * 0.26, 0, r * 0.09, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'cat_flower',
        category: 'cat',
        name: 'Sunflower Kitty',
        rarity: 'legendary',
        radius: 29,
        color: '#ffd54f',
        accentColor: '#ff6f00',
        tagline: 'Radiant golden kitten blooming with cheerful sunflower petals! 🌻',
        draw(ctx, r) {
            ctx.fillStyle = '#ffb300';
            for (let i = 0; i < 10; i++) {
                const a = (i * Math.PI * 2) / 10;
                ctx.beginPath(); ctx.arc(Math.cos(a) * r * 0.85, Math.sin(a) * r * 0.85, r * 0.3, 0, Math.PI * 2); ctx.fill();
            }
            ctx.fillStyle = '#fff8e1'; ctx.beginPath(); ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffa000'; ctx.beginPath(); ctx.moveTo(-r * 0.5, -r * 0.3); ctx.lineTo(-r * 0.35, -r * 0.8); ctx.lineTo(-r * 0.1, -r * 0.45); ctx.moveTo(r * 0.5, -r * 0.3); ctx.lineTo(r * 0.35, -r * 0.8); ctx.lineTo(r * 0.1, -r * 0.45); ctx.fill();
            ctx.fillStyle = '#e65100'; ctx.beginPath(); ctx.arc(-r * 0.25, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.25, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },

    // =========================================================================
    // 🐶 3. DOG & PUPPY COLLECTION (10 TOYS)
    // =========================================================================
    {
        id: 'dog_shiba',
        category: 'dog',
        name: 'Classic Shiba Inu',
        rarity: 'common',
        radius: 27,
        color: '#e28834',
        accentColor: '#fbf4ea',
        tagline: 'Such fluff, very loyal, wow plushie! 🐕',
        draw(ctx, r) {
            ctx.fillStyle = '#ba6518'; ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.0); ctx.lineTo(-r * 0.15, -r * 0.6); ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.0); ctx.lineTo(r * 0.15, -r * 0.6); ctx.fill();
            ctx.fillStyle = '#e28834'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fbf4ea'; ctx.beginPath(); ctx.arc(-r * 0.35, r * 0.3, r * 0.38, 0, Math.PI * 2); ctx.arc(r * 0.35, r * 0.3, r * 0.38, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fbf4ea'; ctx.beginPath(); ctx.arc(-r * 0.35, -r * 0.35, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.35, -r * 0.35, r * 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#1e140d'; ctx.beginPath(); ctx.ellipse(0, r * 0.2, r * 0.14, r * 0.1, 0, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_corgi',
        category: 'dog',
        name: 'Royal Welsh Corgi',
        rarity: 'common',
        radius: 28,
        color: '#e67e22',
        accentColor: '#ffffff',
        tagline: 'Iconic peach bottom fluff and big perky ears! 🦊',
        draw(ctx, r) {
            ctx.fillStyle = '#d35400'; ctx.beginPath(); ctx.ellipse(-r * 0.55, -r * 0.75, r * 0.22, r * 0.45, -0.3, 0, Math.PI * 2); ctx.ellipse(r * 0.55, -r * 0.75, r * 0.22, r * 0.45, 0.3, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e67e22'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(0, -r * 0.5); ctx.lineTo(-r * 0.4, r * 0.4); ctx.lineTo(r * 0.4, r * 0.4); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.12, r * 0.08, 0, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_pug',
        category: 'dog',
        name: 'Silly Wrinkled Pug',
        rarity: 'common',
        radius: 27,
        color: '#d7ccc8',
        accentColor: '#3e2723',
        tagline: 'Cute wrinkled snout, big puppy eyes, and happy tongue! 🐶',
        draw(ctx, r) {
            ctx.fillStyle = '#4e342e'; ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.5, r * 0.25, 0, Math.PI * 2); ctx.arc(r * 0.65, -r * 0.5, r * 0.25, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#d7ccc8'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#3e2723'; ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.55, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.3, -r * 0.05, r * 0.14, 0, Math.PI * 2); ctx.arc(r * 0.3, -r * 0.05, r * 0.14, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff80ab'; ctx.beginPath(); ctx.arc(0, r * 0.4, r * 0.12, 0, Math.PI); ctx.fill();
        }
    },
    {
        id: 'dog_golden',
        category: 'dog',
        name: 'Golden Retriever Pup',
        rarity: 'common',
        radius: 28,
        color: '#ffca28',
        accentColor: '#f44336',
        tagline: 'Sunny pup ready to play fetch with a tennis ball! 🎾',
        draw(ctx, r) {
            ctx.fillStyle = '#ffa000'; ctx.beginPath(); ctx.ellipse(-r * 0.7, -r * 0.2, r * 0.25, r * 0.45, 0.2, 0, Math.PI * 2); ctx.ellipse(r * 0.7, -r * 0.2, r * 0.25, r * 0.45, -0.2, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffca28'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fff8e1'; ctx.beginPath(); ctx.ellipse(0, r * 0.2, r * 0.45, r * 0.35, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(0, r * 0.12, r * 0.14, r * 0.1, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#76ff03'; ctx.beginPath(); ctx.arc(r * 0.45, r * 0.45, r * 0.2, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_husky',
        category: 'dog',
        name: 'Arctic Husky',
        rarity: 'rare',
        radius: 28,
        color: '#cfd8dc',
        accentColor: '#00e5ff',
        tagline: 'Silver wolf markings with piercing icy-blue arctic eyes. ❄️',
        draw(ctx, r) {
            ctx.fillStyle = '#37474f'; ctx.beginPath(); ctx.moveTo(-r * 0.75, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 1.0); ctx.lineTo(-r * 0.1, -r * 0.55); ctx.moveTo(r * 0.75, -r * 0.2); ctx.lineTo(r * 0.55, -r * 1.0); ctx.lineTo(r * 0.1, -r * 0.55); ctx.fill();
            ctx.fillStyle = '#37474f'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-r * 0.35, r * 0.2, r * 0.42, 0, Math.PI * 2); ctx.arc(r * 0.35, r * 0.2, r * 0.42, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#00e5ff'; ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_poodle',
        category: 'dog',
        name: 'Fluffy Pink Poodle',
        rarity: 'rare',
        radius: 28,
        color: '#f8bbd0',
        accentColor: '#e91e63',
        tagline: 'Chic pastel pink pom-poms with a silk ribbon bow. 🐩',
        draw(ctx, r) {
            ctx.fillStyle = '#f48fb1';
            ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.3, r * 0.3, 0, Math.PI * 2); ctx.arc(r * 0.65, -r * 0.3, r * 0.3, 0, Math.PI * 2);
            ctx.arc(0, -r * 0.7, r * 0.35, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#f8bbd0'; ctx.beginPath(); ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e91e63'; ctx.beginPath(); ctx.arc(0, -r * 0.45, r * 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.25, -r * 0.05, r * 0.08, 0, Math.PI * 2); ctx.arc(r * 0.25, -r * 0.05, r * 0.08, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_detective',
        category: 'dog',
        name: 'Detective Basset Hound',
        rarity: 'rare',
        radius: 28,
        color: '#8d6e63',
        accentColor: '#4e342e',
        tagline: 'Tracking clues with droopy ears and a detective hat! 🔍',
        draw(ctx, r) {
            ctx.fillStyle = '#4e342e'; ctx.beginPath(); ctx.ellipse(-r * 0.8, r * 0.1, r * 0.22, r * 0.6, 0.1, 0, Math.PI * 2); ctx.ellipse(r * 0.8, r * 0.1, r * 0.22, r * 0.6, -0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#8d6e63'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#a1887f'; ctx.beginPath(); ctx.roundRect(-r * 0.7, -r * 0.95, r * 1.4, r * 0.35, 4); ctx.fill();
            ctx.strokeStyle = '#00bcd4'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(r * 0.45, r * 0.35, r * 0.18, 0, Math.PI * 2); ctx.stroke();
        }
    },
    {
        id: 'dog_hotdog',
        category: 'dog',
        name: 'Dachshund Hotdog',
        rarity: 'rare',
        radius: 28,
        color: '#b08968',
        accentColor: '#ffb703',
        tagline: 'Silly long pup nestled right inside a warm mustard bun! 🌭',
        draw(ctx, r) {
            ctx.fillStyle = '#e9c46a'; ctx.beginPath(); ctx.roundRect(-r * 0.95, -r * 0.8, r * 1.9, r * 1.6, 12); ctx.fill();
            ctx.fillStyle = '#b08968'; ctx.beginPath(); ctx.arc(0, 0, r * 0.65, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#ffb703'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-r * 0.6, r * 0.5); ctx.quadraticCurveTo(0, r * 0.3, r * 0.6, r * 0.5); ctx.stroke();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.2, -r * 0.05, r * 0.08, 0, Math.PI * 2); ctx.arc(r * 0.2, -r * 0.05, r * 0.08, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_angel',
        category: 'dog',
        name: 'Guardian Angel Pup',
        rarity: 'legendary',
        radius: 29,
        color: '#fff9c4',
        accentColor: '#ffd700',
        tagline: 'Blessed golden puppy with feathery wings and a golden halo. 😇✨',
        draw(ctx, r) {
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(-r * 0.85, -r * 0.2, r * 0.35, r * 0.55, -0.4, 0, Math.PI * 2); ctx.ellipse(r * 0.85, -r * 0.2, r * 0.35, r * 0.55, 0.4, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fff9c4'; ctx.beginPath(); ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(0, -r * 0.95, r * 0.45, r * 0.15, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = '#3e2723'; ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.05, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.28, -r * 0.05, r * 0.1, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dog_samoyed',
        category: 'dog',
        name: 'Cloud Fluff Samoyed',
        rarity: 'legendary',
        radius: 29,
        color: '#ffffff',
        accentColor: '#ff80ab',
        tagline: 'Pure white smiling cloud of eternal happiness! ☁️🤍',
        draw(ctx, r) {
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 8; i++) {
                const a = (i * Math.PI * 2) / 8;
                ctx.beginPath(); ctx.arc(Math.cos(a) * r * 0.75, Math.sin(a) * r * 0.75, r * 0.35, 0, Math.PI * 2); ctx.fill();
            }
            ctx.beginPath(); ctx.arc(0, 0, r * 0.8, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff80ab'; ctx.beginPath(); ctx.moveTo(-r * 0.5, -r * 0.45); ctx.lineTo(-r * 0.35, -r * 0.9); ctx.lineTo(-r * 0.15, -r * 0.55); ctx.moveTo(r * 0.5, -r * 0.45); ctx.lineTo(r * 0.35, -r * 0.9); ctx.lineTo(r * 0.15, -r * 0.55); ctx.fill();
            ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r * 0.25, -r * 0.05, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.25, -r * 0.05, r * 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#111'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, r * 0.15, r * 0.18, 0.2, Math.PI - 0.2); ctx.stroke();
        }
    },

    // =========================================================================
    // 🐼 4. FOREST & WILDLIFE COLLECTION (10 TOYS)
    // =========================================================================
    {
        id: 'bear',
        category: 'forest',
        name: 'Honey Bear',
        rarity: 'common',
        radius: 26,
        color: '#b5713b',
        accentColor: '#fadbb8',
        tagline: 'Loves warm honey and cozy hugs. 🍯',
        draw(ctx, r) {
            ctx.fillStyle = '#8f4f1e'; ctx.beginPath(); ctx.arc(-r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2); ctx.arc(r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#b5713b'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fadbb8'; ctx.beginPath(); ctx.ellipse(0, r * 0.2, r * 0.45, r * 0.35, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#22150c'; ctx.beginPath(); ctx.arc(-r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2); ctx.arc(r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'duck',
        category: 'forest',
        name: 'Rubber Ducky',
        rarity: 'common',
        radius: 25,
        color: '#ffd026',
        accentColor: '#ff7700',
        tagline: 'Always ready for bath time splashing! 🦆',
        draw(ctx, r) {
            ctx.fillStyle = '#ffd026'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff7700'; ctx.beginPath(); ctx.ellipse(r * 0.5, r * 0.05, r * 0.35, r * 0.18, 0.1, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(r * 0.15, -r * 0.2, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'bunny',
        category: 'forest',
        name: 'Fluffy Bunny',
        rarity: 'common',
        radius: 25,
        color: '#fcedea',
        accentColor: '#f7a8b8',
        tagline: 'Gentle twitchy nose and ultra soft fur. 🐰',
        draw(ctx, r) {
            ctx.fillStyle = '#eed6d3'; ctx.beginPath(); ctx.ellipse(-r * 0.45, -r * 0.85, r * 0.2, r * 0.55, -0.2, 0, Math.PI * 2); ctx.ellipse(r * 0.45, -r * 0.85, r * 0.2, r * 0.55, 0.2, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fcedea'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#422a2a'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'penguin',
        category: 'forest',
        name: 'Cuddle Penguin',
        rarity: 'common',
        radius: 25,
        color: '#28364a',
        accentColor: '#ffaa33',
        tagline: 'Waddles with joy when holding a pebble. 🐧',
        draw(ctx, r) {
            ctx.fillStyle = '#28364a'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.65, r * 0.72, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff9800'; ctx.beginPath(); ctx.moveTo(-r * 0.16, r * 0.05); ctx.lineTo(r * 0.16, r * 0.05); ctx.lineTo(0, r * 0.3); ctx.closePath(); ctx.fill();
        }
    },
    {
        id: 'frog',
        category: 'forest',
        name: 'Tiny Froggie',
        rarity: 'common',
        radius: 25,
        color: '#65be4c',
        accentColor: '#a2eb8c',
        tagline: 'Ribbit! Expert fly catcher and lilypad lounger. 🐸',
        draw(ctx, r) {
            ctx.fillStyle = '#53a83b'; ctx.beginPath(); ctx.arc(-r * 0.5, -r * 0.65, r * 0.35, 0, Math.PI * 2); ctx.arc(r * 0.5, -r * 0.65, r * 0.35, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#65be4c'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#1e3814'; ctx.beginPath(); ctx.arc(-r * 0.5, -r * 0.65, r * 0.18, 0, Math.PI * 2); ctx.arc(r * 0.5, -r * 0.65, r * 0.18, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'panda_bamboo',
        category: 'forest',
        name: 'Sweet Bamboo Panda',
        rarity: 'common',
        radius: 28,
        color: '#ffffff',
        accentColor: '#4caf50',
        tagline: 'Happily munching a fresh stalk of green bamboo. 🎋🐼',
        draw(ctx, r) {
            ctx.fillStyle = '#212121'; ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2); ctx.arc(r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#212121'; ctx.beginPath(); ctx.ellipse(-r * 0.32, -r * 0.1, r * 0.18, r * 0.22, -0.3, 0, Math.PI * 2); ctx.ellipse(r * 0.32, -r * 0.1, r * 0.18, r * 0.22, 0.3, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.roundRect(r * 0.3, r * 0.1, r * 0.15, r * 0.75, 3); ctx.fill();
        }
    },
    {
        id: 'otter_shell',
        category: 'forest',
        name: 'Sea Otter Pal',
        rarity: 'rare',
        radius: 28,
        color: '#6d4c41',
        accentColor: '#ff80ab',
        tagline: 'Floating peacefully while hugging a prized pink seashell. 🐚',
        draw(ctx, r) {
            ctx.fillStyle = '#4e342e'; ctx.beginPath(); ctx.arc(-r * 0.7, -r * 0.3, r * 0.18, 0, Math.PI * 2); ctx.arc(r * 0.7, -r * 0.3, r * 0.18, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#6d4c41'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#d7ccc8'; ctx.beginPath(); ctx.ellipse(0, r * 0.1, r * 0.55, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#f48fb1'; ctx.beginPath(); ctx.arc(0, r * 0.45, r * 0.25, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'fox_kitsune',
        category: 'forest',
        name: 'Autumn Red Fox',
        rarity: 'rare',
        radius: 28,
        color: '#e64a19',
        accentColor: '#ffffff',
        tagline: 'Fiery orange coat with a bushy white-tipped tail. 🦊🍂',
        draw(ctx, r) {
            ctx.fillStyle = '#d84315'; ctx.beginPath(); ctx.moveTo(-r * 0.85, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.1); ctx.lineTo(-r * 0.15, -r * 0.6); ctx.moveTo(r * 0.85, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.1); ctx.lineTo(r * 0.15, -r * 0.6); ctx.fill();
            ctx.fillStyle = '#e64a19'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(0, r * 0.45); ctx.lineTo(-r * 0.85, 0); ctx.lineTo(0, -r * 0.2); ctx.lineTo(r * 0.85, 0); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#212121'; ctx.beginPath(); ctx.ellipse(0, r * 0.35, r * 0.12, r * 0.08, 0, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'red_panda',
        category: 'forest',
        name: 'Rusty Red Panda',
        rarity: 'rare',
        radius: 28,
        color: '#c2410c',
        accentColor: '#ffffff',
        tagline: 'Adorable white eyebrow marks and a lush ringed tail! 🐾',
        draw(ctx, r) {
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-r * 0.65, -r * 0.65, r * 0.3, 0, Math.PI * 2); ctx.arc(r * 0.65, -r * 0.65, r * 0.3, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#c2410c'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(-r * 0.35, -r * 0.3, r * 0.14, r * 0.25, -0.2, 0, Math.PI * 2); ctx.ellipse(r * 0.35, -r * 0.3, r * 0.14, r * 0.25, 0.2, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#271911'; ctx.beginPath(); ctx.ellipse(0, r * 0.22, r * 0.14, r * 0.09, 0, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'sloth_leaf',
        category: 'forest',
        name: 'Sleepy Tree Sloth',
        rarity: 'rare',
        radius: 28,
        color: '#a8896c',
        accentColor: '#4caf50',
        tagline: 'Moving at 0.1 km/h with an unstoppable gentle smile. 🦥🌿',
        draw(ctx, r) {
            ctx.fillStyle = '#a8896c'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#f5ebe0'; ctx.beginPath(); ctx.ellipse(0, 0, r * 0.72, r * 0.6, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#5c4033'; ctx.beginPath(); ctx.ellipse(-r * 0.32, -r * 0.05, r * 0.18, r * 0.12, -0.2, 0, Math.PI * 2); ctx.ellipse(r * 0.32, -r * 0.05, r * 0.18, r * 0.12, 0.2, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4caf50'; ctx.beginPath(); ctx.ellipse(0, r * 0.45, r * 0.28, r * 0.12, 0.3, 0, Math.PI * 2); ctx.fill();
        }
    },

    // =========================================================================
    // 🦄 5. FANTASY & MYTHICAL COLLECTION (10 TOYS)
    // =========================================================================
    {
        id: 'mushroom',
        category: 'fantasy',
        name: 'Magic Shroom',
        rarity: 'rare',
        radius: 26,
        color: '#e73845',
        accentColor: '#ffffff',
        tagline: 'Glows faintly beneath enchanted forest canopies. 🍄',
        draw(ctx, r) {
            ctx.fillStyle = '#f7eedb'; ctx.beginPath(); ctx.ellipse(0, r * 0.35, r * 0.5, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e73845'; ctx.beginPath(); ctx.arc(0, -r * 0.05, r * 0.95, Math.PI, Math.PI * 2);
            ctx.bezierCurveTo(r * 0.9, r * 0.25, -r * 0.9, r * 0.25, -r * 0.95, -r * 0.05); ctx.fill();
            ctx.fillStyle = '#ffffff'; [[-r * 0.5, -r * 0.45], [0, -r * 0.7], [r * 0.5, -r * 0.45]].forEach(([dx, dy]) => {
                ctx.beginPath(); ctx.arc(dx, dy, r * 0.18, 0, Math.PI * 2); ctx.fill();
            });
        }
    },
    {
        id: 'cloud',
        category: 'fantasy',
        name: 'Starry Cloud',
        rarity: 'rare',
        radius: 27,
        color: '#c2e3f7',
        accentColor: '#ffd700',
        tagline: 'Floats on gentle dreams and stardust breezes. ⭐',
        draw(ctx, r) {
            ctx.fillStyle = '#c2e3f7';
            ctx.beginPath(); ctx.arc(-r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2); ctx.arc(r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2); ctx.arc(0, -r * 0.4, r * 0.55, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffcf10'; ctx.beginPath(); ctx.arc(0, r * 0.2, r * 0.2, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'octo',
        category: 'fantasy',
        name: 'Octo Plush',
        rarity: 'rare',
        radius: 26,
        color: '#b094e8',
        accentColor: '#f7caf0',
        tagline: 'Has eight arms for holding eight snacks at once. 🐙',
        draw(ctx, r) {
            ctx.fillStyle = '#9b7ad8';
            for (let i = -3; i <= 3; i++) {
                ctx.beginPath(); ctx.arc(Math.sin(i * 0.26) * r * 0.8, r * 0.6 + Math.abs(i) * 2, r * 0.2, 0, Math.PI * 2); ctx.fill();
            }
            ctx.fillStyle = '#b094e8'; ctx.beginPath(); ctx.arc(0, -r * 0.1, r * 0.85, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#221144'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.08, r * 0.16, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.08, r * 0.16, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'boba_axolotl',
        category: 'fantasy',
        name: 'Boba Axolotl',
        rarity: 'rare',
        radius: 27,
        color: '#ffccd5',
        accentColor: '#8d6e63',
        tagline: 'Sweet as milk tea with brown sugar boba pearls. 🧋',
        draw(ctx, r) {
            ctx.fillStyle = '#ff6b8b';
            [-1, 1].forEach(s => { for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.ellipse(s * (r * 0.85), -r * 0.25 + i * 9, r * 0.22, r * 0.12, s * 0.3, 0, Math.PI * 2); ctx.fill(); } });
            ctx.fillStyle = '#ffccd5'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            const by = r * 0.4;
            ctx.fillStyle = '#d7ccc8'; ctx.beginPath(); ctx.roundRect(-r * 0.24, by - r * 0.15, r * 0.48, r * 0.45, [2, 2, 6, 6]); ctx.fill();
            ctx.fillStyle = '#c79268'; ctx.beginPath(); ctx.roundRect(-r * 0.21, by - r * 0.05, r * 0.42, r * 0.32, [0, 0, 5, 5]); ctx.fill();
        }
    },
    {
        id: 'matcha_dino',
        category: 'fantasy',
        name: 'Matcha Dino',
        rarity: 'common',
        radius: 26,
        color: '#9bc472',
        accentColor: '#5c8a32',
        tagline: 'Tiny stomper who enjoys warm herbal tea and clover fields. 🦕🍵',
        draw(ctx, r) {
            ctx.fillStyle = '#5c8a32'; [-r * 0.5, 0, r * 0.5].forEach(sx => { ctx.beginPath(); ctx.moveTo(sx - 6, -r * 0.6); ctx.lineTo(sx, -r * 0.9); ctx.lineTo(sx + 6, -r * 0.6); ctx.fill(); });
            ctx.fillStyle = '#9bc472'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#e8f5e9'; ctx.beginPath(); ctx.ellipse(0, r * 0.25, r * 0.55, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'dragon',
        category: 'fantasy',
        name: 'Golden Dragon',
        rarity: 'legendary',
        radius: 28,
        color: '#f7c93e',
        accentColor: '#ff5722',
        tagline: 'Legendary guardian of ancient treasure vaults. 🐉👑',
        draw(ctx, r) {
            ctx.fillStyle = '#e69819'; ctx.beginPath(); ctx.moveTo(-r * 0.6, -r * 0.2); ctx.lineTo(-r * 1.15, -r * 0.6); ctx.lineTo(-r * 0.8, 0); ctx.moveTo(r * 0.6, -r * 0.2); ctx.lineTo(r * 1.15, -r * 0.6); ctx.lineTo(r * 0.8, 0); ctx.fill();
            ctx.fillStyle = '#ff5722'; ctx.beginPath(); ctx.moveTo(-r * 0.45, -r * 0.6); ctx.lineTo(-r * 0.6, -r * 1.1); ctx.lineTo(-r * 0.25, -r * 0.8); ctx.moveTo(r * 0.45, -r * 0.6); ctx.lineTo(r * 0.6, -r * 1.1); ctx.lineTo(r * 0.25, -r * 0.8); ctx.fill();
            ctx.fillStyle = '#f7c93e'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#800020'; ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2); ctx.arc(r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'unicorn',
        category: 'fantasy',
        name: 'Rainbow Unicorn',
        rarity: 'legendary',
        radius: 28,
        color: '#ffffff',
        accentColor: '#ff66c4',
        tagline: 'Spreads prismatic rainbows wherever it gallops. 🦄🌈',
        draw(ctx, r) {
            const mc = ['#ff66c4', '#a066ff', '#5ce1e6', '#7ed957', '#ffde59'];
            mc.forEach((c, idx) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(-r * 0.6 + idx * 3, -r * 0.3 + idx * 6, r * 0.25, 0, Math.PI * 2); ctx.fill(); });
            ctx.fillStyle = '#ffb800'; ctx.beginPath(); ctx.moveTo(-r * 0.15, -r * 0.65); ctx.lineTo(0, -r * 1.35); ctx.lineTo(r * 0.15, -r * 0.65); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#5a189a'; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(-r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1); ctx.arc(r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1); ctx.stroke();
        }
    },
    {
        id: 'egg',
        category: 'fantasy',
        name: 'Royal Mystery Egg',
        rarity: 'legendary',
        radius: 28,
        color: '#ffc107',
        accentColor: '#9c27b0',
        tagline: 'Crowned with jewels, holds mythical surprises. 👑✨',
        draw(ctx, r) {
            ctx.fillStyle = '#ffd700';
            ctx.beginPath(); ctx.moveTo(-r * 0.5, -r * 0.65); ctx.lineTo(-r * 0.6, -r * 1.15); ctx.lineTo(0, -r * 1.25); ctx.lineTo(r * 0.6, -r * 1.15); ctx.lineTo(r * 0.5, -r * 0.65); ctx.fill();
            ctx.fillStyle = '#ffb300'; ctx.beginPath(); ctx.ellipse(0, 0, r * 0.85, r, 0, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#ab47bc'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(0, 0, r * 0.85, r * 0.35, 0, 0, Math.PI * 2); ctx.stroke();
        }
    },
    {
        id: 'phoenix',
        category: 'fantasy',
        name: 'Baby Fire Phoenix',
        rarity: 'legendary',
        radius: 28,
        color: '#ff3d00',
        accentColor: '#ffd600',
        tagline: 'Warm golden flames and eternal starlight wings. 🔥🪶',
        draw(ctx, r) {
            ctx.fillStyle = '#ffd600';
            ctx.beginPath(); ctx.moveTo(0, -r * 0.6); ctx.lineTo(-r * 0.25, -r * 1.35); ctx.lineTo(0, -r * 0.95); ctx.lineTo(r * 0.25, -r * 1.35); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ff3d00'; ctx.beginPath(); ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ff9100'; ctx.beginPath(); ctx.ellipse(0, r * 0.2, r * 0.55, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffd600'; ctx.beginPath(); ctx.moveTo(-r * 0.15, r * 0.05); ctx.lineTo(r * 0.15, r * 0.05); ctx.lineTo(0, r * 0.3); ctx.closePath(); ctx.fill();
        }
    },
    {
        id: 'fairy_axolotl',
        category: 'fantasy',
        name: 'Celestial Star Axolotl',
        rarity: 'legendary',
        radius: 29,
        color: '#b388ff',
        accentColor: '#00e5ff',
        tagline: 'Galactic stardust wings and glowing cosmos frills! 🌌✨',
        draw(ctx, r) {
            ctx.fillStyle = '#8c9eff';
            ctx.beginPath(); ctx.ellipse(-r * 0.8, -r * 0.1, r * 0.35, r * 0.5, -0.4, 0, Math.PI * 2); ctx.ellipse(r * 0.8, -r * 0.1, r * 0.35, r * 0.5, 0.4, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ede7f6'; ctx.beginPath(); ctx.arc(0, 0, r * 0.88, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#00e5ff'; ctx.beginPath(); ctx.arc(-r * 0.28, -r * 0.08, r * 0.12, 0, Math.PI * 2); ctx.arc(r * 0.28, -r * 0.08, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    }
];

window.TOY_CATALOGUE = TOY_CATALOGUE;
