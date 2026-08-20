/**
 * Physics Simulation and World Setup using Matter.js
 */
class PhysicsManager {
    constructor(canvas, onPrizeWonCallback) {
        this.canvas = canvas;
        this.onPrizeWon = onPrizeWonCallback;

        this.width = canvas.width;
        this.height = canvas.height;

        // Matter.js Aliases
        const { Engine, World, Bodies, Body, Composite } = Matter;
        this.Engine = Engine;
        this.World = World;
        this.Bodies = Bodies;
        this.Body = Body;
        this.Composite = Composite;

        this.engine = Engine.create({
            gravity: { x: 0, y: 1.1, scale: 0.001 }
        });
        this.world = this.engine.world;

        this.toys = [];
        this.walls = [];
        this.chuteBounds = { x1: 15, x2: 120, y1: 460, y2: 610 };

        this.setupCabinetBoundaries();
        this.spawnToyPile(20);
    }

    setupCabinetBoundaries() {
        const { Bodies, World } = this;
        const thickness = 40;

        // Bottom floor
        const floor = Bodies.rectangle(this.width / 2, this.height + thickness / 2 - 10, this.width * 2, thickness, {
            isStatic: true,
            friction: 0.8
        });

        // Left glass
        const leftWall = Bodies.rectangle(-thickness / 2 + 10, this.height / 2, thickness, this.height * 2, {
            isStatic: true,
            friction: 0.2
        });

        // Right glass
        const rightWall = Bodies.rectangle(this.width + thickness / 2 - 10, this.height / 2, thickness, this.height * 2, {
            isStatic: true,
            friction: 0.2
        });

        // Prize chute separator divider (tall barrier wall between chute on left and toy bin on right)
        const chuteDivider = Bodies.rectangle(125, 460, 14, 280, {
            isStatic: true,
            friction: 0.3,
            render: { fillStyle: '#b8860b' }
        });

        // Top bumper rim on divider
        const dividerBumper = Bodies.circle(125, 320, 8, {
            isStatic: true,
            friction: 0.2
        });

        // Chute funneled ramp (guides prize smoothly to exit)
        const chuteRamp = Bodies.rectangle(40, 580, 80, 12, {
            isStatic: true,
            angle: 0.35,
            friction: 0.2
        });

        this.walls = [floor, leftWall, rightWall, chuteDivider, dividerBumper, chuteRamp];
        World.add(this.world, this.walls);
    }

    spawnToyPile(count = 20) {
        // Clear any existing toys
        this.toys.forEach(t => {
            if (t.body) this.Composite.remove(this.world, t.body);
        });
        this.toys = [];

        const catalogue = window.TOY_CATALOGUE || [];
        if (catalogue.length === 0) return;

        // Weighted spawn: Common 60%, Rare 30%, Legendary 10%
        const getWeightedTemplate = () => {
            const roll = Math.random();
            let pool;
            if (roll < 0.60) {
                pool = catalogue.filter(t => t.rarity === 'common');
            } else if (roll < 0.90) {
                pool = catalogue.filter(t => t.rarity === 'rare');
            } else {
                pool = catalogue.filter(t => t.rarity === 'legendary');
            }
            if (!pool || pool.length === 0) pool = catalogue;
            return pool[Math.floor(Math.random() * pool.length)];
        };

        for (let i = 0; i < count; i++) {
            const template = getWeightedTemplate();
            // Stagger spawn over bin area
            const startX = 150 + Math.random() * (this.width - 180);
            const startY = 320 + (i % 5) * 45 + Math.random() * 20;

            const radius = template.radius || 26;
            const body = this.Bodies.circle(startX, startY, radius, {
                restitution: 0.18,
                friction: 0.6,
                frictionAir: 0.015,
                density: 0.002,
                angle: (Math.random() - 0.5) * 0.6
            });

            this.Composite.add(this.world, body);

            this.toys.push({
                template,
                radius,
                body,
                id: template.id + '_' + Date.now() + '_' + i,
                isCollected: false
            });
        }
    }

    refill() {
        this.spawnToyPile(22);
        if (window.audioManager) {
            window.audioManager.playRestock();
        }
    }

    update(deltaTime) {
        this.Engine.update(this.engine, deltaTime);

        // Check for toys that have fallen into the prize chute
        for (let i = this.toys.length - 1; i >= 0; i--) {
            const toy = this.toys[i];
            if (!toy || toy.isCollected || !toy.body) continue;

            const pos = toy.body.position;
            // Chute zone: x < 120 and y > 470
            if (pos.x < 120 && pos.y > 470) {
                toy.isCollected = true;

                // Remove from physics world
                this.Composite.remove(this.world, toy.body);
                toy.body = null;
                this.toys.splice(i, 1);

                // Trigger win callback!
                if (this.onPrizeWon) {
                    this.onPrizeWon(toy.template);
                }

                // If bin is getting empty, restock automatically after a moment
                if (this.toys.length <= 4) {
                    setTimeout(() => {
                        this.refill();
                    }, 2500);
                }
            }
        }
    }

    draw(ctx) {
        // 1. Draw Prize Chute Wall & Barrier
        ctx.save();
        // Divider
        const dividerGrad = ctx.createLinearGradient(118, 320, 132, 320);
        dividerGrad.addColorStop(0, '#5a3d16');
        dividerGrad.addColorStop(0.5, '#b8860b');
        dividerGrad.addColorStop(1, '#3b250c');
        ctx.fillStyle = dividerGrad;
        ctx.strokeStyle = '#2b1a07';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(118, 320, 14, 280, 4);
        ctx.fill();
        ctx.stroke();

        // Brass Top Bumper Cap
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(125, 320, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Chute Target Decal / Icon
        ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(68, 520, 32, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 12px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PRIZE CHUTE', 68, 515);
        ctx.font = '18px sans-serif';
        ctx.fillText('🎁', 68, 540);

        // 2. Draw all Plushies
        this.toys.forEach(toy => {
            if (!toy.body) return;
            const { x, y } = toy.body.position;
            const angle = toy.body.angle;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);

            // Subtle drop shadow under plushie
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.beginPath();
            ctx.ellipse(2, 4, toy.radius * 0.95, toy.radius * 0.85, 0, 0, Math.PI * 2);
            ctx.fill();

            // Render vector plushie artwork
            if (toy.template && typeof toy.template.draw === 'function') {
                toy.template.draw(ctx, toy.radius);
            }

            ctx.restore();
        });

        ctx.restore();
    }
}

window.PhysicsManager = PhysicsManager;
