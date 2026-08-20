# Cozy 2D Toy Picker (Arcade Claw Machine) 🧸✨

A charming web-based 2D Toy Picker claw crane game featuring authentic rigid-body physics, procedural Web Audio sound synthesis, plushie collection progression, and a warm wooden arcade cabinet aesthetic.

## 🕹️ Controls

| Action | Keyboard | Touch / Mouse |
| :--- | :--- | :--- |
| **Move Left** | `Left Arrow` or `A` | Click/Hold `◀` Button |
| **Move Right** | `Right Arrow` or `D` | Click/Hold `▶` Button |
| **Drop Claw / Grab** | `Spacebar` or `Down Arrow` or `S` | Click `🎯 DROP CLAW` Button |
| **Change Difficulty** | Click `🕹️ Mode: ARCADE` | Tap Mode Button |
| **Open Toy Album** | Click `📖 Toy Album` | Tap Album Button |

## 🕹️ Difficulty Modes

1. **🕹️ ARCADE (Default / Challenging)**:
   - Requires strict alignment over the plushie (within $\pm 20\text{px}$).
   - Dynamic pendulum inertia: moving the trolley makes the cable sway, requiring steady timing.
   - Rarity-scaled grip tension: Rare and Legendary plushies can slip during winch ascent or trolley deceleration.
   - Slipped/nudged toys deflect realistically into the pile.
2. **💀 MASTER (Hardcore)**:
   - Pinpoint alignment required ($\pm 13\text{px}$).
   - High swing inertia, realistic slip chance on any sudden movement.
3. **🌟 COZY (Relaxed)**:
   - High grip stability for casual, forgiving play.
| **Restock Toys** | Click `🔄 Restock Toys` | Tap Restock Button |
| **Insert Coins** | Click `🪙 +5 Coins` | Tap Coins Button |
| **Toggle Music** | Click `🎵 Music` | Tap Music Button |
| **Toggle Sound** | Click `🔊 Sound` | Tap Sound Button |

## 🌟 Toy Catalogue & Rarity Tiers (17 Unique Plushies)

### 🟢 Common (★☆☆)
- **Honey Bear**: *Loves warm honey and cozy hugs.*
- **Rubber Ducky**: *Always ready for bath time splashing!*
- **Fluffy Bunny**: *Gentle twitchy nose and ultra soft fur.*
- **Cuddle Penguin**: *Waddles with joy when holding a pebble.*
- **Tiny Froggie**: *Ribbit! Expert fly catcher and lilypad lounger.*
- **Matcha Dino**: *Tiny stomper who enjoys warm herbal tea and clover fields.*

### 🔵 Rare (★★☆)
- **Chill Capybara**: *Ok I pull up! Master of ultimate zen with an orange on head.* 🍊
- **Boba Axolotl**: *Sweet as milk tea, with extra chewy brown sugar pearls.* 🧋
- **Calico Kitten**: *Purrs at 40Hz and loves sunny windowsills.*
- **Shiba Inu**: *Such fluff, very loyal, wow plushie.*
- **Magic Shroom**: *Glows faintly beneath enchanted forest canopies.*
- **Starry Cloud**: *Floats on gentle dreams and stardust breezes.*
- **Octo Plush**: *Has eight arms for holding eight snacks at once.*

### 🟡 Legendary (★★★)
- **Capy & Duck Pal**: *Best buddies exploring the world together in cozy harmony.* 🐥
- **Golden Dragon**: *Legendary guardian of ancient treasure vaults.*
- **Rainbow Unicorn**: *Spreads prismatic rainbows wherever it gallops.*
- **Royal Mystery Egg**: *Crowned with jewels, holds mythical surprises.*
- **Cosmic Astro-Cat**: *Explores the Milky Way on moonbeams and purrs.*

## 🚀 How to Run

Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari) or serve with any local HTTP server:

```bash
# Optional: Python local server
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

## 🛠️ Tech Highlights
- **HTML5 Canvas 2D**: High-performance custom rendering of vector plushies, cable mechanics, lighting reflections, and particle bursts.
- **Matter.js Physics**: Realistic collisions, stacking friction, mass, and claw tension constraints.
- **Procedural Web Audio API**: Complete sound FX (motors, winch clicks, clasps, prize chimes, fanfare) and cozy pentatonic music box generator with zero external audio assets.
- **LocalStorage Progression**: Automatically tracks rescued plushies, counts, and completion badges.
