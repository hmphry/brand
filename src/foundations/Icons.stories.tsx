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
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType, SVGProps } from 'react';
import styles from './foundations.module.css';
import icon from './icons.module.css';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Curated icon set. Add @phosphor-icons/react components here, in alphabetical order. */
const icons: { name: string; Icon: IconComponent }[] = [
  { name: 'About', Icon: UserRectangle },
  { name: 'Articles', Icon: Article },
  { name: 'Bookmark', Icon: Bookmark },
  { name: 'Contact', Icon: Phone },
  { name: 'Copy', Icon: Copy },
  { name: 'Essays', Icon: NotePencil },
  { name: 'Heart', Icon: Heart },
  { name: 'Home', Icon: House },
  { name: 'Projects', Icon: Factory },
];

function IconSheet() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Icons</h1>
      <p className={styles.subtitle}>
        Icon set from Phosphor Icons. Imported individually by name.
      </p>
      <div className={icon.grid}>
        {icons.map(({ name, Icon }) => (
          <div key={name} className={icon.tile}>
            <Icon aria-hidden />
            <span className={icon.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconSet: Story = {
  render: () => <IconSheet />,
};
