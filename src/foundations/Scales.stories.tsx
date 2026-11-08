import type { Meta, StoryObj } from '@storybook/react';
import styles from './foundations.module.css';
import { useTokenValue } from './useTokenValue';
import zStyles from './zindex.module.css';

const SPACES = [
  '--space-1',
  '--space-2',
  '--space-3',
  '--space-4',
  '--space-5',
  '--space-6',
] as const;

const RADII = ['--radius-sm', '--radius-md', '--radius-lg'] as const;

const LAYERS = [
  '--z-base',
  '--z-raised',
  '--z-sticky',
  '--z-overlay',
  '--z-modal',
  '--z-popover',
  '--z-toast',
  '--z-tooltip',
] as const;

function SpaceRow({ token }: { token: (typeof SPACES)[number] }) {
  const value = useTokenValue(token);

  return (
    <div className={styles.spaceRow}>
      <span className={styles.name}>{token}</span>
      <div className={styles.spaceBar} style={{ width: `var(${token})` }} />
      <span className={styles.value}>{value}</span>
    </div>
  );
}

function RadiusSample({ token }: { token: (typeof RADII)[number] }) {
  const value = useTokenValue(token);

  return (
    <div className={styles.item}>
      <div
        className={styles.radiusBox}
        style={{ borderRadius: `var(${token})` }}
      >
        Aa
      </div>
      <div className={styles.meta}>
        <span className={styles.name}>{token}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}

function Layer({ token }: { token: (typeof LAYERS)[number] }) {
  const value = useTokenValue(token);

  return (
    <div
      className={zStyles.layer}
      style={{ ['--layer-z' as string]: `var(${token})` }}
    >
      <span className={zStyles.layerName}>{token}</span>
      <span className={zStyles.layerValue}>{value}</span>
    </div>
  );
}

function Scales() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Scales</h1>
      <p className={styles.subtitle}>
        Spacing, corner radius, and stacking order from foundations tokens.
      </p>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Space</p>
        <div className={`${styles.grid} ${styles.gridSpace}`}>
          {SPACES.map((token) => (
            <SpaceRow key={token} token={token} />
          ))}
        </div>
      </div>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Radius</p>
        <div className={`${styles.grid} ${styles.gridRadius}`}>
          {RADII.map((token) => (
            <RadiusSample key={token} token={token} />
          ))}
        </div>
      </div>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Z-index</p>
        <div className={zStyles.stack}>
          {LAYERS.map((token) => (
            <Layer key={token} token={token} />
          ))}
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: 'Foundations/Scales',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => <Scales />,
};
