# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
```

No test runner is configured. No linter is configured.

## Architecture

Official website for **O'zbekiston Davlat Konservatoriyasi** (Uzbekistan State Conservatory). React SPA using Vite + React Router v6 + Framer Motion.

### Routing

All routes are flat children of `<Layout>` in `src/App.jsx`. Layout renders `<Header>` + `<Outlet>` + `<Footer>` and re-runs `useScrollReveal` on every render (no deps array — intentional, picks up newly mounted `.reveal` elements after route changes).

| Path | Page |
|---|---|
| `/` | Home |
| `/tarix` | Konservatoriya tarixi |
| `/tuzilma` | Muassasa tuzilmasi |
| `/rahbariyat` | Rahbariyat |
| `/hujjatlar` | Me'yoriy hujjatlar |
| `/yangiliklar` | Yangiliklar |
| `/taqvim` | Tadbirlar taqvimi |
| `/kontaktlar` | Kontaktlar |
| `/abituriyentlar` | Abituriyentlar |

### Adding a new page

1. Create `src/pages/MyPage.jsx` — use `<PageHero>` for the inner-page header pattern
2. Add a `<Route path="my-page" element={<MyPage />} />` in `src/App.jsx`
3. Add links to `src/data/navigation.js` (navbar mega-dropdown renders from `NAV_MENU`)

### Navigation system

`src/data/navigation.js` is the **single source of truth** for all nav menus. It exports:
- `NAV_MENU` — 5 top-level items, each with `id`, `label`, `to`, `columns[]`, and optional `featured`. `columns[]` each have `heading` (optional) and `links[]`.
- `UTILITY_LINKS` — items rendered in the top utility bar and mobile menu footer.

The header renders differently by breakpoint, controlled by `useMediaQuery('(min-width: 1024px)')`:
- **≥1024px**: `UtilityBar` (36px black bar) + `DesktopNav` with `MegaDropdown` on hover
- **<1024px**: hamburger icon + `MobileMenu` fullscreen overlay with `MobileAccordion`

`MegaDropdown` is `position: fixed` with `top: var(--header-height)`. The CSS overrides `--header-height` to `104px` (36px utility + 68px navbar) for desktop and `68px` for mobile at the bottom of `index.css`.

`useScrollLock` locks body scroll when mobile menu is open by setting `position: fixed` and storing/restoring `scrollY`.

### Design system

All styling is in `src/index.css` — no CSS-in-JS, no Tailwind. CSS custom properties defined in `:root`:

```
/* Dark zones (header, hero, footer, mobile menu) */
--bg-deep / --bg-surface / --bg-elevated / --bg-card   dark navy/black backgrounds

/* Light zones (mega dropdown, page sections, inner pages) */
--white (#ffffff) / --cream (#f8f5ee) / --light-50 / --light-100 / --light-border
--navy (#1a1a38) / --navy-light               dark text on light backgrounds

/* Gold accent */
--gold / --gold-light / --gold-dim / --gold-dark (#a8891e)

/* Text */
--text-primary (#f0ede8)          on dark backgrounds
--text-dark (#1a1a38)             on light backgrounds
```

**Light vs dark zones rule:**
- Header (navbar + utility bar), hero, footer, mobile menu → dark backgrounds, light text
- Mega dropdown, page content sections, inner pages → light/white backgrounds, dark (`--navy`) text
- Any component on a light background uses `--navy` for headings, `#555/#888` for body text, `--gold-dark` for accents

Scroll reveal: add class `reveal` (+ optionally `reveal-left`, `reveal-right`, `reveal-d1`…`reveal-d5`) to any element. `useScrollReveal` in `Layout` uses `IntersectionObserver` to add `revealed` when 12% visible.

Page entry animation: wrap content in a `div` with `className="page-transition"` (CSS `@keyframes pageFadeUp`). Layout already applies this via `key={location.pathname}`.

### Key component notes

- **`PageHero`** — shared hero for inner pages. Props: `tag`, `title`, `emphasis` (italic serif span), `breadcrumbs` (array of `{ label, to? }`). Back button uses `useNavigate(-1)`.
- **`HamburgerIcon`** — uses `motion.line` SVG animation to morph 3 lines → X shape.
- **`MegaDropdown`** — staggered `motion.li` entry per link (`colIdx * 0.04 + linkIdx * 0.03` delay). Featured panel slides in from the right.
- **`MobileAccordion`** — `+` rotates 45° to `×` on open. Sub-links stagger-animate inside `AnimatePresence`.
- **`LanguageSwitcher`** — local state only (UZ/RU/EN), no i18n library connected.
- **Static assets** (`/image.png`, `/Konservatoriya_logo_white-05.png`) live in `public/` and are referenced as root-relative paths.
- **Footer** social icon hover is handled via inline `onMouseOver`/`onMouseOut` (not CSS classes).
