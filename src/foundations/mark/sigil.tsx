import type { CSSProperties } from 'react';
import SigilMark from '../../assets/svgs/sigil.svg?react';
import { SIZE_HEIGHTS } from './sizes';
import type { SigilProps } from './types';

export function Sigil({
  size = 'md',
  keyColor,
  backgroundColor,
  borderColor,
  width,
  height,
  padding,
  margin,
  ...props
}: SigilProps) {
  // Height comes from `height`, else from `size`. A lone `width` takes over
  // sizing, so height is left to the aspect ratio instead of the size preset.
  const resolvedHeight =
    height ?? (width === undefined ? SIZE_HEIGHTS[size] : undefined);

  const style: CSSProperties = {
    ...(keyColor ? { ['--sigil-key' as string]: keyColor } : null),
    ...(backgroundColor
      ? { ['--sigil-fill' as string]: backgroundColor }
      : null),
    ...(borderColor ? { ['--sigil-border' as string]: borderColor } : null),
    ...(width !== undefined ? { width } : null),
    ...(resolvedHeight !== undefined ? { height: resolvedHeight } : null),
    ...(padding !== undefined ? { padding } : null),
    ...(margin !== undefined ? { margin } : null),
  };

  return <SigilMark style={style} {...props} />;
}
