# Content (Pages CMS)

This folder holds content managed by [Pages CMS](https://pagescms.org). The schema is defined in the root [`.pages.yml`](../.pages.yml).

## Structure

| Path | Type | Description |
|------|------|-------------|
| `site/settings.json` | File | Site-wide settings (WhatsApp, contact, social, address) |
| `site/feature-cards.json` | File | Homepage feature cards |
| `site/values.json` | File | Mission & vision |
| `site/hours.json` | File | Business hours |
| `pages/home.md` | File | Home page content |
| `pages/contact.md` | File | Contact page |
| `pages/about.md` | File | About / Conoce la clínica |
| `specialties/*.md` | Collection | One file per specialty (9 seeded) |
| `team/*.md` | Collection | One file per team member (10 seeded) |
| `testimonials/*.md` | Collection | Testimonials (8 seeded) |
| `blog/*.md` | Collection | Blog posts (1 placeholder) |
| `banners/*.md` | Collection | Promotional banners (1 placeholder) |
| `gallery/*.md` | Collection | Before/after cases (1 placeholder) |

## Media

Uploaded media is stored under `public/media/`:

- `public/media/images` – images
- `public/media/documents` – PDFs, etc.
- `public/media/videos` – video files

URLs in the site use the base path (e.g. `/dental_gran_avenida/media/images/...`).

## Using this content in Astro

Right now the site reads from `src/data/site-data.ts`. To drive it from CMS content you can:

1. **Content collections**: Define Astro content collections in `src/content/` that mirror these paths, or use `Astro.glob()` / `fetch()` to load from `content/` at build time.
2. **Build-time load**: In `src/data/` or layout scripts, read `content/**/*.json` and `content/**/*.md` and export the same shapes as `site-data.ts` so existing components keep working.

Reference: [Pages CMS configuration](https://pagescms.org/docs/configuration/).
