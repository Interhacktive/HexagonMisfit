# CSS — Stylesheet Guide

## Load Order
Files should be linked in this order — each layer builds on the previous:

```
tokens.css → reset.css → layout.css → components.css → animations.css → sections.css
```

Page-specific overrides load after:
```
portfolio-detail.css → case-study-mobile.css  (case study pages only)
```

---

## File Responsibilities

| File | Owns |
|------|------|
| `tokens.css` | All CSS custom properties: color palette, typography (Inter, Space Grotesk, Space Mono), spacing scale (`--space-*`), border radius, shadows, transition durations. **Change values here first.** |
| `reset.css` | Cross-browser normalization — box-sizing, margin/padding zeroing, font inheritance |
| `layout.css` | `.container`, grid system, flexbox utilities, responsive breakpoints. Controls max-widths and page scaffolding. |
| `components.css` | Reusable UI: buttons (`.btn`, `.btn-primary`, `.btn-outline`), cards, form inputs, badges/tags |
| `animations.css` | Scroll-triggered reveal system using `[data-animate]` attribute + IntersectionObserver (see `../js/animations.js`). Defines `fade-up`, `fade-in`, `slide-in` variants. |
| `sections.css` | One-off section styles: hero, services grid, portfolio masonry, process timeline, about, footer |
| `portfolio-detail.css` | Layout for individual case study pages: hero banner, content columns, media galleries, stat blocks |
| `case-study-mobile.css` | Mobile breakpoint overrides for case study pages — loaded after `portfolio-detail.css` |

---

## Key Tokens (from `tokens.css`)

- **Primary accent:** `--color-accent` (check file for current value)
- **Type families:** `--font-body` (Inter), `--font-display` (Space Grotesk), `--font-mono` (Space Mono)
- **Spacing:** `--space-xs` through `--space-3xl`
- **Transitions:** `--transition-base`, `--transition-slow`
