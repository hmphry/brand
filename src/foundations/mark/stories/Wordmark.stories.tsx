import type { Meta, StoryObj } from '@storybook/react';
import { Wordmark } from '../wordmark';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const meta = {
  title: 'Foundations/Wordmark',
  component: Wordmark,
  parameters: {
    controls: {
      matchers: {
        color: /^$/,
        date: /^$/,
      },
    },
  },
  args: {
    size: 'md',
    textColor: 'var(--theme-primary-main)',
  },
  argTypes: {
    size: { control: 'inline-radio', options: sizes },
    width: { control: 'text' },
    height: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    textColor: { control: 'text' },
  },
} satisfies Meta<typeof Wordmark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
      }}
    >
      {sizes.map((size) => (
        <Wordmark key={size} {...args} size={size} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const CustomWidth: Story = {
  args: { width: 320 },
};

export const CustomHeight: Story = {
  args: { height: '3rem' },
};

export const Spacing: Story = {
  args: { padding: 16, margin: 16 },
};
