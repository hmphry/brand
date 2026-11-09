import type { HTMLAttributes } from 'react';
import type { IconName } from '../../primitives/icon';
import { Icon } from '../../primitives/icon';
import styles from './nav-item.module.css';

export type NavItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  title: string;
  icon: IconName;
  active?: boolean;
};

export function NavItem({
  title,
  icon,
  active = false,
  className,
  ...props
}: NavItemProps) {
  const classes = [styles.item, active ? styles.active : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      <Icon name={icon} size="md" className={styles.icon} aria-hidden />
      <span className={styles.label}>{title}</span>
    </div>
  );
}
