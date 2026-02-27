// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dentalgranavenida.cl',
  base: '/', // Required for custom domain - GitHub Pages serves from root
  vite: {
    plugins: [tailwindcss()]
  }
});