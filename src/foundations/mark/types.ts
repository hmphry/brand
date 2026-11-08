import type { SVGProps } from 'react';

export type LockupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type SigilSize = LockupSize;

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

export type SigilProps = Omit<
  SVGProps<SVGSVGElement>,
  'style' | 'width' | 'height'
> &
  SigilColorProps & {
    /** Preset height. Defaults to `'md'`. Overridden by `width` or `height`. */
    size?: SigilSize;
    /** Number means px. If set without `height`, height follows the aspect ratio. */
    width?: string | number;
    /** Number means px. Overrides `size`. Width follows the aspect ratio unless set. */
    height?: string | number;
    /** Number means px. */
    padding?: string | number;
    /** Number means px. */
    margin?: string | number;
  };

export type WordmarkProps = MarkProps & WordmarkColorProps;

export type StackedWordmarkProps = WordmarkProps;

export type LockupProps = SigilColorProps &
  WordmarkColorProps & {
    variant?: 'normal' | 'stacked';
    /** Preset sigil height. Defaults to `'md'`. */
    size?: LockupSize;
    /** Overrides the size preset. Any CSS length, e.g. `"12rem"`. */
    width?: string;
    /** Overrides the size preset. Any CSS length, e.g. `"6rem"`. */
    height?: string;
  };
