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

## 🌟 Toy Catalogue & Rarity Tiers (29 Unique Plushies)

### 🦫 10 Unique Capybara Toys
1. **Cool Guy Capybara (★★☆)**: *Super chill with retro blue shades and double thumbs up! 👍😎👍*
2. **Yuzu Zen Capybara (★☆☆)**: *Master of ultimate relaxation with a juicy yuzu orange on its head. 🍊*
3. **Capy & Duck Pal (★★★)**: *Best buddies with a cozy red winter scarf and baby duckling on top. 🐥*
4. **Onsen Spa Capybara (★★☆)**: *Soaking in a warm hot spring with a folded spa towel. ♨️*
5. **Bakery Capybara (★☆☆)**: *Chief pastry chef holding a fresh buttery croissant. 🥐*
6. **Strawberry Capybara (★★☆)**: *Sporting a fresh red strawberry hat with cute seed dots. 🍓*
7. **Froggy Raincoat Capy (★☆☆)**: *Splashing in puddles wearing a froggy hooded raincoat. 🐸*
8. **Donut Float Capybara (★★☆)**: *Floating gently inside a pink strawberry sprinkle donut ring. 🍩*
9. **Star Wizard Capybara (★★★)**: *Casts spells of infinite chillness with a starry wizard hat. 🧙‍♂️✨*
10. **Boba Milk Tea Capybara (★★★)**: *Sipping brown sugar boba milk tea with chewy tapioca pearls. 🧋*

### 🐱 10 Unique Cat Toys
1. **Calico Kitten (★☆☆)**: *Classic tricolor calico with emerald eyes and whiskers. 🐱*
2. **Chonky Orange Tabby (★☆☆)**: *100% fluff, 0% thoughts, 1000% love! 🐾*
3. **Bread Toast Cat (★☆☆)**: *Stuck its head right through a slice of golden buttered toast! 🍞*
4. **Midnight Witch Cat (★★☆)**: *Sleek black kitten with glowing gold eyes and purple ribbon bell. 🐈‍⬛*
5. **Siamese Princess (★★☆)**: *Elegant chocolate-point mask with sparkling sapphire eyes. 💎*
6. **Neko Salmon Sushi (★★☆)**: *White kitten wrapped in nori seaweed with salmon sashimi on top. 🍣*
7. **Matcha Boba Cat (★★☆)**: *Pastel matcha cat enjoying cold boba tea with cat-shaped pearls. 🍵*
8. **Cosmic Astro-Cat (★★★)**: *Explores the Milky Way in a glowing astronaut bubble helmet. 🚀🌌*
9. **Shark Costume Kitty (★★★)**: *Ferociously cuddly kitten wearing a shark suit with teeth and fin! 🦈*
10. **Sunflower Kitty (★★★)**: *Radiant golden kitten blooming with cheerful sunflower petals! 🌻*

### 🧸 9 Classic Arcade Plushies
- **Honey Bear (★☆☆)**, **Rubber Ducky (★☆☆)**, **Fluffy Bunny (★☆☆)**, **Cuddle Penguin (★☆☆)**
- **Magic Shroom (★★☆)**, **Starry Cloud (★★☆)**
- **Golden Dragon (★★★)**, **Rainbow Unicorn (★★★)**, **Royal Mystery Egg (★★★)**

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
