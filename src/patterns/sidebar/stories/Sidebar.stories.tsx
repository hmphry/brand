import type { Meta, StoryObj } from '@storybook/react';
import { ICONS } from '../../../primitives/icon';
import { NavItem } from '../nav-item';
import { Sidebar } from '../sidebar';

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
      <NavItem title="Home" icon={ICONS.HOME} active />
      <NavItem title="Articles" icon={ICONS.ARTICLES} />
      <NavItem title="Writing" icon={ICONS.ESSAYS} />
      <NavItem title="Projects" icon={ICONS.PROJECTS} />
      <NavItem title="About" icon={ICONS.ABOUT} />
      <NavItem title="Contact" icon={ICONS.CONTACT} />
    </Sidebar>
  ),
};

export const NavItemAlone: Story = {
  render: () => <NavItem title="Home" icon={ICONS.HOME} />,
  parameters: {
    layout: 'centered',
  },
};

export const NavItemActive: Story = {
  render: () => <NavItem title="Home" icon={ICONS.HOME} active />,
  parameters: {
    layout: 'centered',
  },
};
