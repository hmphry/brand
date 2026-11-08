import type { Meta, StoryObj } from '@storybook/react';
import { Lockup } from '../lockup';
import { StackedWordmark } from '../stacked-wordmark';
import { Wordmark } from '../wordmark';

const meta = {
  title: 'Foundations/Logo',
  component: Lockup,
  parameters: {
    controls: {
      matchers: {
        color: /^$/,
        date: /^$/,
      },
    },
  },
  args: {
    variant: 'normal',
    size: 'md',
    keyColor: 'var(--theme-primary-main)',
    backgroundColor: 'transparent',
    borderColor: 'var(--theme-primary-main)',
    textColor: 'var(--theme-primary-main)',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['normal', 'stacked'],
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    keyColor: { control: 'text' },
    backgroundColor: { control: 'text' },
    borderColor: { control: 'text' },
    textColor: { control: 'text' },
  },
} satisfies Meta<typeof Lockup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'stacked',
  },
};

export const StackedLockup: Story = {
  name: 'Stacked',
  args: {
    variant: 'stacked',
  },
};

export const SingleWordmark: Story = {
  name: 'Wordmark',
  render: () => <Wordmark width="16rem" />,
  parameters: { controls: { disable: true } },
};

export const StackedWordmarkStory: Story = {
  name: 'Stacked wordmark',
  render: () => <StackedWordmark width="10rem" />,
  parameters: { controls: { disable: true } },
};
