import type { HTMLAttributes } from 'react';

export const textElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'div',
  'aside',
] as const;

export type TextElement = (typeof textElements)[number];

type TextStyleProps = {
  color?: string;
  padding?: string;
  margin?: string;
};

export type HeaderProps = Omit<HTMLAttributes<HTMLElement>, 'style'> &
  TextStyleProps & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
    component?: TextElement;
  };

export type BodyProps = Omit<HTMLAttributes<HTMLElement>, 'style'> &
  TextStyleProps & {
    variant?: 'lead' | 'body' | 'small' | 'caption';
    component?: TextElement;
    italic?: boolean;
  };
