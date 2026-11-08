import type { Meta, StoryObj } from '@storybook/react';
import { Sigil } from '../sigil';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const meta = {
  title: 'Foundations/Sigil',
  component: Sigil,
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
    keyColor: 'var(--theme-primary-main)',
    backgroundColor: 'transparent',
    borderColor: 'var(--theme-primary-main)',
  },
  argTypes: {
    size: { control: 'inline-radio', options: sizes },
    width: { control: 'text' },
    height: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    keyColor: { control: 'text' },
    backgroundColor: { control: 'text' },
    borderColor: { control: 'text' },
  },
} satisfies Meta<typeof Sigil>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      {sizes.map((size) => (
        <Sigil key={size} {...args} size={size} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const CustomWidth: Story = {
  args: { width: 120 },
};

export const CustomHeight: Story = {
  args: { height: '10rem' },
};

export const Spacing: Story = {
  args: {
    padding: 16,
    margin: 16,
    backgroundColor: 'var(--theme-primary-lighter, #eee)',
  },
};
