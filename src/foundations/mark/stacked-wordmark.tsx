import type { CSSProperties } from 'react';
import StackedWordmarkSvg from '../../assets/svgs/stacked-wordmark.svg?react';
import type { StackedWordmarkProps } from './types';

export function StackedWordmark({
  textColor,
  width,
  padding,
  margin,
  ...props
}: StackedWordmarkProps) {
  const colorStyle: CSSProperties = {
    ...(textColor ? { ['--sigil-wordmark' as string]: textColor } : null),
    ...(width ? { width } : null),
    ...(padding ? { padding } : null),
    ...(margin ? { margin } : null),
  };

  return (
    <StackedWordmarkSvg
      role="img"
      aria-label="Emily Humphrey"
      style={colorStyle}
      {...props}
    />
  );
}
