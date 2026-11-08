import type { Meta, StoryObj } from '@storybook/react';
import { StackedWordmark } from '../stacked-wordmark';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const meta = {
  title: 'Foundations/Stacked Wordmark',
  component: StackedWordmark,
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
} satisfies Meta<typeof StackedWordmark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      {sizes.map((size) => (
        <StackedWordmark key={size} {...args} size={size} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const CustomWidth: Story = {
  args: { width: 200 },
};

export const CustomHeight: Story = {
  args: { height: '6rem' },
};

export const Spacing: Story = {
  args: { padding: 16, margin: 16 },
};
