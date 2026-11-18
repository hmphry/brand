import type { Preview } from '@storybook/react';
import '../src/assets/styles/reset.css';
import '../src/assets/styles/fonts.css';
import '../src/assets/styles/colors.css';
import '../src/assets/styles/surface.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    a11y: {
      // Violations fail the test-runner (test-storybook) and show as errors in CI.
      test: 'error',
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Logo', 'Colors', 'Icons', 'Scales', 'Typography'],
          'Primitives',
          'Patterns',
        ],
      },
    },
  },
};

export default preview;
