import type { LockupSize } from './types';

/** Sigil heights in rem. The wordmark presets scale from these. */
const SIGIL_REM: Record<LockupSize, number> = {
  xs: 2.5,
  sm: 3.5,
  md: 5,
  lg: 7,
  xl: 9,
  '2xl': 12,
};

/** Wordmark height as a fraction of the sigil height in a lockup. */
export const WORDMARK_RATIO = 0.38;

/** Stacked wordmark height as a fraction of the sigil height in a lockup. */
export const STACKED_RATIO = 0.7;

function scale(ratio: number): Record<LockupSize, string> {
  const heights = {} as Record<LockupSize, string>;
  for (const key of Object.keys(SIGIL_REM) as LockupSize[]) {
    heights[key] = `${Number((SIGIL_REM[key] * ratio).toFixed(2))}rem`;
  }
  return heights;
}

export const SIZE_HEIGHTS = scale(1);
export const WORDMARK_HEIGHTS = scale(WORDMARK_RATIO);
export const STACKED_HEIGHTS = scale(STACKED_RATIO);
