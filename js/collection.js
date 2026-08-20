/**
 * Toy Collection Album & Progression Tracker
 */
class CollectionManager {
    constructor() {
        this.storageKey = 'cozy_toy_picker_collection_v1';
        this.data = this.loadData();
    }

    loadData() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error('Failed to load collection data:', e);
        }
        return {
            unlocked: {}, // { toyId: count }
            totalCaught: 0,
            firstCaughtTimestamps: {}
        };
    }

    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (e) {
            console.error('Failed to save collection data:', e);
        }
    }

    addToy(toyTemplate) {
        if (!toyTemplate || !toyTemplate.id) return { isNew: false, count: 0 };

        const id = toyTemplate.id;
        const isNew = !this.data.unlocked[id];

        this.data.unlocked[id] = (this.data.unlocked[id] || 0) + 1;
        this.data.totalCaught = (this.data.totalCaught || 0) + 1;

        if (isNew) {
            this.data.firstCaughtTimestamps[id] = Date.now();
        }

        this.saveData();
        return {
            isNew,
            count: this.data.unlocked[id]
        };
    }

    getStats() {
        const catalogue = window.TOY_CATALOGUE || [];
        const totalDistinct = catalogue.length;
        const unlockedCount = Object.keys(this.data.unlocked).length;
        const percentage = totalDistinct > 0 ? Math.round((unlockedCount / totalDistinct) * 100) : 0;

        return {
            unlockedCount,
            totalDistinct,
            percentage,
            totalCaught: this.data.totalCaught || 0
        };
    }

    renderAlbumModal(filter = 'all') {
        const grid = document.getElementById('albumGrid');
        const progressFill = document.getElementById('albumProgressFill');
        const progressText = document.getElementById('albumProgressText');
        const totalStatsEl = document.getElementById('albumTotalStats');

        if (!grid) return;

        const catalogue = window.TOY_CATALOGUE || [];
        const stats = this.getStats();

        if (progressFill) progressFill.style.width = `${stats.percentage}%`;
        if (progressText) progressText.innerText = `${stats.unlockedCount} / ${stats.totalDistinct} Discovered (${stats.percentage}%)`;
        if (totalStatsEl) totalStatsEl.innerText = `Total Plushies Rescued: ${stats.totalCaught}`;

        grid.innerHTML = '';

        let filtered = catalogue;
        if (['capybara', 'cat', 'dog', 'forest', 'fantasy'].includes(filter)) {
            filtered = catalogue.filter(t => t.category === filter);
        } else if (filter !== 'all') {
            filtered = catalogue.filter(t => t.rarity === filter);
        }

        filtered.forEach(toy => {
            const count = this.data.unlocked[toy.id] || 0;
            const isUnlocked = count > 0;

            const card = document.createElement('div');
            card.className = `album-card rarity-${toy.rarity} ${isUnlocked ? 'unlocked' : 'locked'}`;

            // Create Canvas Thumbnail for Plushie
            const canvas = document.createElement('canvas');
            canvas.width = 90;
            canvas.height = 90;
            const ctx = canvas.getContext('2d');

            ctx.save();
            ctx.translate(45, 45);

            if (isUnlocked) {
                // Draw Full Color Plushie
                toy.draw(ctx, 32);
            } else {
                // Draw Mysterious Silhouette
                ctx.fillStyle = 'rgba(75, 55, 40, 0.6)';
                ctx.beginPath();
                ctx.arc(0, 0, 32, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#edd7b8';
                ctx.font = 'bold 26px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('?', 0, 2);
            }
            ctx.restore();

            const stars = toy.rarity === 'legendary' ? '★★★' : (toy.rarity === 'rare' ? '★★☆' : '★☆☆');

            card.innerHTML = `
                <div class="card-thumb-wrap"></div>
                <div class="card-info">
                    <div class="card-name">${isUnlocked ? toy.name : '??? Secret Toy'}</div>
                    <div class="card-rarity">${stars} ${toy.rarity.toUpperCase()}</div>
                    <div class="card-tagline">${isUnlocked ? toy.tagline : 'Grab this toy from the claw machine!'}</div>
                    ${isUnlocked ? `<div class="card-count-badge">Caught: x${count}</div>` : `<div class="card-locked-badge">🔒 Locked</div>`}
                </div>
            `;

            card.querySelector('.card-thumb-wrap').appendChild(canvas);
            grid.appendChild(card);
        });
    }

    clearData() {
        if (confirm('Are you sure you want to reset your toy collection album?')) {
            localStorage.removeItem(this.storageKey);
            this.data = this.loadData();
            this.renderAlbumModal();
        }
    }
}

window.collectionManager = new CollectionManager();
