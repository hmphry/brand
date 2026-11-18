import type { Meta, StoryObj } from '@storybook/react';
import { ICONS } from '../../../primitives/icon';
import { NavItem } from '../nav-item';
import { Sidebar } from '../sidebar';
import styles from './sidebar-stories.module.css';

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
  render: () => (
    <Sidebar>
      <a href="#0" className={styles.link}>
        <NavItem title="Home" icon={ICONS.HOME} active />
      </a>
      <a href="#0" className={styles.link}>
        <NavItem title="Articles" icon={ICONS.ARTICLES} />
      </a>
      <a href="#0" className={styles.link}>
        <NavItem title="Writing" icon={ICONS.ESSAYS} />
      </a>
      <a href="#0" className={styles.link}>
        <NavItem title="Projects" icon={ICONS.PROJECTS} />
      </a>
      <a href="#0" className={styles.link}>
        <NavItem title="About" icon={ICONS.ABOUT} />
      </a>
      <a href="#0" className={styles.link}>
        <NavItem title="Contact" icon={ICONS.CONTACT} />
      </a>
    </Sidebar>
  ),
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
