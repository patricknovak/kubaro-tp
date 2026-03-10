import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://patricknovak.github.io',
  base: '/kubaro-tp',
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ],
  output: 'static',
  vite: {
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
});
