/**
 * Claw Crane Controller & Kinematics
 * Features realistic arcade physics, dynamic sway momentum, alignment precision, and rarity-based grip slipping.
 */
class ClawController {
    constructor(world, chuteX = 65, topY = 60, maxY = 550, onSlipCallback = null, onMissCallback = null) {
        this.world = world;
        this.chuteX = chuteX;
        this.topY = topY;
        this.maxY = maxY;
        this.onSlip = onSlipCallback;
        this.onMiss = onMissCallback;

        // Current trolley & claw position
        this.x = 280;
        this.y = topY;
        this.targetX = 280;

        // Mechanics & constraints (Full horizontal reach across entire bin and chute)
        this.minX = 40;
        this.maxX = 518;
        this.speedX = 3.8;
        this.dropSpeed = 3.4;
        this.liftSpeed = 2.6;

        // Difficulty Modes: 'cozy' (easy), 'arcade' (challenging/default), 'master' (hardcore)
        this.difficulty = 'arcade';

        // Claw prongs (0 = open, 1 = closed)
        this.prongAngle = 0;
        this.targetProngAngle = 0;
        this.prongLength = 34;
        this.clawRadius = 24;

        // State Machine: 'idle', 'moving', 'dropping', 'grabbing', 'lifting', 'returning', 'releasing'
        this.state = 'idle';
        this.stateTimer = 0;

        // Grabbed toy & grip physics
        this.grabbedToy = null;
        this.gripQuality = 0.0; // 0.0 (weak/slipping) to 1.0 (secure)
        this.isWobbling = false;

        // Sway & Pendulum Physics
        this.swayAngle = 0;
        this.swayVel = 0;

        // User control inputs
        this.inputLeft = false;
        this.inputRight = false;
    }

    setDifficulty(diff) {
        if (['cozy', 'arcade', 'master'].includes(diff)) {
            this.difficulty = diff;
        }
    }

    cycleDifficulty() {
        const order = ['arcade', 'master', 'cozy'];
        const next = order[(order.indexOf(this.difficulty) + 1) % order.length];
        this.setDifficulty(next);
        return this.difficulty;
    }

    reset() {
        this.state = 'idle';
        this.targetProngAngle = 0;
        this.prongAngle = 0;
        this.releaseGrabbedToy();
        this.y = this.topY;
        this.swayAngle = 0;
        this.swayVel = 0;
        this.gripQuality = 0;
        this.isWobbling = false;
    }

    startDrop() {
        if (this.state !== 'idle' && this.state !== 'moving') return false;
        this.state = 'dropping';
        this.targetProngAngle = 0; // Open prongs while dropping
        this.gripQuality = 0;
        this.isWobbling = false;

        if (window.audioManager) {
            window.audioManager.playDropButton();
            window.audioManager.startWinch();
        }
        return true;
    }

