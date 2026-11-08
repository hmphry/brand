import styles from './body.module.css';
import type { BodyProps } from './types';

const variantClass = {
  lead: styles.lead,
  body: styles.copy,
  small: styles.small,
  caption: styles.caption,
} as const;

export function Body({
  variant = 'body',
  component = 'p',
  italic = false,
  color,
  padding,
  margin,
  className,
  children,
  ...props
}: BodyProps) {
  const Tag = component;
  const classes = [
    styles.body,
    variantClass[variant],
    italic ? styles.italic : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={{ color, padding, margin }} {...props}>
      {children}
    </Tag>
  );
}
