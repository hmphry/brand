import type { CSSProperties } from 'react';
import WordmarkSvg from '../../assets/svgs/wordmark.svg?react';
import { layoutStyle } from './layout';
import { WORDMARK_HEIGHTS } from './sizes';
import type { WordmarkProps } from './types';

export function Wordmark({
  size,
  textColor,
  width,
  height,
  padding,
  margin,
  ...props
}: WordmarkProps) {
  const style: CSSProperties = {
    ...(textColor ? { ['--sigil-wordmark' as string]: textColor } : null),
    ...layoutStyle({ size, width, height, padding, margin }, WORDMARK_HEIGHTS),
  };

  return (
    <WordmarkSvg
      role="img"
      aria-label="Emily Humphrey"
      style={style}
      {...props}
    />
  );
}
