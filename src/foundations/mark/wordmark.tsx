import type { CSSProperties } from 'react';
import WordmarkSvg from '../../assets/svgs/wordmark.svg?react';
import type { WordmarkProps } from './types';

export function Wordmark({
  textColor,
  width,
  padding,
  margin,
  ...props
}: WordmarkProps) {
  const colorStyle: CSSProperties = {
    ...(textColor ? { ['--sigil-wordmark' as string]: textColor } : null),
    ...(width ? { width } : null),
    ...(padding ? { padding } : null),
    ...(margin ? { margin } : null),
  };

  return (
    <WordmarkSvg
      role="img"
      aria-label="Emily Humphrey"
      style={colorStyle}
      {...props}
    />
  );
}
