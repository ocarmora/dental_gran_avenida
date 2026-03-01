# Dental Gran Avenida

Website for Dental Gran Avenida, a dental clinic with 40+ years of experience located in El Bosque, Santiago, Chile.

**Live site:** https://ocarmora.github.io/dental_gran_avenida

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static site generation) |
| Styling | Tailwind CSS v4 |
| Fonts | DM Sans (body), Figtree (display) via Google Fonts |
| Scroll animations | sal.js |
| Video player | video.js (HLS adaptive streaming) |
| Sitemap | @astrojs/sitemap |
| Deployment | GitHub Pages via GitHub Actions |

---

## Local development

```sh
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Type-check
npx astro check

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

```sh
cp .env.example .env
```

| Variable | Description | Default |
|----------|-------------|---------|
| `PUBLIC_WHATSAPP_PHONE` | WhatsApp number (no `+`, no spaces) | `56948446632` |
| `PUBLIC_PHONE_LANDLINE` | Landline number | `56225272911` |
| `PUBLIC_CONTACT_EMAIL` | Contact email address | `contacto@dentalgranavenida.cl` |
| `PUBLIC_FACEBOOK_URL` | Facebook page URL | `https://facebook.com/dentalgranavenida` |
| `PUBLIC_INSTAGRAM_URL` | Instagram profile URL | `https://instagram.com/dentalgranavenida` |
| `PUBLIC_MAPS_URL` | Google Maps link | (clinic location) |

All variables have hardcoded fallbacks in `src/config.ts`, so the site builds without a `.env` file.

---

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.

The site is served under the `/dental_gran_avenida` base path (configured in `astro.config.mjs`). All internal links must use the `toHref()` utility from `src/config.ts` to resolve correctly.

---

## Project structure

```
src/
├── assets/images/          # Optimised images (processed by Astro at build time)
│   ├── carousel/           # Hero slider images
│   ├── specialties/        # Per-specialty images
│   └── team/               # Doctor portrait photos
├── components/             # Astro components (UI building blocks)
├── data/                   # Static content data (TypeScript)
│   ├── specialties.ts      # 8 dental specialties with slugs and descriptions
│   ├── team.ts             # 10 team members with photos
│   ├── feature-cards.ts    # 4 clinic feature cards
│   ├── testimonials.ts     # 8 patient testimonials
│   ├── contact.ts          # Business hours
│   └── values.ts           # Mission and vision statements
├── layouts/
│   └── Layout.astro        # Root HTML shell (used by all pages)
├── pages/
│   ├── index.astro          # Homepage
│   ├── conoce-la-clinica.astro
│   ├── contacto.astro
│   └── especialidades/
│       └── [slug].astro    # Dynamic specialty pages (SSG)
├── styles/
│   └── global.css          # Tailwind imports + custom theme tokens + utility classes
├── config.ts               # Centralised config: env vars, WhatsApp URL, social links
└── env.d.ts                # TypeScript declarations for environment variables
```

### Key conventions

- **Code in English, user-facing text in Spanish** (see `.cursor/rules/code-language.mdc`)
- All internal `href` values must go through `toHref()` from `src/config.ts`
- Static content lives in `src/data/` — components import from there, no inline arrays
- Interactive UI uses native Web Components (`<hero-slider>`, `<video-player-modal>`) — no JS framework
- Scroll-reveal animations use `data-sal="slide-up"` attributes, initialised once by `SalInit.astro`

---

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/conoce-la-clinica` | About the clinic, team, values, infrastructure |
| `/contacto` | Contact channels, business hours, map |
| `/especialidades/[slug]` | Individual specialty page (8 routes, statically generated) |
