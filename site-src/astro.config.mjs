import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://maddynkatie.github.io',
  base: '/bloxverse/create',
  integrations: [
    starlight({
      title: 'BloxVerse Docs',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/bloxverse.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/MaddynKatie/bloxverse-docs/edit/main/content/',
      },
      social: {
        github: 'https://github.com/MaddynKatie/bloxverse-docs',
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Classes',
          autogenerate: { directory: 'reference/classes' },
        },
        {
          label: 'Datatypes',
          autogenerate: { directory: 'reference/datatypes' },
        },
        {
          label: 'Globals',
          autogenerate: { directory: 'reference/globals' },
        },
        { label: 'Contributing', link: 'contributing' },
      ],
    }),
  ],
});
