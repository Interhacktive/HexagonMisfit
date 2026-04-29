# Experiments — Index

Listed at `experiments/index.html` — a gallery page linking to each experiment.

Each experiment is self-contained in its own subdirectory with its own `index.html`.

---

## Experiment Directory

| Folder | What It Does | Notable Tech |
|--------|-------------|-------------|
| `Pigeon/` | City delivery game/simulation featuring pigeon sprites navigating urban routes | Audio: 6 sound files (cooing, flapping, grain drops, success). Sprite sheets in `pigeons/`. Also related to `case-studies/pigeon-city-delivery.html`. |
| `generative-geometry/` | Interactive geometric pattern generation | Canvas/SVG generative art |
| `mosh-pit/` | Crowd physics simulation — agents collide and bounce | Physics simulation (likely Canvas + custom physics) |
| `rain-text/` | Text rendered with falling rain particle effect | Canvas animation |
| `snake-box/` | Snake game variant confined to a box | Canvas game loop |
| `style-gallery/` | Component and style showcase — visual reference for the design system | Static HTML/CSS demo of tokens and components |
| `text-flow/` | Text layout/flow experiment; includes a PWA build in `app/` subdirectory | PWA: `app/manifest.json`, `app/sw.js` service worker, `app/icon-192.svg`, `app/icon-512.svg` |
| `toggle-micro/` | Micro-interaction toggle demonstrating smooth state transitions | CSS transitions / minimal JS |
| `unicorn-studio/` | Interactive Unicorn Studio visualization (v1) | Likely Unicorn Studio embed or custom canvas |
| `unicorn-studio-2/` | Unicorn Studio visualization iteration 2 | Second pass / variant of above |
| `webcam-ascii/` | Live webcam feed converted to ASCII art in real time | getUserMedia + Canvas pixel sampling |
| `face-parallax/` | Face tracking drives head-coupled perspective across layered 3D scenes | getUserMedia + MediaPipe + Canvas 2D |

---

## Notes
- `Pigeon/` contains `.claude/settings.local.json` and `.vscode/settings.json` — it had its own Claude Code session at some point
- `text-flow/app/` is a full PWA — has a service worker and installable manifest
- Experiments are not linked from the main portfolio unless explicitly added to `js/portfolio-data.js`
