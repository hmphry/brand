import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary';
};

export function Button({
  variant = 'default',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    variant === 'primary' ? styles.primary : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button type={type} className={classes} {...props} />;
}
