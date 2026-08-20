/**
 * Toy Definitions and Vector Plushie Renderers
 * Featuring 10 Unique Capybara Toys, 10 Unique Cat Toys, and 9 Classic Arcade Plushies!
 */
const TOY_CATALOGUE = [
    // =========================================================================
    // 🦫 10 UNIQUE CAPYBARA TOYS
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
            // Ears
            ctx.fillStyle = '#9c5825';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(-r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2);
            ctx.arc(r * 0.65, -r * 0.65, r * 0.32, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Inner Ear Patches
            ctx.fillStyle = '#3a1f0c';
            ctx.beginPath();
            ctx.arc(-r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.65, -r * 0.65, r * 0.16, 0, Math.PI * 2);
            ctx.fill();

            // Main Head & Body
            ctx.fillStyle = '#d8a873';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.8;
            ctx.beginPath();
            ctx.arc(0, r * 0.05, r * 0.96, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Whisker dashes on cheeks
            ctx.fillStyle = '#221408';
            ctx.beginPath();
            ctx.roundRect(-r * 0.98, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(-r * 0.98, -r * 0.08, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.22, r * 0.14, r * 0.07, 2);
            ctx.roundRect(r * 0.84, -r * 0.08, r * 0.14, r * 0.07, 2);
            ctx.fill();

            // Muzzle
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
            ctx.moveTo(-r * 0.14, r * 0.02); ctx.lineTo(r * 0.14, r * 0.02);
            ctx.moveTo(0, r * 0.02); ctx.lineTo(0, r * 0.24);
            ctx.arc(0, r * 0.24, r * 0.12, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // Retro Sunglasses
            ctx.fillStyle = '#18181b';
            ctx.beginPath();
            ctx.moveTo(-r * 0.85, -r * 0.35); ctx.lineTo(-r * 0.1, -r * 0.15);
            ctx.lineTo(-r * 0.15, -r * 0.02); ctx.lineTo(-r * 0.78, -r * 0.05);
            ctx.closePath();
            ctx.moveTo(r * 0.85, -r * 0.35); ctx.lineTo(r * 0.1, -r * 0.15);
            ctx.lineTo(r * 0.15, -r * 0.02); ctx.lineTo(r * 0.78, -r * 0.05);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = '#18181b';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.moveTo(-r * 0.12, -r * 0.15); ctx.lineTo(r * 0.12, -r * 0.15);
            ctx.stroke();

            // Blue Glass Lenses
            ctx.fillStyle = '#42a5f5';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.32); ctx.lineTo(-r * 0.15, -r * 0.17);
            ctx.lineTo(-r * 0.2, -r * 0.06); ctx.lineTo(-r * 0.74, -r * 0.08);
            ctx.closePath();
            ctx.moveTo(r * 0.8, -r * 0.32); ctx.lineTo(r * 0.15, -r * 0.17);
            ctx.lineTo(r * 0.2, -r * 0.06); ctx.lineTo(r * 0.74, -r * 0.08);
            ctx.closePath();
            ctx.fill();

            // White Glare Stripes
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.62, -r * 0.3); ctx.lineTo(-r * 0.52, -r * 0.1);
            ctx.moveTo(-r * 0.42, -r * 0.24); ctx.lineTo(-r * 0.34, -r * 0.1);
            ctx.moveTo(r * 0.42, -r * 0.24); ctx.lineTo(r * 0.34, -r * 0.1);
            ctx.moveTo(r * 0.62, -r * 0.3); ctx.lineTo(r * 0.52, -r * 0.1);
            ctx.stroke();

            // Double Thumbs Up 👍 👍
            ctx.fillStyle = '#a85f26';
            ctx.strokeStyle = '#221408';
            ctx.lineWidth = 2.4;
            // Left Thumb
            ctx.beginPath();
            ctx.ellipse(-r * 0.68, r * 0.4, r * 0.11, r * 0.22, -0.2, 0, Math.PI * 2);
            ctx.arc(-r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2);
            ctx.fill(); ctx.stroke();
            // Right Thumb
            ctx.beginPath();
            ctx.ellipse(r * 0.68, r * 0.4, r * 0.11, r * 0.22, 0.2, 0, Math.PI * 2);
            ctx.arc(r * 0.65, r * 0.65, r * 0.25, 0, Math.PI * 2);
            ctx.fill(); ctx.stroke();

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
            ctx.beginPath();
            ctx.ellipse(0, r * 0.1, r * 0.95, r * 0.85, 0, 0, Math.PI * 2);
            ctx.fill();

            // Ears
            ctx.fillStyle = '#5c3614';
            ctx.beginPath();
            ctx.arc(-r * 0.7, -r * 0.45, r * 0.16, 0, Math.PI * 2);
            ctx.arc(r * 0.7, -r * 0.45, r * 0.16, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.42, 0, r * 0.84, r * 0.62, 8);
            ctx.fill();

            // Nostrils
            ctx.fillStyle = '#301808';
            ctx.beginPath();
            ctx.ellipse(-r * 0.18, r * 0.28, r * 0.06, r * 0.04, -0.2, 0, Math.PI * 2);
            ctx.ellipse(r * 0.18, r * 0.28, r * 0.06, r * 0.04, 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Serene Closed Eyes
            ctx.strokeStyle = '#2b1506';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.58, -r * 0.08); ctx.lineTo(-r * 0.32, -r * 0.08);
            ctx.moveTo(r * 0.32, -r * 0.08); ctx.lineTo(r * 0.58, -r * 0.08);
            ctx.stroke();

            // Cheeks
            ctx.fillStyle = 'rgba(255, 140, 110, 0.45)';
            ctx.beginPath();
            ctx.arc(-r * 0.58, r * 0.2, r * 0.15, 0, Math.PI * 2);
            ctx.arc(r * 0.58, r * 0.2, r * 0.15, 0, Math.PI * 2);
            ctx.fill();

            // Orange 🍊
            const oy = -r * 0.82;
            ctx.fillStyle = '#ff9800';
            ctx.beginPath();
            ctx.arc(0, oy, r * 0.28, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#4caf50';
            ctx.beginPath();
            ctx.ellipse(r * 0.12, oy - r * 0.26, r * 0.1, r * 0.05, 0.5, 0, Math.PI * 2);
            ctx.fill();
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

            // Eyes
            ctx.strokeStyle = '#221105';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.55, -r * 0.04); ctx.lineTo(-r * 0.3, -r * 0.04);
            ctx.moveTo(r * 0.3, -r * 0.04); ctx.lineTo(r * 0.55, -r * 0.04);
            ctx.stroke();

            // Cozy Red Scarf
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.7, r * 0.55, r * 1.4, r * 0.26, 6);
            ctx.fill();

            // Duckling 🐥
            const dy = -r * 0.75;
            ctx.fillStyle = '#ffd500';
            ctx.beginPath();
            ctx.arc(0, dy, r * 0.32, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ff7700';
            ctx.beginPath();
            ctx.ellipse(r * 0.26, dy + r * 0.05, r * 0.14, r * 0.08, 0.1, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(r * 0.06, dy - r * 0.08, r * 0.05, 0, Math.PI * 2);
            ctx.fill();
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
            // Water ripples underneath
            ctx.fillStyle = '#80deea';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.6, r * 0.95, r * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();

            // Body
            ctx.fillStyle = '#936037';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#734522';
            ctx.beginPath();
            ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.55, 6);
            ctx.fill();

            // Sleepy Bliss Eyes
            ctx.strokeStyle = '#2b1506';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.arc(-r * 0.45, -r * 0.05, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.arc(r * 0.45, -r * 0.05, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.stroke();

            // Folded Spa Towel on head
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.roundRect(-r * 0.45, -r * 0.95, r * 0.9, r * 0.32, 4);
            ctx.fill();

            // Steaming wisps
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(-r * 0.3, -r * 1.05); ctx.quadraticCurveTo(-r * 0.4, -r * 1.3, -r * 0.25, -r * 1.45);
            ctx.moveTo(r * 0.3, -r * 1.05); ctx.quadraticCurveTo(r * 0.4, -r * 1.3, r * 0.25, -r * 1.45);
            ctx.stroke();
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
            // Body
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.arc(0, r * 0.1, r * 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Chef Hat
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.2, -r * 0.9, r * 0.25, 0, Math.PI * 2);
            ctx.arc(r * 0.2, -r * 0.9, r * 0.25, 0, Math.PI * 2);
            ctx.arc(0, -r * 1.05, r * 0.3, 0, Math.PI * 2);
            ctx.roundRect(-r * 0.45, -r * 0.75, r * 0.9, r * 0.25, 3);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.5, 6);
            ctx.fill();

            // Cute Eyes
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(-r * 0.4, -r * 0.05, r * 0.08, 0, Math.PI * 2);
            ctx.arc(r * 0.4, -r * 0.05, r * 0.08, 0, Math.PI * 2);
            ctx.fill();

            // Croissant in paws 🥐
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(0, r * 0.45, r * 0.32, 0.8, Math.PI - 0.8, true);
            ctx.fill();
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
            // Body
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.arc(0, r * 0.1, r * 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.38, 0, r * 0.76, r * 0.5, 6);
            ctx.fill();

            // Strawberry Beanie Hat 🍓
            ctx.fillStyle = '#e91e63';
            ctx.beginPath();
            ctx.arc(0, -r * 0.55, r * 0.5, Math.PI, Math.PI * 2);
            ctx.bezierCurveTo(r * 0.5, -r * 0.2, -r * 0.5, -r * 0.2, -r * 0.5, -r * 0.55);
            ctx.fill();

            // Strawberry seeds
            ctx.fillStyle = '#ffeb3b';
            [[-r * 0.25, -r * 0.6], [0, -r * 0.75], [r * 0.25, -r * 0.6], [-r * 0.1, -r * 0.45], [r * 0.1, -r * 0.45]].forEach(([sx, sy]) => {
                ctx.beginPath(); ctx.arc(sx, sy, r * 0.035, 0, Math.PI * 2); ctx.fill();
            });

            // Green Stem
            ctx.fillStyle = '#4caf50';
            ctx.beginPath();
            ctx.ellipse(0, -r * 1.05, r * 0.15, r * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
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
            // Green Frog Hood
            ctx.fillStyle = '#7cb342';
            ctx.beginPath();
            ctx.arc(-r * 0.45, -r * 0.75, r * 0.25, 0, Math.PI * 2);
            ctx.arc(r * 0.45, -r * 0.75, r * 0.25, 0, Math.PI * 2);
            ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2);
            ctx.fill();

            // Frog eyes on hood
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(-r * 0.45, -r * 0.75, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.45, -r * 0.75, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Inner Capy Face peeking out
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.15, r * 0.6, r * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.3, r * 0.15, r * 0.6, r * 0.4, 5);
            ctx.fill();
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
            // Pink Frosted Donut Ring behind & around
            ctx.fillStyle = '#ff80ab';
            ctx.strokeStyle = '#d81b60';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(0, r * 0.2, r * 0.85, 0, Math.PI * 2);
            ctx.fill(); ctx.stroke();

            // Donut Sprinkles
            const spr = ['#ffeb3b', '#00e676', '#00e5ff', '#ffffff'];
            for (let i = 0; i < 6; i++) {
                ctx.fillStyle = spr[i % spr.length];
                const a = i * 1.0;
                ctx.fillRect(Math.cos(a) * r * 0.65 - 3, r * 0.2 + Math.sin(a) * r * 0.65 - 2, 7, 3);
            }

            // Capy Body sitting in center hole
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.arc(0, -r * 0.15, r * 0.55, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.28, -r * 0.15, r * 0.56, r * 0.4, 5);
            ctx.fill();

            // Cute smiling eyes
            ctx.strokeStyle = '#221105';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(-r * 0.25, -r * 0.22, r * 0.08, 0.2, Math.PI - 0.2);
            ctx.arc(r * 0.25, -r * 0.22, r * 0.08, 0.2, Math.PI - 0.2);
            ctx.stroke();
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
            // Body
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.arc(0, r * 0.15, r * 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Wizard Cape / Cloak
            ctx.fillStyle = '#311b92';
            ctx.beginPath();
            ctx.arc(0, r * 0.15, r * 0.95, 0.3, Math.PI - 0.3);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.36, r * 0.12, r * 0.72, r * 0.48, 6);
            ctx.fill();

            // Starry Wizard Hat 🧙‍♂️
            ctx.fillStyle = '#4a148c';
            ctx.beginPath();
            ctx.ellipse(0, -r * 0.45, r * 0.75, r * 0.2, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(-r * 0.45, -r * 0.45);
            ctx.lineTo(r * 0.1, -r * 1.35);
            ctx.lineTo(r * 0.45, -r * 0.45);
            ctx.closePath();
            ctx.fill();

            // Gold star on hat
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(0, -r * 0.85, r * 0.12, 0, Math.PI * 2);
            ctx.fill();
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
            // Capy Body
            ctx.fillStyle = '#8b5a2b';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
            ctx.fill();

            // Snout
            ctx.fillStyle = '#6a401c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.38, -r * 0.05, r * 0.76, r * 0.45, 6);
            ctx.fill();

            // Big anime sparkles eyes
            ctx.fillStyle = '#221105';
            ctx.beginPath();
            ctx.arc(-r * 0.42, -r * 0.15, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.42, -r * 0.15, r * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.45, -r * 0.18, r * 0.045, 0, Math.PI * 2);
            ctx.arc(r * 0.39, -r * 0.18, r * 0.045, 0, Math.PI * 2);
            ctx.fill();

            // Boba Tea Cup in paws 🧋
            const by = r * 0.45;
            ctx.fillStyle = '#bcaaa4';
            ctx.beginPath();
            ctx.roundRect(-r * 0.28, by - r * 0.15, r * 0.56, r * 0.48, [2, 2, 6, 6]);
            ctx.fill();

            ctx.fillStyle = '#a1887f';
            ctx.beginPath();
            ctx.roundRect(-r * 0.24, by - r * 0.05, r * 0.48, r * 0.35, [0, 0, 5, 5]);
            ctx.fill();

            // Pearls
            ctx.fillStyle = '#3e2723';
            [-r * 0.14, 0, r * 0.14].forEach(px => {
                ctx.beginPath(); ctx.arc(px, by + r * 0.22, r * 0.055, 0, Math.PI * 2); ctx.fill();
            });

            // Straw
            ctx.strokeStyle = '#e91e63';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, by - r * 0.12); ctx.lineTo(r * 0.12, by - r * 0.38);
            ctx.stroke();
        }
    },

    // =========================================================================
    // 🐱 10 UNIQUE CAT TOYS
    // =========================================================================
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
            // Left Ear (Orange)
            ctx.fillStyle = '#e07a38';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.6);
            ctx.closePath(); ctx.fill();

            // Right Ear (Dark Grey)
            ctx.fillStyle = '#3f3835';
            ctx.beginPath();
            ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.6);
            ctx.closePath(); ctx.fill();

            // Body
            ctx.fillStyle = '#fdfbf7';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Orange Face Patch
            ctx.fillStyle = '#e07a38';
            ctx.beginPath();
            ctx.ellipse(-r * 0.35, -r * 0.2, r * 0.4, r * 0.35, -0.3, 0, Math.PI * 2);
            ctx.fill();

            // Eyes (Emerald)
            ctx.fillStyle = '#228b22';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Whiskers
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.35, r * 0.2); ctx.lineTo(-r * 0.75, r * 0.15);
            ctx.moveTo(r * 0.35, r * 0.2); ctx.lineTo(r * 0.75, r * 0.15);
            ctx.stroke();
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

            // Cat Ears inside helmet
            ctx.fillStyle = '#ff80ab';
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, -r * 0.3); ctx.lineTo(-r * 0.4, -r * 0.75); ctx.lineTo(-r * 0.15, -r * 0.4);
            ctx.moveTo(r * 0.6, -r * 0.3); ctx.lineTo(r * 0.4, -r * 0.75); ctx.lineTo(r * 0.15, -r * 0.4);
            ctx.fill();

            // Glowing Eyes
            ctx.fillStyle = '#00e5ff';
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.28, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();
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
            // Ears
            ctx.fillStyle = '#1a1a24';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.5);
            ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.5);
            ctx.fill();

            // Head
            ctx.fillStyle = '#1a1a24';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Glowing Golden Eyes
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.15, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.15, 0, Math.PI * 2);
            ctx.fill();

            // Slit pupil
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.ellipse(-r * 0.32, -r * 0.08, r * 0.04, r * 0.12, 0, 0, Math.PI * 2);
            ctx.ellipse(r * 0.32, -r * 0.08, r * 0.04, r * 0.12, 0, 0, Math.PI * 2);
            ctx.fill();

            // Purple Collar & Bell
            ctx.fillStyle = '#9c27b0';
            ctx.beginPath();
            ctx.roundRect(-r * 0.45, r * 0.65, r * 0.9, r * 0.18, 4);
            ctx.fill();

            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(0, r * 0.78, r * 0.08, 0, Math.PI * 2);
            ctx.fill();
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
            // Ears
            ctx.fillStyle = '#f57c00';
            ctx.beginPath();
            ctx.moveTo(-r * 0.75, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 1.0); ctx.lineTo(-r * 0.1, -r * 0.55);
            ctx.moveTo(r * 0.75, -r * 0.2); ctx.lineTo(r * 0.55, -r * 1.0); ctx.lineTo(r * 0.1, -r * 0.55);
            ctx.fill();

            // Chonky Round Head
            ctx.fillStyle = '#ff9800';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Tabby Stripes on forehead
            ctx.fillStyle = '#e65100';
            ctx.beginPath();
            ctx.moveTo(-r * 0.15, -r * 0.65); ctx.lineTo(0, -r * 0.35); ctx.lineTo(r * 0.15, -r * 0.65);
            ctx.lineTo(0, -r * 0.5); ctx.closePath();
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#2e7d32';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            // Pink Nose & Muzzle
            ctx.fillStyle = '#fff3e0';
            ctx.beginPath();
            ctx.arc(-r * 0.12, r * 0.2, r * 0.18, 0, Math.PI * 2);
            ctx.arc(r * 0.12, r * 0.2, r * 0.18, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ff80ab';
            ctx.beginPath();
            ctx.arc(0, r * 0.12, r * 0.08, 0, Math.PI * 2);
            ctx.fill();
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
            // Dark Ears
            ctx.fillStyle = '#3e2723';
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r * 0.2); ctx.lineTo(-r * 0.6, -r * 1.05); ctx.lineTo(-r * 0.1, -r * 0.5);
            ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 0.6, -r * 1.05); ctx.lineTo(r * 0.1, -r * 0.5);
            ctx.fill();

            // Cream Body
            ctx.fillStyle = '#f5ebe0';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Dark Chocolate Face Mask
            ctx.fillStyle = '#4e342e';
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 0.65, r * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();

            // Sparkling Sapphire Eyes
            ctx.fillStyle = '#1e88e5';
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.arc(r * 0.28, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.12, r * 0.05, 0, Math.PI * 2);
            ctx.arc(r * 0.24, -r * 0.12, r * 0.05, 0, Math.PI * 2);
            ctx.fill();
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
        tagline: 'White rice kitten wearing a fresh salmon sashimi slice and seaweed belt. 🍣',
        draw(ctx, r) {
            // Salmon Sashimi Slice on top 🍣
            ctx.fillStyle = '#ff6f61';
            ctx.beginPath();
            ctx.roundRect(-r * 0.85, -r * 0.9, r * 1.7, r * 0.45, 8);
            ctx.fill();

            // Sashimi fat stripes
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.9); ctx.lineTo(-r * 0.2, -r * 0.45);
            ctx.moveTo(0, -r * 0.9); ctx.lineTo(r * 0.3, -r * 0.45);
            ctx.stroke();

            // White Cat Body (Sushi Rice)
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, r * 0.05, r * 0.85, 0, Math.PI * 2);
            ctx.fill();

            // Nori Seaweed Belt
            ctx.fillStyle = '#1b382b';
            ctx.fillRect(-r * 0.3, -r * 0.88, r * 0.6, r * 1.75);

            // Cute Happy Closed Eyes
            ctx.strokeStyle = '#221105';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(-r * 0.45, 0, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.arc(r * 0.45, 0, r * 0.1, 0.2, Math.PI - 0.2);
            ctx.stroke();
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
            // Golden Bread Crust
            ctx.fillStyle = '#b0722e';
            ctx.beginPath();
            ctx.roundRect(-r * 0.95, -r * 0.95, r * 1.9, r * 1.9, 14);
            ctx.fill();

            // Soft bread center
            ctx.fillStyle = '#fce4b8';
            ctx.beginPath();
            ctx.roundRect(-r * 0.8, -r * 0.8, r * 1.6, r * 1.6, 10);
            ctx.fill();

            // Cat Face in the middle
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.65, 0, Math.PI * 2);
            ctx.fill();

            // Ears
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(-r * 0.45, -r * 0.3); ctx.lineTo(-r * 0.35, -r * 0.7); ctx.lineTo(-r * 0.1, -r * 0.45);
            ctx.moveTo(r * 0.45, -r * 0.3); ctx.lineTo(r * 0.35, -r * 0.7); ctx.lineTo(r * 0.1, -r * 0.45);
            ctx.fill();

            // Surprised Eyes
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(-r * 0.2, -r * 0.05, r * 0.09, 0, Math.PI * 2);
            ctx.arc(r * 0.2, -r * 0.05, r * 0.09, 0, Math.PI * 2);
            ctx.fill();
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
            // Shark Fin on top
            ctx.fillStyle = '#1976d2';
            ctx.beginPath();
            ctx.moveTo(0, -r * 0.7); ctx.lineTo(r * 0.35, -r * 1.35); ctx.lineTo(-r * 0.15, -r * 0.9);
            ctx.closePath(); ctx.fill();

            // Shark Blue Hood & Body
            ctx.fillStyle = '#42a5f5';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2);
            ctx.fill();

            // Shark Mouth Rim with Sharp White Teeth
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(0, r * 0.05, r * 0.75, r * 0.65, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cat Face inside Shark Mouth
            ctx.fillStyle = '#fce4ec'; // Soft pinkish white cat
            ctx.beginPath();
            ctx.ellipse(0, r * 0.1, r * 0.58, r * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cat Eyes
            ctx.fillStyle = '#221105';
            ctx.beginPath();
            ctx.arc(-r * 0.26, 0, r * 0.09, 0, Math.PI * 2);
            ctx.arc(r * 0.26, 0, r * 0.09, 0, Math.PI * 2);
            ctx.fill();

            // Little pink nose
            ctx.fillStyle = '#ff4081';
            ctx.beginPath();
            ctx.arc(0, r * 0.15, r * 0.06, 0, Math.PI * 2);
            ctx.fill();
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
            // Ears
            ctx.fillStyle = '#4caf50';
            ctx.beginPath();
            ctx.moveTo(-r * 0.75, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 0.95); ctx.lineTo(-r * 0.15, -r * 0.5);
            ctx.moveTo(r * 0.75, -r * 0.2); ctx.lineTo(r * 0.55, -r * 0.95); ctx.lineTo(r * 0.15, -r * 0.5);
            ctx.fill();

            // Matcha Body
            ctx.fillStyle = '#a5d6a7';
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();

            // Eyes
            ctx.fillStyle = '#1b5e20';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.1, r * 0.11, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.1, r * 0.11, 0, Math.PI * 2);
            ctx.fill();

            // Boba Cup in paws
            const by = r * 0.4;
            ctx.fillStyle = '#c8e6c9';
            ctx.beginPath();
            ctx.roundRect(-r * 0.24, by - r * 0.15, r * 0.48, r * 0.45, [2, 2, 6, 6]);
            ctx.fill();

            ctx.fillStyle = '#388e3c';
            ctx.beginPath();
            ctx.roundRect(-r * 0.2, by - r * 0.05, r * 0.4, r * 0.32, [0, 0, 5, 5]);
            ctx.fill();
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
            // Sunflower Petals Radiating around head 🌻
            ctx.fillStyle = '#ffb300';
            for (let i = 0; i < 10; i++) {
                const angle = (i * Math.PI * 2) / 10;
                ctx.beginPath();
                ctx.arc(Math.cos(angle) * r * 0.85, Math.sin(angle) * r * 0.85, r * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Cat Head in Center (Sunflower Core)
            ctx.fillStyle = '#fff8e1';
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2);
            ctx.fill();

            // Ears
            ctx.fillStyle = '#ffa000';
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.3); ctx.lineTo(-r * 0.35, -r * 0.8); ctx.lineTo(-r * 0.1, -r * 0.45);
            ctx.moveTo(r * 0.5, -r * 0.3); ctx.lineTo(r * 0.35, -r * 0.8); ctx.lineTo(r * 0.1, -r * 0.45);
            ctx.fill();

            // Big Anime Eyes
            ctx.fillStyle = '#e65100';
            ctx.beginPath();
            ctx.arc(-r * 0.25, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.arc(r * 0.25, -r * 0.05, r * 0.12, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-r * 0.28, -r * 0.09, r * 0.045, 0, Math.PI * 2);
            ctx.arc(r * 0.21, -r * 0.09, r * 0.045, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    // =========================================================================
    // 🧸 9 CLASSIC ARCADE PLUSHIES
    // =========================================================================
    {
        id: 'bear',
        category: 'classic',
        name: 'Honey Bear',
        rarity: 'common',
        radius: 26,
        color: '#b5713b',
        accentColor: '#fadbb8',
        tagline: 'Loves warm honey and cozy hugs.',
        draw(ctx, r) {
            ctx.fillStyle = '#8f4f1e';
            ctx.beginPath();
            ctx.arc(-r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.arc(r * 0.7, -r * 0.65, r * 0.35, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#b5713b';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#fadbb8';
            ctx.beginPath(); ctx.ellipse(0, r * 0.2, r * 0.45, r * 0.35, 0, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#22150c';
            ctx.beginPath();
            ctx.arc(-r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2);
            ctx.arc(r * 0.36, -r * 0.12, r * 0.11, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'duck',
        category: 'classic',
        name: 'Rubber Ducky',
        rarity: 'common',
        radius: 25,
        color: '#ffd026',
        accentColor: '#ff7700',
        tagline: 'Always ready for bath time splashing!',
        draw(ctx, r) {
            ctx.fillStyle = '#ffd026';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#ff7700';
            ctx.beginPath(); ctx.ellipse(r * 0.5, r * 0.05, r * 0.35, r * 0.18, 0.1, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#222';
            ctx.beginPath(); ctx.arc(r * 0.15, -r * 0.2, r * 0.12, 0, Math.PI * 2); ctx.fill();
        }
    },
    {
        id: 'bunny',
        category: 'classic',
        name: 'Fluffy Bunny',
        rarity: 'common',
        radius: 25,
        color: '#fcedea',
        accentColor: '#f7a8b8',
        tagline: 'Gentle twitchy nose and ultra soft fur.',
        draw(ctx, r) {
            ctx.fillStyle = '#eed6d3';
            ctx.beginPath();
            ctx.ellipse(-r * 0.45, -r * 0.85, r * 0.2, r * 0.55, -0.2, 0, Math.PI * 2);
            ctx.ellipse(r * 0.45, -r * 0.85, r * 0.2, r * 0.55, 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fcedea';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#422a2a';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.1, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'penguin',
        category: 'classic',
        name: 'Cuddle Penguin',
        rarity: 'common',
        radius: 25,
        color: '#28364a',
        accentColor: '#ffaa33',
        tagline: 'Waddles with joy when holding a pebble.',
        draw(ctx, r) {
            ctx.fillStyle = '#28364a';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.ellipse(0, r * 0.15, r * 0.65, r * 0.72, 0, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#ff9800';
            ctx.beginPath();
            ctx.moveTo(-r * 0.16, r * 0.05); ctx.lineTo(r * 0.16, r * 0.05); ctx.lineTo(0, r * 0.3);
            ctx.closePath(); ctx.fill();
        }
    },
    {
        id: 'mushroom',
        category: 'classic',
        name: 'Magic Shroom',
        rarity: 'rare',
        radius: 26,
        color: '#e73845',
        accentColor: '#ffffff',
        tagline: 'Glows faintly beneath enchanted forest canopies.',
        draw(ctx, r) {
            ctx.fillStyle = '#f7eedb';
            ctx.beginPath(); ctx.ellipse(0, r * 0.35, r * 0.5, r * 0.45, 0, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#e73845';
            ctx.beginPath();
            ctx.arc(0, -r * 0.05, r * 0.95, Math.PI, Math.PI * 2);
            ctx.bezierCurveTo(r * 0.9, r * 0.25, -r * 0.9, r * 0.25, -r * 0.95, -r * 0.05);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            [[-r * 0.5, -r * 0.45], [0, -r * 0.7], [r * 0.5, -r * 0.45]].forEach(([dx, dy]) => {
                ctx.beginPath(); ctx.arc(dx, dy, r * 0.18, 0, Math.PI * 2); ctx.fill();
            });
        }
    },
    {
        id: 'cloud',
        category: 'classic',
        name: 'Starry Cloud',
        rarity: 'rare',
        radius: 27,
        color: '#c2e3f7',
        accentColor: '#ffd700',
        tagline: 'Floats on gentle dreams and stardust breezes.',
        draw(ctx, r) {
            ctx.fillStyle = '#c2e3f7';
            ctx.beginPath();
            ctx.arc(-r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2);
            ctx.arc(r * 0.4, -r * 0.2, r * 0.5, 0, Math.PI * 2);
            ctx.arc(0, -r * 0.4, r * 0.55, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffcf10';
            ctx.beginPath();
            ctx.arc(0, r * 0.2, r * 0.2, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'dragon',
        category: 'classic',
        name: 'Golden Dragon',
        rarity: 'legendary',
        radius: 28,
        color: '#f7c93e',
        accentColor: '#ff5722',
        tagline: 'Legendary guardian of ancient treasure vaults.',
        draw(ctx, r) {
            ctx.fillStyle = '#ff5722';
            ctx.beginPath();
            ctx.moveTo(-r * 0.45, -r * 0.6); ctx.lineTo(-r * 0.6, -r * 1.1); ctx.lineTo(-r * 0.25, -r * 0.8);
            ctx.moveTo(r * 0.45, -r * 0.6); ctx.lineTo(r * 0.6, -r * 1.1); ctx.lineTo(r * 0.25, -r * 0.8);
            ctx.fill();

            ctx.fillStyle = '#f7c93e';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.fillStyle = '#800020';
            ctx.beginPath();
            ctx.arc(-r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.arc(r * 0.32, -r * 0.08, r * 0.13, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    {
        id: 'unicorn',
        category: 'classic',
        name: 'Rainbow Unicorn',
        rarity: 'legendary',
        radius: 28,
        color: '#ffffff',
        accentColor: '#ff66c4',
        tagline: 'Spreads prismatic rainbows wherever it gallops.',
        draw(ctx, r) {
            ctx.fillStyle = '#ffb800';
            ctx.beginPath();
            ctx.moveTo(-r * 0.15, -r * 0.65); ctx.lineTo(0, -r * 1.35); ctx.lineTo(r * 0.15, -r * 0.65);
            ctx.closePath(); ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

            ctx.strokeStyle = '#5a189a';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.arc(-r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1);
            ctx.arc(r * 0.3, -r * 0.02, r * 0.12, 0.1, Math.PI - 0.1);
            ctx.stroke();
        }
    },
    {
        id: 'egg',
        category: 'classic',
        name: 'Royal Mystery Egg',
        rarity: 'legendary',
        radius: 28,
        color: '#ffc107',
        accentColor: '#9c27b0',
        tagline: 'Crowned with jewels, holds mythical surprises.',
        draw(ctx, r) {
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.moveTo(-r * 0.5, -r * 0.65); ctx.lineTo(-r * 0.6, -r * 1.15);
            ctx.lineTo(0, -r * 1.25); ctx.lineTo(r * 0.6, -r * 1.15); ctx.lineTo(r * 0.5, -r * 0.65);
            ctx.fill();

            ctx.fillStyle = '#ffb300';
            ctx.beginPath(); ctx.ellipse(0, 0, r * 0.85, r, 0, 0, Math.PI * 2); ctx.fill();
        }
    }
];

window.TOY_CATALOGUE = TOY_CATALOGUE;
