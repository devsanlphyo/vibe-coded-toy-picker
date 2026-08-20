/**
 * Cozy 2D Toy Picker - Main Game Controller & Loop
 */
(function() {
    let canvas, ctx;
    let physics, claw, audio, collection;
    let lastTime = 0;
    let tokens = 10;
    let confettiParticles = [];
    let sparkles = [];
    let toastTimeout = null;

    function init() {
        canvas = document.getElementById('gameCanvas');
        ctx = canvas.getContext('2d');

        audio = window.audioManager;
        collection = window.collectionManager;

        // Initialize Physics & Claw with slip callback
        physics = new PhysicsManager(canvas, onPrizeWon);
        claw = new ClawController(physics.world, 85, 60, 550, onClawSlip);

        // Setup Controls & UI Event Listeners
        setupInputHandlers();
        setupUIButtons();
        updateTokenDisplay();

        // Start Loop
        lastTime = performance.now();
        requestAnimationFrame(gameLoop);
    }

    function setupInputHandlers() {
        // Keyboard Controls
        window.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            if (audio) audio.ensureContext();

            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                claw.inputLeft = true;
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                claw.inputRight = true;
            } else if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
                e.preventDefault();
                handleDropAttempt();
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                claw.inputLeft = false;
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                claw.inputRight = false;
            }
        });

        // On-screen Arcade Buttons
        const btnLeft = document.getElementById('btnLeft');
        const btnRight = document.getElementById('btnRight');
        const btnDrop = document.getElementById('btnDrop');

        const bindHold = (btn, onPress, onRelease) => {
            if (!btn) return;
            const start = (e) => {
                e.preventDefault();
                if (audio) audio.ensureContext();
                onPress();
                btn.classList.add('active');
            };
            const end = (e) => {
                e.preventDefault();
                onRelease();
                btn.classList.remove('active');
            };

            btn.addEventListener('pointerdown', start);
            btn.addEventListener('pointerup', end);
            btn.addEventListener('pointerleave', end);
            btn.addEventListener('pointercancel', end);
        };

        bindHold(btnLeft, () => { claw.inputLeft = true; }, () => { claw.inputLeft = false; });
        bindHold(btnRight, () => { claw.inputRight = true; }, () => { claw.inputRight = false; });

        if (btnDrop) {
            btnDrop.addEventListener('click', (e) => {
                e.preventDefault();
                if (audio) audio.ensureContext();
                handleDropAttempt();
            });
        }
    }

    function handleDropAttempt() {
        if (claw.state !== 'idle' && claw.state !== 'moving') return;

        if (tokens > 0) {
            tokens--;
            updateTokenDisplay();
            claw.startDrop();
        } else {
            // Auto refill coins for casual fun
            tokens = 5;
            updateTokenDisplay();
            if (audio) audio.playClick();
            claw.startDrop();
        }
    }

    function setupUIButtons() {
        // Difficulty Selector Button
        const difficultyBtn = document.getElementById('difficultyBtn');
        if (difficultyBtn) {
            difficultyBtn.addEventListener('click', () => {
                audio.ensureContext();
                audio.playClick();
                const nextDiff = claw.cycleDifficulty();
                updateDifficultyButtonUI(difficultyBtn, nextDiff);
            });
            updateDifficultyButtonUI(difficultyBtn, claw.difficulty);
        }

        // Sound & Music Toggles
        const soundBtn = document.getElementById('soundToggle');
        const musicBtn = document.getElementById('musicToggle');
        const albumBtn = document.getElementById('albumBtn');
        const refillBtn = document.getElementById('refillBtn');
        const insertCoinBtn = document.getElementById('insertCoinBtn');

        if (soundBtn) {
            soundBtn.addEventListener('click', () => {
                const on = audio.toggleSound();
                soundBtn.innerHTML = on ? '🔊 Sound: ON' : '🔇 Sound: OFF';
                soundBtn.classList.toggle('muted', !on);
            });
        }

        if (musicBtn) {
            musicBtn.addEventListener('click', () => {
                const on = audio.toggleMusic();
                musicBtn.innerHTML = on ? '🎵 Cozy Music: ON' : '🎵 Cozy Music: OFF';
                musicBtn.classList.toggle('muted', !on);
            });
        }

        if (refillBtn) {
            refillBtn.addEventListener('click', () => {
                physics.refill();
                createSparkleBurst(320, 380, 20);
            });
        }

        if (insertCoinBtn) {
            insertCoinBtn.addEventListener('click', () => {
                audio.ensureContext();
                audio.playClick();
                tokens += 5;
                updateTokenDisplay();
                createSparkleBurst(canvas.width / 2, 50, 15);
            });
        }

        // PWA Install Button Handling
        let deferredPrompt = null;
        const installAppBtn = document.getElementById('installAppBtn');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (installAppBtn) {
                installAppBtn.classList.remove('hidden');
            }
        });

        if (installAppBtn) {
            installAppBtn.addEventListener('click', async () => {
                if (!deferredPrompt) return;
                audio.playClick();
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('[PWA] User accepted the install prompt');
                    installAppBtn.classList.add('hidden');
                }
                deferredPrompt = null;
            });
        }

        window.addEventListener('appinstalled', () => {
            console.log('[PWA] Application was installed successfully');
            if (installAppBtn) installAppBtn.classList.add('hidden');
        });

        // Album Modal Handling
        const albumModal = document.getElementById('albumModal');
        const closeAlbumBtn = document.getElementById('closeAlbumBtn');
        const filterBtns = document.querySelectorAll('.album-filter-btn');

        if (albumBtn && albumModal) {
            albumBtn.addEventListener('click', () => {
                audio.ensureContext();
                audio.playClick();
                collection.renderAlbumModal('all');
                albumModal.classList.add('visible');
            });
        }

        if (closeAlbumBtn && albumModal) {
            closeAlbumBtn.addEventListener('click', () => {
                audio.playClick();
                albumModal.classList.remove('visible');
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                audio.playClick();
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                collection.renderAlbumModal(btn.dataset.filter);
            });
        });

        // Prize Won Modal Handling
        const winModal = document.getElementById('winModal');
        const claimPrizeBtn = document.getElementById('claimPrizeBtn');

        if (claimPrizeBtn && winModal) {
            claimPrizeBtn.addEventListener('click', () => {
                audio.playClick();
                winModal.classList.remove('visible');
            });
        }

        // Close on background modal click
        [albumModal, winModal].forEach(m => {
            if (m) {
                m.addEventListener('click', (e) => {
                    if (e.target === m) {
                        m.classList.remove('visible');
                    }
                });
            }
        });
    }

    function updateDifficultyButtonUI(btn, diff) {
        btn.classList.remove('mode-arcade', 'mode-master', 'mode-cozy');
        btn.classList.add(`mode-${diff}`);

        if (diff === 'arcade') {
            btn.innerHTML = '🕹️ Mode: ARCADE';
            btn.title = 'Arcade Difficulty: Strict alignment & realistic grip tension';
        } else if (diff === 'master') {
            btn.innerHTML = '💀 Mode: MASTER';
            btn.title = 'Master Difficulty: Extreme precision, high sway momentum & slippage';
        } else {
            btn.innerHTML = '🌟 Mode: COZY';
            btn.title = 'Cozy Difficulty: Easy grab, relaxed play';
        }
    }

    function onClawSlip(reason) {
        showToast(`⚠️ ${reason}`);
    }

    function showToast(msg) {
        const toast = document.getElementById('slipToast');
        if (!toast) return;

        toast.innerText = msg;
        toast.classList.add('show');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    }

    function updateTokenDisplay() {
        const el = document.getElementById('tokenCount');
        if (el) el.innerText = tokens;

        const stats = collection.getStats();
        const collectionCountEl = document.getElementById('collectionHeaderCount');
        if (collectionCountEl) {
            collectionCountEl.innerText = `${stats.unlockedCount} / ${stats.totalDistinct}`;
        }
    }

    function onPrizeWon(toyTemplate) {
        if (!toyTemplate) return;

        // Register in collection
        const { isNew, count } = collection.addToy(toyTemplate);

        // Audio and Confetti
        audio.playChuteDrop();
        setTimeout(() => {
            audio.playPrizeWin(toyTemplate.rarity);
        }, 150);

        spawnConfettiBurst();
        updateTokenDisplay();

        // Populate and open Win Modal
        setTimeout(() => {
            showPrizeCelebration(toyTemplate, isNew, count);
        }, 350);
    }

    function showPrizeCelebration(toy, isNew, count) {
        const winModal = document.getElementById('winModal');
        const winThumb = document.getElementById('winThumbContainer');
        const winName = document.getElementById('winToyName');
        const winRarity = document.getElementById('winToyRarity');
        const winTagline = document.getElementById('winToyTagline');
        const winNewBadge = document.getElementById('winNewBadge');
        const winCount = document.getElementById('winToyCount');

        if (!winModal) return;

        // Render Canvas Trophy
        winThumb.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.width = 140;
        canvas.height = 140;
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.translate(70, 70);
        toy.draw(ctx, 48);
        ctx.restore();
        winThumb.appendChild(canvas);

        winName.innerText = toy.name;
        winRarity.innerText = `${toy.rarity.toUpperCase()} PLUSHIE`;
        winRarity.className = `win-rarity-pill rarity-${toy.rarity}`;
        winTagline.innerText = `"${toy.tagline}"`;
        winNewBadge.style.display = isNew ? 'inline-block' : 'none';
        winCount.innerText = `Total Rescued: x${count}`;

        winModal.classList.add('visible');
    }

    // --- Particle Effects ---

    function spawnConfettiBurst() {
        const colors = ['#ffd700', '#ff4757', '#2ed573', '#1e90ff', '#ff6b81', '#a55eea', '#ffa502'];
        for (let i = 0; i < 70; i++) {
            confettiParticles.push({
                x: 70 + (Math.random() - 0.5) * 50,
                y: 480,
                vx: (Math.random() - 0.5) * 8,
                vy: -Math.random() * 9 - 4,
                rot: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 7 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1.0,
                decay: Math.random() * 0.012 + 0.008
            });
        }
    }

    function createSparkleBurst(x, y, count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            sparkles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 4 + 2,
                life: 1.0,
                decay: Math.random() * 0.03 + 0.02,
                color: '#fff59d'
            });
        }
    }

    function updateAndDrawParticles(ctx) {
        // Confetti
        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // gravity
            p.rot += p.rotSpeed;
            p.life -= p.decay;

            if (p.life <= 0 || p.y > canvas.height + 20) {
                confettiParticles.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            ctx.restore();
        }

        // Sparkles
        for (let i = sparkles.length - 1; i >= 0; i--) {
            const s = sparkles[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= s.decay;

            if (s.life <= 0) {
                sparkles.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = Math.max(0, s.life);
            ctx.fillStyle = s.color;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function drawCabinetAtmosphere(ctx) {
        // Soft warm felt background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGrad.addColorStop(0, '#2c1e19');
        bgGrad.addColorStop(0.6, '#3e2c24');
        bgGrad.addColorStop(1, '#231814');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Warm ambient light glow from top lamp
        const lampGlow = ctx.createRadialGradient(canvas.width / 2, 40, 20, canvas.width / 2, 100, 320);
        lampGlow.addColorStop(0, 'rgba(255, 238, 187, 0.25)');
        lampGlow.addColorStop(1, 'rgba(255, 238, 187, 0)');
        ctx.fillStyle = lampGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Top Brass Crane Rail
        ctx.fillStyle = '#b8860b';
        ctx.fillRect(20, 32, canvas.width - 40, 10);
        ctx.strokeStyle = '#5a3d16';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(20, 32, canvas.width - 40, 10);

        // Fairy string lights across top rail
        const bulbColors = ['#fffae6', '#ffd54f', '#ffcc80', '#ffe082'];
        for (let x = 40; x <= canvas.width - 40; x += 36) {
            const bulbCol = bulbColors[(x / 36) % bulbColors.length];
            // Tiny glow halo
            ctx.fillStyle = 'rgba(255, 235, 150, 0.3)';
            ctx.beginPath();
            ctx.arc(x, 26, 7, 0, Math.PI * 2);
            ctx.fill();

            // Bulb
            ctx.fillStyle = bulbCol;
            ctx.beginPath();
            ctx.arc(x, 26, 3.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawGlassReflections(ctx) {
        // Subtle diagonal glass shine reflection overlay
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.beginPath();
        ctx.moveTo(30, 0);
        ctx.lineTo(140, 0);
        ctx.lineTo(40, canvas.height);
        ctx.lineTo(-70, canvas.height);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(220, 0);
        ctx.lineTo(260, 0);
        ctx.lineTo(160, canvas.height);
        ctx.lineTo(120, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function gameLoop(time) {
        const delta = Math.min(32, time - lastTime);
        lastTime = time;

        // 1. Update Physics and Claw
        physics.update(delta);
        claw.update(physics.toys, physics.chuteBounds);

        // 2. Render Cabinet & Entities
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCabinetAtmosphere(ctx);

        physics.draw(ctx);
        claw.draw(ctx);
        drawGlassReflections(ctx);
        updateAndDrawParticles(ctx);

        requestAnimationFrame(gameLoop);
    }

    window.addEventListener('DOMContentLoaded', init);
})();
