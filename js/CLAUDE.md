# JS — Script Guide

## Files

| File | Responsibility |
|------|---------------|
| `main.js` | Core site behavior: sticky nav style on scroll, hamburger menu open/close, active nav link highlighting based on scroll position, smooth-scroll for anchor `#` links |
| `animations.js` | IntersectionObserver that adds `.is-visible` class to `[data-animate]` elements as they enter the viewport. Drives all scroll-reveal animations defined in `../css/animations.css`. |
| `contact-form.js` | Contact form: input validation, error messages, submission handler (check file for current endpoint/method) |
| `portfolio-data.js` | **Source of truth** for portfolio entries — titles, slugs, tags, thumbnail paths, case study URLs. Edit here to add/update/remove portfolio items. |
| `portfolio-filter.js` | Reads from `portfolio-data.js` and renders the portfolio grid. Handles tag-based filtering and any sorting/display logic. |

---

## Adding a New Portfolio Entry
1. Add entry object to `portfolio-data.js`
2. Add images to `../images/{project-folder}/`
3. Create case study page in `../case-studies/{slug}.html`
4. `portfolio-filter.js` picks it up automatically on next load

## Scroll Animations
Any element can opt into scroll animations:
```html
<div data-animate="fade-up">...</div>
```
Available values: `fade-up`, `fade-in`, `slide-in` (see `../css/animations.css` for full list)
