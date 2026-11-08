import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  framework: {
    name: 'storybook-react-rsbuild',
    options: {
      builder: {
        lazyCompilation: false,
      },
    },
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-mcp'],
  features: {
    changeDetection: false,
    // Generates manifests/components.json (and docs.json when docs exist)
    // during `storybook dev` and `storybook build`. The addon's /mcp HTTP
    // endpoint is only attached to the dev server.
    componentsManifest: true,
  },
};

export default config;
