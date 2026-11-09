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
      <NavItem title="Home" icon={ICONS.HEART} active />
      <NavItem title="Articles" icon={ICONS.BOOKMARK} />
      <NavItem title="Writing" icon={ICONS.COPY} />
      <NavItem title="Projects" icon={ICONS.BOOKMARK} />
      <NavItem title="About" icon={ICONS.HEART} />
      <NavItem title="Contact" icon={ICONS.COPY} />
    </Sidebar>
  ),
};

export const NavItemAlone: Story = {
  render: () => <NavItem title="Home" icon={ICONS.HEART} />,
  parameters: {
    layout: 'centered',
  },
};

export const NavItemActive: Story = {
  render: () => <NavItem title="Home" icon={ICONS.HEART} active />,
  parameters: {
    layout: 'centered',
  },
};
