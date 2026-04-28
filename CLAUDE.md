# HexagonMisfit — Codebase Guide

## Project
Immersive technology studio portfolio for Hexagon Misfit (Chris Rojas). Showcases large-scale interactive installations, projection mapping, HoloLens experiences, and generative experiments.

**Stack:** Vanilla HTML/CSS/JS — no build step, no framework, no bundler. Deploy as static files.

**Live URL:** Static site (open index.html directly or serve from root)

---

## Folder Map

| Folder | Purpose |
|--------|---------|
| `css/` | Design system — 8 modular CSS files (tokens → reset → layout → components → animations → sections) |
| `js/` | Site behavior — 5 JS files (nav, animations, form, portfolio data, filtering) |
| `case-studies/` | 20 individual project pages + listing index. See `case-studies/CLAUDE.md` |
| `images/` | All media assets organized by project. See `images/CLAUDE.md` |
| `experiments/` | 12 interactive web experiments/prototypes. See `experiments/CLAUDE.md` |
| `portfolio/` | Single redirect page → forwards to `/` |
| `assets/fonts/` | Custom font: `Cyber Brush.ttf` |
| `.claude/` | Claude Code settings |

---

## Root Files

| File | Role |
|------|------|
| `index.html` | Main site — hero, services, portfolio grid, process, about, contact |
| `README.md` | Minimal project title file |
| `.gitignore` | Git exclusions |

---

## CSS Architecture (`css/`)

Load order matters — files build on each other:

1. `tokens.css` — All CSS custom properties: colors, type scale, spacing, shadows, transitions
2. `reset.css` — Cross-browser normalization
3. `layout.css` — Container, grid, flexbox utilities, responsive breakpoints
4. `components.css` — Buttons, cards, badges, forms
5. `animations.css` — Scroll-triggered fade/slide via `[data-animate]` attribute
6. `sections.css` — Hero, services, portfolio, process, about, footer section styles
7. `portfolio-detail.css` — Styles specific to case study detail pages
8. `case-study-mobile.css` — Mobile overrides for case study pages

---

## JS Architecture (`js/`)

| File | Responsibility |
|------|---------------|
| `main.js` | Nav scroll behavior, hamburger menu, active link tracking, smooth scroll |
| `animations.js` | IntersectionObserver driving `[data-animate]` scroll reveals |
| `contact-form.js` | Contact form validation and submission |
| `portfolio-data.js` | Source of truth for portfolio metadata (titles, tags, links) |
| `portfolio-filter.js` | Portfolio grid filtering/sorting UI |

---

## Key Conventions

- **Scroll animations:** Add `data-animate` attribute to any element — `animations.js` handles the rest
- **Portfolio data:** Edit `js/portfolio-data.js` to add/update/remove portfolio entries; the filter UI reads from it
- **Design tokens:** All colors/spacing live in `css/tokens.css` — never hardcode values elsewhere
- **Case study pages:** Use `portfolio-detail.css` + `case-study-mobile.css` for layout; follow existing page structure
- **No dependencies:** Zero npm, zero CDN imports required for core site (some experiments may use inline scripts)
