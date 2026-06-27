# B.T.V. Manikanta - Developer Portfolio

A modern, heavily-animated single-page portfolio built with **React 19 + Vite**,
**Framer Motion**, and **GSAP ScrollTrigger** - hand-crafted CSS and a canvas, no
UI kit or Tailwind.

🔗 **Live (GitHub Pages):** https://manikanta-20-11.github.io

## Highlights

- 🌌 **Animated constellation background** - a `<canvas>` particle field that
  reacts to the cursor (`src/Starfield.jsx`).
- ✍️ **Per-character / per-word text reveals** - every heading and paragraph
  animates in unit-by-unit via Framer Motion (`AnimatedText`).
- ⌨️ **Typewriter hero** cycling through roles, with blinking caret.
- 🃏 **3D tilt project cards** that rotate toward the cursor (spring physics) with
  a glow that follows the pointer.
- 🎯 **Filterable projects** with shared-layout animations (`AnimatePresence` +
  `layoutId`) - the active pill and cards animate between states.
- 🪂 **GSAP ScrollTrigger** parallax on the background glows and directional
  slide-ins for the education card + achievement timeline.
- 🔢 **Count-up stats** and staggered reveals throughout.
- 📊 Framer `useScroll` reading-progress bar + animated nav indicator
  (`layoutId`).
- 📱 Fully responsive with a mobile menu, and respects
  `prefers-reduced-motion`.

## Animation libraries

| Library | Used for |
| --- | --- |
| **framer-motion** | text splits, staggered reveals, hover/tap springs, 3D tilt, layout/filter transitions, scroll progress |
| **gsap** + ScrollTrigger | parallax glows, directional scroll slide-ins |

## Project structure

```
src/
├── App.jsx        # Layout: Nav, Hero, About, Projects, Skills, Achievements, Contact
├── App.css        # All component styling
├── index.css      # Theme tokens, resets, background glows
├── data.js        # ← Single source of truth: edit your content here
├── motion.jsx     # <Animate> + <AnimatedText> Framer Motion components
├── anim.js        # Shared variants + GSAP scroll hooks (useParallax/useSlideIn)
├── Starfield.jsx  # Canvas particle background
└── effects.jsx    # CountUp / Typewriter helpers
```

## Editing content

All text, projects, skills and links live in **`src/data.js`**. Update that one
file to keep the portfolio current - no need to touch markup.

## Commands

```bash
npm install      # install deps
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # run eslint
```

## Deploying to GitHub Pages

1. Build: `npm run build` (outputs to `dist/`).
2. Push `dist/` to your `<username>.github.io` repo, **or** use the
   `gh-pages` action. If hosting under a sub-path, set `base` in
   `vite.config.js`.

## Author

**Buddavarapu Taraka Venkata Manikanta (B.T.V. Manikanta)**
- **GitHub:** [@Manikanta-20-11](https://github.com/Manikanta-20-11)
- **LinkedIn:** [B.T.V. Manikanta](https://www.linkedin.com/in/buddavarapu-taraka-venkata-manikanta-b77458325/)
- **Email:** manikanta_buddavarapu@srmap.edu.in
