import styles from './lockup.module.css';
import { Sigil } from './sigil';
import { StackedWordmark } from './stacked-wordmark';
import type { LockupProps } from './types';
import { Wordmark } from './wordmark';

export function Lockup({
  variant = 'normal',
  keyColor,
  backgroundColor,
  borderColor,
  textColor,
}: LockupProps) {
  return (
    <div className={styles.lockup} role="img" aria-label="Emily Humphrey">
      <Sigil
        aria-hidden
        className={styles.sigil}
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
