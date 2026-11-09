import {
  Article,
  Bookmark,
  Copy,
  Factory,
  Heart,
  House,
  NotePencil,
  Phone,
  UserRectangle,
} from '@phosphor-icons/react';
import type { ComponentType, SVGProps } from 'react';
import styles from './icon.module.css';
import type { IconName, IconProps } from './types';

const registry: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  about: UserRectangle,
  articles: Article,
  bookmark: Bookmark,
  contact: Phone,
  copy: Copy,
  essays: NotePencil,
  heart: Heart,
  home: House,
  projects: Factory,
};

export function Icon({
  name,
  size = 'md',
  width,
  height,
  color,
  className,
  ...props
}: IconProps) {
  const Glyph = registry[name];

  if (!Glyph) {
    return null;
  }

  const classes = [styles.icon, styles[size], className]
    .filter(Boolean)
    .join(' ');
  const labelled = props['aria-label'] || props['aria-labelledby'];

  return (
    <Glyph
      className={classes}
      style={{ width: width ?? height, height: height ?? width, color }}
      aria-hidden={labelled ? undefined : true}
      {...props}
    />
  );
}