    update(toys, chuteBounds) {
        // 1. Handle Trolley Input & Realistic Inertia
        if (this.state === 'idle' || this.state === 'moving') {
            let moving = false;
            if (this.inputLeft) {
                this.x = Math.max(this.minX, this.x - this.speedX);
                this.swayVel += (this.difficulty === 'master' ? 0.014 : 0.009);
                moving = true;
            } else if (this.inputRight) {
                this.x = Math.min(this.maxX, this.x + this.speedX);
                this.swayVel -= (this.difficulty === 'master' ? 0.014 : 0.009);
                moving = true;
            }

            if (moving) {
                this.state = 'moving';
                if (window.audioManager) window.audioManager.startMotor();
            } else {
                if (this.state === 'moving') {
                    this.state = 'idle';
                    if (window.audioManager) window.audioManager.stopMotor();
                }
            }
        }

        // 2. Pendulum Damping & Natural Gravity Sway
        const damping = this.difficulty === 'master' ? 0.94 : 0.92;
        const spring = this.difficulty === 'master' ? 0.06 : 0.08;
        this.swayVel -= this.swayAngle * spring;
        this.swayVel *= damping;
        this.swayAngle += this.swayVel;

        // Current horizontal claw tip offset due to sway
        const clawTipX = this.x + Math.sin(this.swayAngle) * (this.y - this.topY + 30);

        // 3. State Machine Processing
        switch (this.state) {
            case 'dropping':
                this.y += this.dropSpeed;

                // Check depth limit or contact with toys
                let hitToy = false;
                for (let t of toys) {
                    if (!t.body) continue;
                    const dx = t.body.position.x - clawTipX;
                    const dy = t.body.position.y - this.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < t.radius + 26 && dy > -8) {
                        hitToy = true;
                        break;
                    }
                }

                if (this.y >= this.maxY || (this.y > 180 && hitToy)) {
                    this.state = 'grabbing';
                    this.stateTimer = 0;
                    if (window.audioManager) {
                        window.audioManager.stopWinch();
                        window.audioManager.playClawClose();
                    }
                    this.targetProngAngle = 1; // Close prongs
                }
                break;

            case 'grabbing':
                this.stateTimer++;
                if (this.stateTimer > 28) {
                    // Attempt grab with strict physics alignment & grip calculation
                    this.attemptGrab(toys, clawTipX);
                    this.state = 'lifting';
                    if (window.audioManager) window.audioManager.startWinch();
                }
                break;

            case 'lifting':
                this.y -= this.liftSpeed;

                if (this.grabbedToy && this.grabbedToy.body) {
                    // Position grabbed toy safely within cabinet bounds
                    const safeX = Math.max(126, Math.min(504, clawTipX));
                    Matter.Body.setPosition(this.grabbedToy.body, {
                        x: safeX,
                        y: this.y + 24
                    });
                    Matter.Body.setVelocity(this.grabbedToy.body, { x: 0, y: -this.liftSpeed });

                    // Challenging Slip Check during ascent
                    this.processAscentSlip();
                }

                if (this.y <= this.topY) {
                    this.y = this.topY;

                    // Only travel to prize chute if a toy was actually caught!
                    if (this.grabbedToy) {
                        this.state = 'returning';
                        if (window.audioManager) {
                            window.audioManager.stopWinch();
                            window.audioManager.startMotor();
                        }
                    } else {
                        // No toy caught: open prongs and remain ready at current position
                        this.state = 'idle';
                        this.targetProngAngle = 0;
                        this.gripQuality = 0;
                        this.isWobbling = false;
                        if (window.audioManager) {
                            window.audioManager.stopWinch();
                            window.audioManager.playClawOpen();
                        }
                        if (this.onMiss) {
                            this.onMiss();
                        }
                    }
                }
                break;

            case 'returning':
                // Return trolley towards prize chute (Left movement)
                if (this.x > this.chuteX) {
                    const retSpeed = this.speedX * 0.85;
                    this.x -= retSpeed;
                    this.swayVel += 0.007; // Inertia sway when moving back
                } else {
                    this.x = this.chuteX;
                    this.state = 'releasing';
                    this.stateTimer = 0;
                    if (window.audioManager) {
                        window.audioManager.stopMotor();
                        window.audioManager.playClawOpen();
                    }
                    this.targetProngAngle = 0; // Open prongs
                }

                if (this.grabbedToy && this.grabbedToy.body) {
                    const safeX = Math.max(this.chuteX, Math.min(504, this.x + Math.sin(this.swayAngle) * 20));
                    Matter.Body.setPosition(this.grabbedToy.body, {
                        x: safeX,
                        y: this.y + 24
                    });

                    // Challenging Slip Check during transit & stopping deceleration
                    this.processTransitSlip();
                }
                break;

            case 'releasing':
                this.stateTimer++;
                if (this.stateTimer === 8) {
                    this.releaseGrabbedToy();
                }
                if (this.stateTimer > 40) {
                    this.state = 'idle';
                    this.gripQuality = 0;
                    this.isWobbling = false;
                }
                break;
        }

