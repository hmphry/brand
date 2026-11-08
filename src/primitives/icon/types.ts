import type { SVGProps } from 'react';
import type { ICONS } from './options';

export type IconName = (typeof ICONS)[keyof typeof ICONS];

export const iconSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type IconSize = (typeof iconSizes)[number];

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  'style' | 'color' | 'width' | 'height' | 'name'
> & {
  name: IconName;
  size?: IconSize;
  width?: string;
  height?: string;
  color?: string;
};
