import type { CSSProperties } from 'react';
import type { MarkLayoutProps, MarkSize } from './types';

/**
 * Resolves size, width, height, padding, and margin into inline styles.
 *
 * Height comes from `height`, else from `size`. A lone `width` takes over
 * sizing, so height is left to the aspect ratio instead of the size preset.
 */
export function layoutStyle(
  { size = 'md', width, height, padding, margin }: MarkLayoutProps,
  heights: Record<MarkSize, string>,
): CSSProperties {
  const resolvedHeight =
    height ?? (width === undefined ? heights[size] : undefined);

  return { width, height: resolvedHeight, padding, margin };
}
