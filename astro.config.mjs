// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Wiki Sistemas Operativos 1',
      description: 'Base de Conocimiento Técnica de SO1',
      defaultLocale: 'es',
      locales: {
        es: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: '📂 Unidad 1: Introducción',
          items: [{ autogenerate: { directory: 'unidad-1' } }],
        },
        {
          label: '📂 Unidad 2: Procesos y Control',
          items: [{ autogenerate: { directory: 'unidad-2' } }],
        },
      ],
    }),
  ],
});