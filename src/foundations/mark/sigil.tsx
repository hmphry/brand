import type { CSSProperties } from 'react';
import SigilMark from '../../assets/svgs/sigil.svg?react';
import { layoutStyle } from './layout';
import { SIZE_HEIGHTS } from './sizes';
import type { SigilProps } from './types';

export function Sigil({
  size,
  keyColor,
  backgroundColor,
  borderColor,
  width,
  height,
  padding,
  margin,
  ...props
}: SigilProps) {
  const style: CSSProperties = {
    ...(keyColor ? { ['--sigil-key' as string]: keyColor } : null),
    ...(backgroundColor
      ? { ['--sigil-fill' as string]: backgroundColor }
      : null),
    ...(borderColor ? { ['--sigil-border' as string]: borderColor } : null),
    ...layoutStyle({ size, width, height, padding, margin }, SIZE_HEIGHTS),
  };

  return <SigilMark style={style} {...props} />;
}
