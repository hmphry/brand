import type { HTMLAttributes, ReactNode } from 'react';
import { Sigil } from '../../foundations/mark';
import styles from './sidebar.module.css';

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export function Sidebar({ children, className, ...props }: SidebarProps) {
  const classes = [styles.sidebar, className].filter(Boolean).join(' ');

  return (
    <aside className={classes} {...props}>
      <div className={styles.brand}>
        <Sigil size="xs" className={styles.sigil} aria-hidden />
        <div className={styles.divider} role="presentation" />
      </div>
      <nav className={styles.nav} aria-label="Primary">
        {children}
      </nav>
    </aside>
  );
}
