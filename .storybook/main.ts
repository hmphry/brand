import type { StorybookConfig } from 'storybook-react-rsbuild';

const mcpEnabled = process.env.STORYBOOK_MCP === '1';

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
  addons: [
    '@storybook/addon-docs',
    ...(mcpEnabled ? ['@storybook/addon-mcp' as const] : []),
  ],
  features: {
    changeDetection: false,
    ...(mcpEnabled ? { componentsManifest: true } : {}),
  },
};

export default config;
