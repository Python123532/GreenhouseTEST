// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  trailingSlash: 'always',
  integrations: [svelte()],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  site: 'https://Python123532.github.io',
  base: '/GreenhouseTESt',
  build: {
    format: 'directory',
  }
});
