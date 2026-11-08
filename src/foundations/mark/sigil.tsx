import type { CSSProperties } from 'react';
import SigilMark from '../../assets/svgs/sigil.svg?react';
import type { SigilProps } from './types';

export function Sigil({
  keyColor,
  backgroundColor,
  borderColor,
  width,
  padding,
  margin,
  ...props
}: SigilProps) {
  const colorStyle: CSSProperties = {
    ...(keyColor ? { ['--sigil-key' as string]: keyColor } : null),
    ...(backgroundColor
      ? { ['--sigil-fill' as string]: backgroundColor }
      : null),
    ...(borderColor ? { ['--sigil-border' as string]: borderColor } : null),
    ...(width ? { width } : null),
    ...(padding ? { padding } : null),
    ...(margin ? { margin } : null),
  };

  return <SigilMark style={colorStyle} {...props} />;
}
