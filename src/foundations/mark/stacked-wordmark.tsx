import type { CSSProperties } from 'react';
import StackedWordmarkSvg from '../../assets/svgs/stacked-wordmark.svg?react';
import { layoutStyle } from './layout';
import { STACKED_HEIGHTS } from './sizes';
import type { StackedWordmarkProps } from './types';

export function StackedWordmark({
  size,
  textColor,
  width,
  height,
  padding,
  margin,
  ...props
}: StackedWordmarkProps) {
  const style: CSSProperties = {
    ...(textColor ? { ['--sigil-wordmark' as string]: textColor } : null),
    ...layoutStyle({ size, width, height, padding, margin }, STACKED_HEIGHTS),
  };

  return (
    <StackedWordmarkSvg
      role="img"
      aria-label="Emily Humphrey"
      style={style}
      {...props}
    />
  );
}
