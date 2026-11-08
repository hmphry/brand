import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';
import styles from './foundations.module.css';
import { useTokenValue } from './useTokenValue';

const HEADERS = [
  {
    role: 'H1',
    sizeToken: '--font-size-h1',
    lineToken: '--line-height-h1',
    sample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    role: 'H2',
    sizeToken: '--font-size-h2',
    lineToken: '--line-height-h2',
    sample: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    role: 'H3',
    sizeToken: '--font-size-h3',
    lineToken: '--line-height-h3',
    sample: 'Ut enim ad minim veniam, quis nostrud.',
  },
  {
    role: 'H4',
    sizeToken: '--font-size-h4',
    lineToken: '--line-height-h4',
    sample: 'Duis aute irure dolor in reprehenderit.',
  },
] as const;

const BODY = [
  {
    role: 'Lead',
    sizeToken: '--font-size-lead',
    lineToken: '--line-height-lead',
    italic: false,
    sample:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    role: 'Body',
    sizeToken: '--font-size-body',
    lineToken: '--line-height-body',
    italic: false,
    sample:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    role: 'Italic',
    sizeToken: '--font-size-body',
    lineToken: '--line-height-body',
    italic: true,
    sample:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    role: 'Small',
    sizeToken: '--font-size-small',
    lineToken: '--line-height-small',
    italic: false,
    sample: 'Excepteur sint occaecat cupidatat non proident.',
  },
  {
    role: 'Caption',
    sizeToken: '--font-size-caption',
    lineToken: '--line-height-caption',
    italic: false,
    sample: 'Sunt in culpa qui officia deserunt mollit.',
  },
] as const;

const MONO = [
  {
    role: 'Code',
    sizeToken: '--font-size-small',
    lineToken: '--line-height-small',
    sample: '--font-size-body: 1rem;',
  },
  {
    role: 'Mono caption',
    sizeToken: '--font-size-caption',
    lineToken: '--line-height-caption',
    sample: '#0f5c4c',
  },
] as const;

function Specimen({
  role,
  fontLabel,
  sizeToken,
  lineToken,
  sample,
  style,
}: {
  role: string;
  fontLabel: string;
  sizeToken: string;
  lineToken: string;
  sample: string;
  style: CSSProperties;
}) {
  const size = useTokenValue(sizeToken);
  const lineHeight = useTokenValue(lineToken);

  return (
    <div className={styles.specimen}>
      <div className={styles.meta}>
        <span className={styles.name}>{role}</span>
        <span className={styles.value}>
          {fontLabel} · {size} / {lineHeight}
        </span>
      </div>
      <p className={styles.typeSample} style={style}>
        {sample}
      </p>
    </div>
  );
}

function TypographyScale() {
  const headerFont = useTokenValue('--font-header');
  const bodyFont = useTokenValue('--font-body');
  const monoFont = useTokenValue('--font-mono');

  return (
    <div className={styles.root}>
      <h1 className={styles.title} style={{ fontFamily: 'var(--font-header)' }}>
        Typography
      </h1>
      <p className={styles.subtitle}>
        Lora for headers, Quicksand for body, DM Mono for code and numeric
        detail. Major third scale from 1rem.
      </p>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Headers · {headerFont}</p>
        {HEADERS.map((step) => (
          <Specimen
            key={step.role}
            role={step.role}
            fontLabel="Lora"
            sizeToken={step.sizeToken}
            lineToken={step.lineToken}
            sample={step.sample}
            style={{
              fontFamily: 'var(--font-header)',
              fontSize: `var(${step.sizeToken})`,
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: `var(${step.lineToken})`,
            }}
          />
        ))}
      </div>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Body · {bodyFont}</p>
        {BODY.map((step) => (
          <Specimen
            key={step.role}
            role={step.role}
            fontLabel="Quicksand"
            sizeToken={step.sizeToken}
            lineToken={step.lineToken}
            sample={step.sample}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: `var(${step.sizeToken})`,
              fontStyle: step.italic ? 'italic' : 'normal',
              lineHeight: `var(${step.lineToken})`,
            }}
          />
        ))}
      </div>

      <div className={styles.stack}>
        <p className={styles.sectionLabel}>Mono · {monoFont}</p>
        {MONO.map((step) => (
          <Specimen
            key={step.role}
            role={step.role}
            fontLabel="DM Mono"
            sizeToken={step.sizeToken}
            lineToken={step.lineToken}
            sample={step.sample}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: `var(${step.sizeToken})`,
              lineHeight: `var(${step.lineToken})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => <TypographyScale />,
};
