import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hoop-central.pages.dev',
  build: {
    format: 'directory'
  }
});
