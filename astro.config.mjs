// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hugo4294.github.io',
  base: '/wiki-sistemas-operativos-',

  integrations: [
    starlight({
      title: 'Wiki Sistemas Operativos 1',

      customCss: ['./src/assets/styles/custom.css'],

      sidebar: [
        {
          label: 'Unidad 1',
          items: [
            {
              autogenerate: {
                directory: 'unidad-1',
              },
            },
          ],
        },
        {
          label: 'Unidad 2',
          items: [
            {
              autogenerate: {
                directory: 'unidad-2',
              },
            },
          ],
        },
        {
          label: 'Unidad 3',
          items: [
            {
              autogenerate: {
                directory: 'unidad-3',
              },
            },
          ],
        },
      ],
    }),
  ],
});