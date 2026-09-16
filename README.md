# Portfolio Hero Experiment

Fifteen complete portfolio sites wrapped around the same person.
Built to compare design languages side-by-side — same data, same nav, same CTAs, only the aesthetic changes.

🔗 **Live:** https://sanjays2402.github.io/portfolio-hero-experiment/

## Variants

| Route | Style | Tech / theme |
|---|---|---|
| `/v1` | Glass | Aurora gradients, frosted depth |
| `/v2` | Terminal | CRT, command-line, shell history |
| `/v3` | Brutalist | Yellow, black, no mercy |
| `/v4` | Synthwave | Perspective grid + sun, outrun aesthetic |
| `/v5` | Blueprint | Technical drawing, "Drawing No. SS-2026" |
| `/v6` | Zine | Halftone comic, hand-stapled |
| `/v7` | Museum | Spotlit, serif, hushed |
| `/v8` | Y2K Aero | Frutiger Metro · 2003 |
| `/v9` | Boarding | Sanjay Air · JAI → SEA boarding pass |
| `/v10` | Newspaper | Broadsheet, drop caps, wire copy |
| `/v11` | Receipt | Thermal print, dot-matrix, barcode |
| `/v12` | Subway | MTA line map of a career |
| `/v13` | Bloomberg | Career as a market product |
| `/v14` | Polaroid | Corkboard, washi tape, push-pins |
| `/editorial` | Editorial | Magazine spread, serif |

## Navigating

Every page carries a floating **Variant** switcher at the bottom of the screen —
click any label to jump straight to that variant, or press **← / →** arrow keys
to flip through them in order (gallery → v1 → … → editorial). Arrow keys are
ignored while typing in a text field.

### v1 — Gradient Orb
![v1](public/v1.png)

### v2 — Wireframe Globe
![v2](public/v2.png)

### v3 — Particle Field
![v3](public/v3.png)

### v4 — Synthwave Grid
![v4](public/v4.png)

## Stack

- Next.js 14 (app router, static export)
- Tailwind CSS
- Framer Motion (entrance choreography only)
- Canvas 2D — no three.js, no WebGL libs
- Deployed to GitHub Pages via Actions

## Run locally

```bash
npm ci
npm run dev
# → http://localhost:3000
```

Visit `/` for the gallery, or `/v1`–`/v14` and `/editorial` for individual portfolios.
