// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tuebingen-tabu.alexanderhodes.de',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
