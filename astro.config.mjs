// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Wiki Sistemas Operativos 1',
      customCss: ['./src/assets/styles/custom.css'],
      sidebar: [
        {
          label: 'Unidad 1',
          items: [{ autogenerate: { directory: 'unidad-1' } }],
        },
        {
          label: 'Unidad 2',
          items: [{ autogenerate: { directory: 'unidad-2' } }],
        },
      ],
    }),
  ],
});