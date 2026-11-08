import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon';
import { ICONS } from '../options';
import { iconSizes } from '../types';

const meta = {
  title: 'Primitives/Icon',
  component: Icon,
  args: {
    name: ICONS.HEART,
    size: 'md',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICONS),
    },
    size: {
      control: 'inline-radio',
      options: iconSizes,
    },
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'text' },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {iconSizes.map((size) => (
        <Icon key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {Object.values(ICONS).map((name) => (
        <Icon key={name} {...args} name={name} />
      ))}
    </div>
  ),
};

export const CustomColor: Story = {
  args: { color: 'var(--color-velvet-main)', size: 'xl' },
};

export const CustomDimensions: Story = {
  args: { width: '48px', height: '32px' },
};