        // Animate prong angle
        this.prongAngle += (this.targetProngAngle - this.prongAngle) * 0.18;
    }

    attemptGrab(toys, tipX) {
        let bestToy = null;
        let minDistance = 999;

        // Alignment Tolerances by Difficulty:
        // Cozy: 48px | Arcade: 38px | Master: 26px
        const maxHorizTolerance = this.difficulty === 'cozy' ? 48 : (this.difficulty === 'arcade' ? 38 : 26);
        const maxVertDistance = 55;

        for (let t of toys) {
            if (!t.body) continue;
            const dx = Math.abs(t.body.position.x - tipX);
            const dy = t.body.position.y - (this.y + 15);
            const dist = Math.hypot(dx, dy);

            if (dx < maxHorizTolerance && dy >= -18 && dy < maxVertDistance) {
                if (dist < minDistance) {
                    minDistance = dist;
                    bestToy = t;
                }
            }
        }

        if (bestToy) {
            this.grabbedToy = bestToy;
            // Prevent violent physics collision ejection against walls while carried
            if (this.grabbedToy.body) {
                this.grabbedToy.body.isSensor = true;
            }

            const rarity = bestToy.template.rarity || 'common';

            // Calculate Grip Quality based on Alignment, Sway, and Rarity
            let baseStability = rarity === 'legendary' ? 0.55 : (rarity === 'rare' ? 0.72 : 0.90);
            if (this.difficulty === 'master') baseStability -= 0.20;
            if (this.difficulty === 'cozy') baseStability += 0.30;

            // Penalty for off-center alignment
            const alignAccuracy = 1.0 - (minDistance / (maxHorizTolerance + 15));
            // Penalty for wild swaying at time of grab
            const swayPenalty = Math.min(0.35, Math.abs(this.swayAngle) * 1.8);

            this.gripQuality = Math.max(0.15, Math.min(1.0, (baseStability * 0.7 + alignAccuracy * 0.3) - swayPenalty));
            this.isWobbling = this.gripQuality < 0.60;

            Matter.Sleeping.set(bestToy.body, false);
            Matter.Body.setVelocity(bestToy.body, { x: 0, y: -0.5 });
        } else {
            this.grabbedToy = null;
            this.gripQuality = 0;
            this.isWobbling = false;
        }
    }

    processAscentSlip() {
        if (!this.grabbedToy) return;
        if (this.difficulty === 'cozy') return;

        // If grip is weak (< 0.60), chance to slip during lift
        const slipChance = (1.0 - this.gripQuality) * (this.difficulty === 'master' ? 0.020 : 0.009);

        if (Math.random() < slipChance) {
            this.slipToy();
        }
    }

    processTransitSlip() {
        if (!this.grabbedToy) return;
        if (this.difficulty === 'cozy') return;

        // Inertial slip penalty when trolley decelerates or swings
        const swingTension = Math.abs(this.swayAngle) * 0.6;
        const slipChance = (1.0 - this.gripQuality + swingTension) * (this.difficulty === 'master' ? 0.025 : 0.012);

        if (Math.random() < slipChance) {
            this.slipToy();
        }
    }

    slipToy(reason = 'Lost grip! Watch trolley sway & momentum') {
        if (!this.grabbedToy || !this.grabbedToy.body) return;

        if (window.audioManager) {
            window.audioManager.playSlip();
        }

        if (this.onSlip) {
            this.onSlip(reason);
        }

        const toyBody = this.grabbedToy.body;
        toyBody.isSensor = false; // Restore physical collisions

        // Tumble off with realistic deflection
        const flingX = (Math.random() - 0.5) * 2.5 + (this.swayAngle * 8.0);
        Matter.Body.setVelocity(toyBody, { x: flingX, y: 2.0 });
        Matter.Body.setAngularVelocity(toyBody, (Math.random() - 0.5) * 0.25);
        Matter.Sleeping.set(toyBody, false);

        this.grabbedToy = null;
        this.gripQuality = 0;
        this.isWobbling = false;

        // If slipping while returning to chute, stop moving and become idle immediately
        if (this.state === 'returning') {
            this.state = 'idle';
            this.targetProngAngle = 0;
            if (window.audioManager) {
                window.audioManager.stopMotor();
                window.audioManager.playClawOpen();
            }
        }
    }

    releaseGrabbedToy() {
        if (this.grabbedToy && this.grabbedToy.body) {
            const toyBody = this.grabbedToy.body;
            toyBody.isSensor = false; // Restore physical collisions
            Matter.Body.setVelocity(toyBody, {
                x: (Math.random() - 0.5) * 1.2,
                y: 1.8
            });
            Matter.Sleeping.set(toyBody, false);
            this.grabbedToy = null;
            this.gripQuality = 0;
            this.isWobbling = false;
        }
    }

    draw(ctx) {
        // 1. Draw top rail trolley & rolling wheels
        ctx.save();

        // Wheels rolling on the track
        ctx.fillStyle = '#4a2e0a';
        ctx.strokeStyle = '#2b1604';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(this.x - 12, this.topY - 24, 4.5, 0, Math.PI * 2);
        ctx.arc(this.x + 12, this.topY - 24, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Main Trolley Housing
        ctx.fillStyle = '#b8860b';
        ctx.strokeStyle = '#644117';
        ctx.lineWidth = 2;

        ctx.fillRect(this.x - 22, this.topY - 24, 44, 18);
        ctx.strokeRect(this.x - 22, this.topY - 24, 44, 18);

        // Brass rivets on trolley
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(this.x - 14, this.topY - 15, 2.5, 0, Math.PI * 2);
        ctx.arc(this.x + 14, this.topY - 15, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw hanging cable
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.topY - 6);
        ctx.lineTo(this.x + Math.sin(this.swayAngle) * (this.y - this.topY), this.y);
        ctx.stroke();

        // Cable striped spiral sheen
        ctx.strokeStyle = '#888888';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(this.x, this.topY - 6);
        ctx.lineTo(this.x + Math.sin(this.swayAngle) * (this.y - this.topY), this.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // 3. Draw Claw Mechanism Base
        ctx.translate(this.x + Math.sin(this.swayAngle) * (this.y - this.topY), this.y);
        ctx.rotate(this.swayAngle);

        // Jitter if precarious / wobbling grip
        if (this.isWobbling && this.grabbedToy) {
            ctx.translate((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
        }

        // Pulley ring
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(0, -6, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Golden Claw Cap
        const capGrad = ctx.createLinearGradient(-16, 0, 16, 0);
        capGrad.addColorStop(0, '#e5c07b');
        capGrad.addColorStop(0.5, '#fff2a8');
        capGrad.addColorStop(1, '#c99e46');
        ctx.fillStyle = capGrad;
        ctx.beginPath();
        ctx.roundRect(-16, 0, 32, 14, 4);
        ctx.fill();
        ctx.stroke();

        // Claw LED Grip Tension Indicator
        let ledColor = '#34c759'; // Solid green (Secure/Idle)
        if (this.state === 'dropping' || this.state === 'grabbing') {
            ledColor = '#3b82f6'; // Blue
        } else if (this.grabbedToy) {
            if (this.gripQuality > 0.75) ledColor = '#2ed573'; // Green
            else if (this.gripQuality > 0.5) ledColor = '#ffa502'; // Yellow/Orange warning
            else ledColor = '#ff4757'; // Red precarious slip danger!
        }
        ctx.fillStyle = ledColor;
        ctx.beginPath();
        ctx.arc(0, 7, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // 4. Draw 3 Articulated Prongs (Left, Right, Back/Center)
        const openSpread = 0.55 - this.prongAngle * 0.42;

        this.drawProng(ctx, -10, 12, -openSpread, -1);
        this.drawProng(ctx, 10, 12, openSpread, 1);
        this.drawProng(ctx, 0, 13, 0.05 * Math.sin(Date.now() * 0.005), 0);

        ctx.restore();
    }

    drawProng(ctx, startX, startY, angle, side) {
        ctx.save();
        ctx.translate(startX, startY);
        ctx.rotate(angle);

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#c49a45';
        ctx.fillStyle = '#ecd27a';

        // Upper arm segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(side * 8, 16);
        ctx.stroke();

        // Joint hinge
        ctx.fillStyle = '#8f681a';
        ctx.beginPath();
        ctx.arc(side * 8, 16, 3, 0, Math.PI * 2);
        ctx.fill();

        // Lower curved claw hook
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(side * 8, 16);
        ctx.quadraticCurveTo(side * 14, 28, -side * 3, 34);
        ctx.stroke();

        // Rubber grip tip
        ctx.fillStyle = this.isWobbling ? '#ff4757' : '#e74c3c';
        ctx.beginPath();
        ctx.arc(-side * 3, 34, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}

window.ClawController = ClawController;
