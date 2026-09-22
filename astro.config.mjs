import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hugo4294.github.io',
  base: '/wiki-sistemas-operativos-',

  integrations: [
    starlight({
      title: 'Wiki Sistemas Operativos',
    }),
  ],
});