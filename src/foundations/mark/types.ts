import type { SVGProps } from 'react';

type MarkProps = Omit<SVGProps<SVGSVGElement>, 'style'> & {
  width?: string;
  padding?: string;
  margin?: string;
};

export type SigilColorProps = {
  keyColor?: string;
  backgroundColor?: string;
  borderColor?: string;
};

export type WordmarkColorProps = {
  textColor?: string;
};

export type SigilProps = MarkProps & SigilColorProps;

export type WordmarkProps = MarkProps & WordmarkColorProps;

export type StackedWordmarkProps = WordmarkProps;

export type LockupProps = SigilColorProps &
  WordmarkColorProps & {
    variant?: 'normal' | 'stacked';
  };
