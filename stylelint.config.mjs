/**
 * Token discipline for design-system component styles.
 *
 * Biome covers hex literals via `noHexColors`. This config covers the gaps
 * Biome cannot express: oklch()/hsl()/rgb() functions and named colors, in
 * files that should only reference `var(--color-*)` tokens.
 *
 * Note: Stylelint matches these patterns against the parsed value, not the
 * full `property: value` declaration. Do not anchor on the colon.
 *
 * Token-source CSS is excluded via `.stylelintignore`.
 */
const COLOR_PROPERTIES = [
  'color',
  'background',
  'background-color',
  'border',
  'border-color',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'outline',
  'outline-color',
  'box-shadow',
  'text-decoration-color',
  'fill',
  'stroke',
  'caret-color',
  'column-rule-color',
  'accent-color',
];

/** Color functions that bypass the token system. */
const COLOR_FUNCTIONS = [
  '/oklch\\(/',
  '/\\b(?:rgba?|hsla?|lab|lch|hwb|color)\\(/',
  '/#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b/',
];

/**
 * Named colors. Deliberately excludes `currentColor`, `transparent`,
 * `inherit`, `none`, and the `-color` keywords so transitions and resets pass.
 */
const NAMED_COLORS =
  '/\\b(?:red|blue|green|black|white|gray|grey|yellow|orange|purple|pink|brown|cyan|magenta|lime|navy|teal|olive|maroon|silver|aqua|fuchsia|whitesmoke|beige|ivory|khaki|lavender|salmon|coral|crimson|indigo|violet|gold|plum|orchid|sienna|tan|wheat|thistle|azure|linen|snow|seashell|gainsboro|lightgray|lightgrey|darkgray|darkgrey)\\b(?!-)/i';

export default {
  rules: {
    'declaration-property-value-disallowed-list': [
      {
        [`/^(?:${COLOR_PROPERTIES.join('|')})$/`]: [
          ...COLOR_FUNCTIONS,
          NAMED_COLORS,
        ],
      },
    ],
  },
};
