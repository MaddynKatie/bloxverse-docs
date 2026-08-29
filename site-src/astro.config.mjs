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
      editLink: {
        baseUrl: 'https://github.com/MaddynKatie/bloxverse-docs/edit/main/content/',
      },
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
            { label: 'Debris', link: 'reference/globals/debris' },
            { label: 'Enum', link: 'reference/globals/enum' },
            { label: 'game', link: 'reference/globals/game' },
            { label: 'Instance.new', link: 'reference/globals/instance-new' },
            { label: 'Legacy Globals', link: 'reference/globals/legacy' },
            { label: 'Output', link: 'reference/globals/output' },
            { label: 'RunService', link: 'reference/globals/runservice' },
            { label: 'script', link: 'reference/globals/script' },
            { label: 'task', link: 'reference/globals/task' },
            { label: 'TweenInfo', link: 'reference/globals/tween-info' },
            { label: 'TweenService', link: 'reference/globals/tween-service' },
            { label: 'UserInputService', link: 'reference/globals/user-input-service' },
            { label: 'workspace', link: 'reference/globals/workspace' },
          ],
        },
        {
          label: 'Classes',
          autogenerate: { directory: 'reference/classes' },
        },
        {
          label: 'Data Types',
          autogenerate: { directory: 'reference/datatypes' },
        },
        { label: 'Meta', items: [{ label: 'Contributing', link: 'contributing' }] },
      ],
    }),
  ],
});
