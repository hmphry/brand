import type { CSSProperties } from 'react';
import styles from './lockup.module.css';
import { Sigil } from './sigil';
import { SIZE_HEIGHTS } from './sizes';
import { StackedWordmark } from './stacked-wordmark';
import type { LockupProps } from './types';
import { Wordmark } from './wordmark';

export function Lockup({
  variant = 'normal',
  size = 'md',
  width,
  height,
  keyColor,
  backgroundColor,
  borderColor,
  textColor,
}: LockupProps) {
  const style = {
    '--sigil-size': height ?? SIZE_HEIGHTS[size],
    ...(width ? { width } : {}),
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
          textColor={textColor}
        />
      ) : (
        <Wordmark aria-hidden className={styles.single} textColor={textColor} />
      )}
    </div>
  );
}
