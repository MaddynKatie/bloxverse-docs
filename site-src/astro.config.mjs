import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://maddynkatie.github.io',
  base: '/bloxverse/create',
  integrations: [
    starlight({
      title: 'BloxVerse Docs',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/MaddynKatie/bloxverse-docs',
      },
      sidebar: [
        {
          label: 'Get Started',
          items: [
            { label: 'Introduction', link: 'guides/intro' },
            { label: 'Your First Script', link: 'guides/first-script' },
            { label: 'Scripts and VMs', link: 'guides/scripts-and-vms' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Instances', link: 'guides/instances' },
            { label: 'Properties', link: 'guides/properties' },
            { label: 'Client and Server', link: 'guides/client-server' },
            { label: 'Events', link: 'guides/events' },
            { label: 'Tasks', link: 'guides/tasks' },
            { label: 'Remote Events', link: 'guides/remote-events' },
            { label: 'Remote Functions', link: 'guides/remote-functions' },
            { label: 'Bindable Events', link: 'guides/bindable-events' },
            { label: 'Attributes', link: 'guides/attributes' },
            { label: 'Values', link: 'guides/values' },
            { label: 'Sandbox Limits', link: 'guides/sandbox-limits' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'API Reference', link: 'reference' },
            {
              label: 'Globals',
              autogenerate: { directory: 'reference/globals' },
            },
            {
              label: 'Classes',
              autogenerate: { directory: 'reference/classes' },
            },
            {
              label: 'Data Types',
              autogenerate: { directory: 'reference/datatypes' },
            },
          ],
        },
        { label: 'Meta', items: [{ label: 'Contributing', link: 'contributing' }] },
      ],
    }),
  ],
});
