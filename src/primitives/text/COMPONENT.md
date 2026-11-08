# Text

Header and Body primitives that apply the existing type scale.

## Scope

Two components in this folder: Header for Lora heading styles (`h1`–`h4`) and Body for Quicksand text styles (`lead`, `body`, `small`, `caption`). Each can render as a chosen semantic element.

## Requirements

### Header

- `variant`: `h1 | h2 | h3 | h4`. Default `h1`. Uses `--font-header` and the matching `--font-size-*` and `--line-height-*` tokens.
- `component`: `h1`–`h6`, `p`, `span`, `div`, or `aside`. Default is the same tag as `variant`.
- `color`, `padding`, `margin`: optional CSS strings.
- Forwards remaining HTML attributes and `children`.

### Body

- `variant`: `lead | body | small | caption`. Default `body`. Uses `--font-body` and the matching size and line-height tokens.
- `italic`: optional boolean. When true, the chosen size is italic.
- `component`: same element union as Header. Default `p`.
- `color`, `padding`, `margin`: same optional CSS strings as Header.
- Forwards remaining HTML attributes and `children`.

## Decisions

- Header and Body share this folder, with `types.ts`, lowercase component files, `index.ts`, and `stories/`, matching `src/foundations/mark`.
- `variant` chooses the type style. `component` chooses the element, so a heading style can render as a paragraph.
- `color`, `padding`, and `margin` are inline styles so callers can pass a token (`var(--color-velvet-main)`) or a raw CSS value.
- Default element margin is reset in CSS. Spacing comes only from the `margin` prop.

## Out of scope

- Font-weight controls
- Text alignment
- Truncation
- Rich text
- Mono or code text
