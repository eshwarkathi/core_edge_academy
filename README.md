# Core Edge Academy — Website

Marketing site for Core Edge Academy, an industry-ready IT training institute in
Ameerpet, Hyderabad. Built with **React + Vite**, dark "console" aesthetic using
the brand palette (`#EC5667` · `#E09176` · `#030303` · `#1F2032`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview production

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built dist/ locally
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, S3, etc.).

## Project structure

```
index.html                  # head, fonts, SEO meta + JSON-LD structured data
src/
  main.jsx                  # React entry
  App.jsx                   # whole single-page site (all sections + data arrays)
  index.css                 # design system + all styles
  assets/
    logo-full.png           # full logo lockup (source)
    logo-mark.png           # cropped coral icon (used in nav/footer)
public/
  logo.png                  # favicon / apple-touch / manifest icon
  og-image.png              # 1200x630 social share image
  manifest.webmanifest
  robots.txt
  sitemap.xml
```

Page sections live in `App.jsx`: Hero → Tech marquee → Courses → Who It's For →
Why Us (bento) → Approach → FAQ → Contact → Footer. Content is driven by the
`COURSES`, `PILLARS`, `TECH`, `AUDIENCE`, `FAQS`, `NAV`, and `SOCIALS` arrays near
the top of the file — edit those to change copy.

## Before going live — checklist

- [ ] **Domain.** Replace every `https://www.coreedgeacademy.com` placeholder with
      the real domain (in `index.html`, `public/robots.txt`, `public/sitemap.xml`,
      `public/manifest.webmanifest`).
- [ ] **LinkedIn URL is a guess.** `linkedin.com/in/core-edge-academy` appears in
      the footer (`SOCIALS` in `App.jsx`) and in `index.html` JSON-LD `sameAs`.
      Confirm or replace with the real profile/company page.
- [ ] **Email.** No public email is on the site yet — contact is phone + WhatsApp
      (`+91 88854 92139`). Add one if wanted.
- [ ] **Geo coordinates.** `index.html` JSON-LD uses the Ameerpet area lat/long
      (`17.4374, 78.4487`). Replace with the exact building coordinates for precise
      Google Maps / local SEO.

## Accessibility & quality notes

- Responsive from 390px up; mobile slide-in nav.
- Keyboard focus rings, skip link, `aria-current` on the active nav item.
- `prefers-reduced-motion` disables the typing effect, marquee, float, and reveals.
- No console errors; production build is ~50 KB gzipped JS + ~4 KB CSS.
