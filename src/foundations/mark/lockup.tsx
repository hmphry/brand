import type { CSSProperties } from 'react';
import styles from './lockup.module.css';
import { Sigil } from './sigil';
import {
  GAP_RATIO,
  lockupContentUnits,
  SIZE_HEIGHTS,
  STACKED_RATIO,
  WORDMARK_RATIO,
} from './sizes';
import { StackedWordmark } from './stacked-wordmark';
import type { LockupProps } from './types';
import { Wordmark } from './wordmark';

const round = (n: number) => Number(n.toFixed(4));

/**
 * Sigil height for the lockup. `height` wins, then `width` (the sigil is
 * sized so the whole lockup is that wide), then the `size` preset.
 */
function sigilSize({
  variant = 'normal',
  size = 'md',
  width,
  height,
  spacing,
}: Pick<LockupProps, 'variant' | 'size' | 'width' | 'height' | 'spacing'>) {
  if (height) {
    return height;
  }
  if (!width) {
    return SIZE_HEIGHTS[size];
  }
  const units = lockupContentUnits(variant);
  if (spacing === undefined) {
    return `calc(${width} / ${round(units + GAP_RATIO)})`;
  }
  const gap = typeof spacing === 'number' ? `${spacing}px` : spacing;
  return `calc((${width} - ${gap}) / ${round(units)})`;
}

export function Lockup({
  variant = 'normal',
  size = 'md',
  width,
  height,
  spacing,
  keyColor,
  backgroundColor,
  borderColor,
  textColor,
}: LockupProps) {
  const style = {
    '--sigil-size': sigilSize({ variant, size, width, height, spacing }),
    // With both set, height sizes the marks and width only sizes the wrapper.
    ...(width && height ? { width } : {}),
    gap: spacing ?? `calc(var(--sigil-size) * ${GAP_RATIO})`,
  } as CSSProperties;

  return (
    <div
      className={styles.lockup}
      role="img"
      aria-label="Emily Humphrey"
      style={style}
    >
      <Sigil
        aria-hidden
        className={styles.sigil}
        height="var(--sigil-size)"
        keyColor={keyColor}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
      {variant === 'stacked' ? (
        <StackedWordmark
          aria-hidden
          className={styles.stacked}
          height={`calc(var(--sigil-size) * ${STACKED_RATIO})`}
          textColor={textColor}
        />
      ) : (
        <Wordmark
          aria-hidden
          className={styles.single}
          height={`calc(var(--sigil-size) * ${WORDMARK_RATIO})`}
          textColor={textColor}
        />
      )}
    </div>
  );
}
