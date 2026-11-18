import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ICONS, type IconName } from '../../../primitives/icon';
import { NavItem } from '../nav-item';
import { Sidebar } from '../sidebar';
import styles from './sidebar-stories.module.css';

const NAV_ITEMS: { title: string; icon: IconName }[] = [
  { title: 'Home', icon: ICONS.HOME },
  { title: 'Articles', icon: ICONS.ARTICLES },
  { title: 'Writing', icon: ICONS.ESSAYS },
  { title: 'Projects', icon: ICONS.PROJECTS },
  { title: 'About', icon: ICONS.ABOUT },
  { title: 'Contact', icon: ICONS.CONTACT },
];

function Navigation() {
  const [activeTitle, setActiveTitle] = useState('Home');

  return (
    <Sidebar brandHref={null}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.title}
          href={`#${item.title.toLowerCase()}`}
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
            setActiveTitle(item.title);
          }}
        >
          <NavItem
            title={item.title}
            icon={item.icon}
            active={item.title === activeTitle}
          />
        </a>
      ))}
    </Sidebar>
  );
}

const meta = {
  title: 'Patterns/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Navigation />,
};

export const NavItemAlone: Story = {
  render: () => (
    <a href="#0" className={styles.link}>
      <NavItem title="Home" icon={ICONS.HOME} />
    </a>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const NavItemActive: Story = {
  render: () => (
    <a href="#0" className={styles.link}>
      <NavItem title="Home" icon={ICONS.HOME} active />
    </a>
  ),
  parameters: {
    layout: 'centered',
  },
};
