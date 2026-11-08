# Icon

Single primitive for rendering icons from the curated Phosphor set by a normalized name.

## Scope

One `Icon` component. Callers pick an icon with `ICONS` (for example `ICONS.HEART`), so raw strings never leak into call sites. Size, dimensions, and color are controlled through props.

## Requirements

- `name`: required. One of the values in `ICONS` (`bookmark | copy | heart`).
- `size`: `xs | sm | md | lg | xl`. Default `md`. Maps to 12, 16, 20, 24, and 32 px.
- `width`, `height`: optional CSS strings that override `size`. If only one is passed, it applies to both axes, so the glyph scales with it. If both are passed and differ, the glyph fits the smaller side.
- `color`: optional CSS string. Icons use `currentColor`, so this colors the glyph. Accepts a token (`var(--color-velvet-main)`) or a raw value.
- Forwards remaining SVG attributes and `className`.
- Renders `aria-hidden` unless `aria-label` or `aria-labelledby` is passed.

## Decisions

- `ICONS` is an `as const` object, not a `const enum`. The repo uses `verbatimModuleSyntax` and a bundled library build, where `const enum` is fragile for consumers. Usage is the same: `<Icon name={ICONS.HEART} />`. `IconName` is derived from it.
- The registry in `icon.tsx` is typed `Record<IconName, ...>`, so adding an option to `ICONS` without a registry entry is a type error.
- Size values live in `icon.module.css` as a `--icon-size` custom property per size class. `width` and `height` are inline styles layered over it.
- Unknown names render nothing.

## Adding an icon

1. Add a key and value to `ICONS` in `options.ts`, in alphabetical order.
2. Import the Phosphor component and add it to the registry in `icon.tsx`.
3. Add it to the list in `src/foundations/Icons.stories.tsx`.

## Out of scope

- Phosphor weights (`bold`, `fill`, and so on)
- Rotation, mirroring, or animation
- Custom SVG icons
- Size tokens in `src/assets/styles`
