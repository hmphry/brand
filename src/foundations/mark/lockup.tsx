import type { CSSProperties } from 'react';
import styles from './lockup.module.css';
import { Sigil } from './sigil';
import { SIZE_HEIGHTS, STACKED_RATIO, WORDMARK_RATIO } from './sizes';
import { StackedWordmark } from './stacked-wordmark';
import type { LockupProps } from './types';
import { Wordmark } from './wordmark';

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
    '--sigil-size': height ?? SIZE_HEIGHTS[size],
    ...(width ? { width } : {}),
    gap: spacing,
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
