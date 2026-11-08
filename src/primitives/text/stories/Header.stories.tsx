import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../header';
import { textElements } from '../types';

const meta = {
  title: 'Primitives/Header',
  component: Header,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    variant: 'h1',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    component: {
      control: 'select',
      options: textElements,
    },
    color: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = { args: { variant: 'h1' } };
export const H2: Story = { args: { variant: 'h2' } };
export const H3: Story = { args: { variant: 'h3' } };
export const H4: Story = { args: { variant: 'h4' } };

export const AsParagraph: Story = {
  args: {
    variant: 'h2',
    component: 'p',
  },
};
