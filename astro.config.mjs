// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexanderhodes.github.io',
  base: '/tuebingen-tabu',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
