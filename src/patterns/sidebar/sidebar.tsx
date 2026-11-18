import type { HTMLAttributes, ReactNode } from 'react';
import { Sigil } from '../../foundations/mark';
import styles from './sidebar.module.css';

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  /** Destination for the brand mark. Defaults to "/". Pass null for no link. */
  brandHref?: string | null;
};

export function Sidebar({
  children,
  className,
  brandHref = '/',
  ...props
}: SidebarProps) {
  const classes = [styles.sidebar, className].filter(Boolean).join(' ');
  const sigil = <Sigil size="xs" className={styles.sigil} aria-hidden />;

  return (
    <aside className={classes} {...props}>
      <div className={styles.brand}>
        {brandHref ? (
          <a href={brandHref} className={styles.sigilLink} aria-label="Home">
            {sigil}
          </a>
        ) : (
          sigil
        )}
        <div className={styles.divider} role="presentation" />
      </div>
      <nav className={styles.nav} aria-label="Primary">
        {children}
      </nav>
    </aside>
  );
}
