// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// For GitHub Pages: site + base per https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://ocarmora.github.io',
  base: '/dental_gran_avenida',
  vite: {
    plugins: [tailwindcss()]
  }
});