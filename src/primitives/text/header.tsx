import styles from './header.module.css';
import type { HeaderProps } from './types';

export function Header({
  variant = 'h1',
  component,
  color,
  padding,
  margin,
  className,
  children,
  ...props
}: HeaderProps) {
  const Tag = component ?? variant;
  const classes = [styles.header, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={{ color, padding, margin }} {...props}>
      {children}
    </Tag>
  );
}
