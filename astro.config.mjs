import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://sergash089.github.io',
  base: '/sergash089/',
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});
