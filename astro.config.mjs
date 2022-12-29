import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://papplo.github.io",
  integrations: [react()]
});
