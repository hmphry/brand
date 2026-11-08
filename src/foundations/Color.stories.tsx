import type { Meta, StoryObj } from '@storybook/react';
import styles from './foundations.module.css';

const SHADES = [
  'lightest',
  'lighter',
  'light',
  'main',
  'dark',
  'darker',
  'darkest',
  'companion',
  'accent',
] as const;

const GROUPS = [
  {
    label: 'Main',
    colors: [
      { name: 'Ballerina', slug: 'ballerina' },
      { name: 'Celeste', slug: 'celeste' },
      { name: 'Jade', slug: 'jade' },
      { name: 'Primrose', slug: 'primrose' },
    ],
  },
  {
    label: 'Alternative',
    colors: [
      { name: 'Peony', slug: 'peony' },
      { name: 'Camellia', slug: 'camellia' },
      { name: 'Wisteria', slug: 'wisteria' },
      { name: 'Ondine', slug: 'ondine' },
      { name: 'Chérie', slug: 'cherie' },
    ],
  },
  {
    label: 'System',
    colors: [
      { name: 'Pearl', slug: 'pearl' },
      { name: 'Velvet', slug: 'velvet' },
      { name: 'Cashmere', slug: 'cashmere' },
    ],
  },
] as const;

function tokenValue(token: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
}

function Swatch({ token, label }: { token: string; label: string }) {
  const value = tokenValue(token);
  const copy = () => {
    void navigator.clipboard.writeText(token);
  };

  return (
    <button
      type="button"
      className={styles.swatchItem}
      title={`${token} · ${value}`}
      onClick={copy}
    >
      <span className={styles.swatch} style={{ background: `var(${token})` }} />
      <span className={styles.swatchLabel}>{label}</span>
    </button>
  );
}

function PaletteGroup({ name, slug }: { name: string; slug: string }) {
  const shades = SHADES.filter((shade) =>
    tokenValue(`--color-${slug}-${shade}`),
  );

  return (
    <section className={styles.paletteGroup}>
      <div className={styles.paletteHeader}>
        <h2 className={styles.paletteName}>{name}</h2>
        <span className={styles.paletteSlug}>{slug}</span>
      </div>
      <div className={styles.swatchGrid}>
        {shades.map((shade) => (
          <Swatch
            key={shade}
            token={`--color-${slug}-${shade}`}
            label={shade}
          />
        ))}
      </div>
    </section>
  );
}

function ColorPalette({
  groups,
}: {
  groups: readonly (typeof GROUPS)[number][];
}) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Colors</h1>
      <p className={styles.subtitle}>
        Brand palette in OKLCH, grouped by role. Click a swatch to copy its CSS
        token.
      </p>
      {groups.map((group) => (
        <section key={group.label}>
          <h2 className={styles.sectionLabel}>{group.label}</h2>
          {group.colors.map((color) => (
            <PaletteGroup
              key={color.slug}
              name={color.name}
              slug={color.slug}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

const group = (label: (typeof GROUPS)[number]['label']) =>
  GROUPS.filter((item) => item.label === label);

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => <ColorPalette groups={GROUPS} />,
};

export const Main: Story = {
  render: () => <ColorPalette groups={group('Main')} />,
};

export const Alternative: Story = {
  render: () => <ColorPalette groups={group('Alternative')} />,
};

export const System: Story = {
  render: () => <ColorPalette groups={group('System')} />,
};
