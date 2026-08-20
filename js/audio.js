/**
 * Cozy Audio Synthesizer - Procedural Web Audio for Claw Machine
 * Zero external audio files required!
 */
class AudioManager {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
        this.musicEnabled = false; // Starts paused until user interacts or toggles
        this.motorOsc = null;
        this.motorGain = null;
        this.winchTimer = null;
        this.musicInterval = null;
        this.musicStep = 0;
        this.masterGain = null;
        this.musicGain = null;
        this.sfxGain = null;
    }

    init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();

        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.8;
        this.masterGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 0.9;
        this.sfxGain.connect(this.masterGain);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = 0.25;
        this.musicGain.connect(this.masterGain);
    }

    ensureContext() {
        if (!this.ctx) {
            this.init();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        if (this.sfxGain) {
            this.sfxGain.gain.value = this.soundEnabled ? 0.9 : 0;
        }
        return this.soundEnabled;
    }

    toggleMusic() {
        this.ensureContext();
        this.musicEnabled = !this.musicEnabled;
        if (this.musicGain) {
            this.musicGain.gain.value = this.musicEnabled ? 0.25 : 0;
        }
        if (this.musicEnabled) {
            this.startMusic();
        } else {
            this.stopMusic();
        }
        return this.musicEnabled;
    }

    // --- SFX Generators ---

    playClick() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }

    playDropButton() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;

        // Punchy arcade mechanical clunk + chime
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'square';
        osc1.frequency.setValueAtTime(150, now);
        osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
        gain1.gain.setValueAtTime(0.3, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc1.connect(gain1);
        gain1.connect(this.sfxGain);
        osc1.start();
        osc1.stop(now + 0.12);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(587.33, now);
        osc2.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain2.gain.setValueAtTime(0.15, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc2.connect(gain2);
        gain2.connect(this.sfxGain);
        osc2.start();
        osc2.stop(now + 0.2);
    }

    startMotor() {
        if (!this.soundEnabled || this.motorOsc) return;
        this.ensureContext();
        try {
            this.motorOsc = this.ctx.createOscillator();
            this.motorGain = this.ctx.createGain();
            this.motorOsc.type = 'triangle';
            this.motorOsc.frequency.setValueAtTime(110, this.ctx.currentTime);

            this.motorGain.gain.setValueAtTime(0.06, this.ctx.currentTime);
            this.motorOsc.connect(this.motorGain);
            this.motorGain.connect(this.sfxGain);
            this.motorOsc.start();
        } catch (e) {}
    }

    stopMotor() {
        if (this.motorOsc) {
            try {
                this.motorGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);
                setTimeout(() => {
                    if (this.motorOsc) {
                        this.motorOsc.stop();
                        this.motorOsc.disconnect();
                        this.motorOsc = null;
                        this.motorGain = null;
                    }
                }, 60);
            } catch (e) {
                this.motorOsc = null;
            }
        }
    }

    startWinch() {
        if (!this.soundEnabled || this.winchTimer) return;
        this.ensureContext();
        this.winchTimer = setInterval(() => {
            if (!this.soundEnabled || !this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600 + Math.random() * 80, now);
            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start();
            osc.stop(now + 0.03);
        }, 90);
    }

    stopWinch() {
        if (this.winchTimer) {
            clearInterval(this.winchTimer);
            this.winchTimer = null;
        }
    }

    playClawClose() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;

        [320, 480, 720].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.03);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.6, now + i * 0.03 + 0.1);
            gain.gain.setValueAtTime(0.12, now + i * 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.03 + 0.12);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(now + i * 0.03);
            osc.stop(now + i * 0.03 + 0.12);
        });
    }

    playClawOpen() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start();
        osc.stop(now + 0.15);
    }

    playChuteDrop() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start();
        osc.stop(now + 0.2);
    }

    playSlip() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;

        // Rubber squeak / friction slip sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.18);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start();
        osc.stop(now + 0.18);
    }

    playWobble() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.setValueAtTime(310, now + 0.05);
        osc.frequency.setValueAtTime(240, now + 0.1);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start();
        osc.stop(now + 0.15);
    }

    playPrizeWin(rarity = 'common') {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;

        let notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        let speed = 0.09;

        if (rarity === 'rare') {
            notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51]; // Cmaj7 flourish
            speed = 0.08;
        } else if (rarity === 'legendary') {
            notes = [392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00]; // Epic arpeggio
            speed = 0.07;
        }

        notes.forEach((freq, index) => {
            const time = now + index * speed;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time);

            gain.gain.setValueAtTime(0.2, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.45);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(time);
            osc.stop(time + 0.45);
        });
    }

    playRestock() {
        if (!this.soundEnabled) return;
        this.ensureContext();
        const now = this.ctx.currentTime;
        [261.63, 329.63, 392.0, 523.25, 659.25].forEach((freq, idx) => {
            const time = now + idx * 0.05;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            gain.gain.setValueAtTime(0.15, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
            osc.connect(gain);
            gain.connect(this.sfxGain);
            osc.start(time);
            osc.stop(time + 0.2);
        });
    }

    // --- Cozy Toy Store Background Music Generator ---

    startMusic() {
        if (this.musicInterval) return;
        this.ensureContext();

        const melody = [
            392.00, 440.00, 493.88, 587.33, 659.25, 587.33, 493.88, 440.00,
            392.00, 493.88, 659.25, 783.99, 659.25, 587.33, 493.88, 392.00,
            440.00, 587.33, 659.25, 783.99, 880.00, 783.99, 659.25, 587.33,
            493.88, 392.00, 440.00, 293.66, 392.00, 493.88, 392.00, null
        ];

        const chords = [
            [196.00, 293.66, 392.00], // G
            [164.81, 246.94, 329.63], // Em
            [220.00, 261.63, 329.63], // Am
            [146.83, 220.00, 293.66]  // D
        ];

        this.musicInterval = setInterval(() => {
            if (!this.musicEnabled || !this.ctx) return;
            const now = this.ctx.currentTime;
            const note = melody[this.musicStep % melody.length];

            if (note) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(note, now);

                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

                osc.connect(gain);
                gain.connect(this.musicGain);
                osc.start(now);
                osc.stop(now + 0.5);
            }

            if (this.musicStep % 8 === 0) {
                const chord = chords[Math.floor(this.musicStep / 8) % chords.length];
                chord.forEach(freq => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.025, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
                    osc.connect(gain);
                    gain.connect(this.musicGain);
                    osc.start(now);
                    osc.stop(now + 1.6);
                });
            }

            this.musicStep++;
        }, 280);
    }

    stopMusic() {
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
    }
}

window.audioManager = new AudioManager();
