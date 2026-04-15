# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
```

## Architecture

This is the official website for the **O'zbekiston Davlat Konservatoriyasi** (Uzbekistan State Conservatory), built as a React SPA using Vite + React Router v6.

### Folder structure

```
src/
  components/
    layout/
      Layout.jsx    — outlet wrapper: Header + Sidebar + <Outlet/> + Footer
      Header.jsx    — fixed top nav, scroll effect, calendar link
      Sidebar.jsx   — two-tier slide-down drawer; driven by useSidebar hook
      Footer.jsx    — site footer
    PageHero.jsx    — shared inner-page hero: breadcrumbs + back button + h1
  data/
    navigation.js   — NAV_MENU array driving the sidebar (single source of truth)
  hooks/
    useSidebar.js   — isOpen / activePanel state + open/close/selectPanel callbacks
  pages/
    Home.jsx        — homepage (hero, split section, students section)
    Tarix.jsx       — Konservatoriya tarixi
    Tuzilma.jsx     — Muassasa tuzilmasi
    Rahbariyat.jsx  — Rahbariyat
    Hujjatlar.jsx   — Me'yoriy hujjatlar
    Yangiliklar.jsx — Yangiliklar
    Taqvim.jsx      — Tadbirlar taqvimi (highlight bar, filters, events list)
  App.jsx           — BrowserRouter + Routes (all routes nested under Layout)
  main.jsx          — ReactDOM entry
  index.css         — all site CSS (global vars, layout, components, responsive)
```

### Routing

All routes are children of `<Layout>` which renders `<Outlet>`. Routes live in `src/App.jsx`:

| Path | Page |
|---|---|
| `/` | Home |
| `/tarix` | Tarix |
| `/tuzilma` | Tuzilma |
| `/rahbariyat` | Rahbariyat |
| `/hujjatlar` | Hujjatlar |
| `/yangiliklar` | Yangiliklar |
| `/taqvim` | Taqvim |

### Adding a new page

1. Create `src/pages/MyPage.jsx` — use `<PageHero>` for the inner-page header pattern
2. Add a `<Route path="my-page" element={<MyPage />} />` in `src/App.jsx`
3. Add links to `src/data/navigation.js` (sidebar auto-renders from this data)

### Key design notes

- `src/index.css` uses CSS custom properties (no CSS-in-JS): `--primary-blue`, `--accent-gold`, `--font-serif`, `--font-sans`
- The sidebar `close()` is triggered on click-outside via a `useEffect` in `Layout.jsx` using refs passed to both `Header` and `Sidebar`
- `PageHero` uses `useNavigate(-1)` for the back button — no hardcoded URLs
- Static assets (logo, hero image) live in `public/` and are referenced as `/filename`
