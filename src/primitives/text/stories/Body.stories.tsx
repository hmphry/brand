import type { Meta, StoryObj } from '@storybook/react';
import { Body } from '../body';
import { textElements } from '../types';

const sample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const meta = {
  title: 'Primitives/Body',
  component: Body,
  args: {
    children: sample,
    variant: 'body',
    italic: false,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['lead', 'body', 'small', 'caption'],
    },
    component: {
      control: 'select',
      options: textElements,
    },
    italic: { control: 'boolean' },
    color: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
  },
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Lead: Story = { args: { variant: 'lead' } };
export const Default: Story = { args: { variant: 'body' } };
export const Small: Story = { args: { variant: 'small' } };
export const Caption: Story = { args: { variant: 'caption' } };

export const Italic: Story = {
  args: {
    variant: 'body',
    italic: true,
  },
};
