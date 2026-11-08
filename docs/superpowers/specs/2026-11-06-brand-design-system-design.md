# Brand Design System — Design Spec

**Date:** 2026-11-06  
**Status:** Approved

## Goal

Scaffold a React + TypeScript design-system repo where Storybook is the primary surface. Components are organized by design-system layer (`foundations`, `primitives`, `patterns`), built with Rsbuild, styled with CSS Modules + Lightning CSS.

## Approach

Single-package Rsbuild + Storybook setup (not Rslib/monorepo yet). Storybook uses `storybook-react-rsbuild` so preview builds share the same Rsbuild/CSS pipeline as the thin playground app.

## Structure

```
brand/
  src/
    foundations/          # tokens, global CSS custom properties
      tokens.css
    primitives/           # atomic building blocks
      Button/
        Button.tsx
        Button.module.css
        Button.stories.tsx
        index.ts
    patterns/             # composed UI — empty placeholder only
      .gitkeep
    App.tsx               # thin playground importing a primitive
    main.tsx              # playground entry (Rsbuild source.entry)
    index.ts              # public library exports
  .storybook/
    main.ts
    preview.ts
  rsbuild.config.ts
  tsconfig.json
  package.json
```

Storybook sidebar groups: **Foundations → Primitives → Patterns**.

## Styling

- CSS Modules via `*.module.css`
- Lightning CSS enabled via Rsbuild defaults (transform + minify; no PostCSS required for v1)
- Design tokens as CSS custom properties in `src/foundations/tokens.css`, imported in Storybook preview and playground

## Tooling

| Concern         | Choice                                                     |
| --------------- | ---------------------------------------------------------- |
| Package manager | npm                                                        |
| Bundler / app   | `@rsbuild/core` + `@rsbuild/plugin-react`                  |
| Storybook       | Storybook 10 + `storybook-react-rsbuild`                   |
| Language        | TypeScript (strict); `@rsbuild/core/types` for CSS Modules |
| Scripts         | `dev`, `build`, `storybook`, `build-storybook`             |

## Seed content

- Foundations: `tokens.css` (color, space, radius, type scale)
- Primitive: `Button` with CSS Modules + Default / Primary stories
- Patterns: empty directory (`.gitkeep` only)

## Out of scope (v1)

- Publishing / package `exports` polish
- Rslib library build
- Visual regression / Chromatic
- Theme switcher
- Additional primitives or patterns beyond Button

## Success criteria

1. `npm run storybook` opens Storybook with Button stories under Primitives
2. `npm run dev` serves a thin playground that renders Button
3. CSS Modules resolve with typed imports; Lightning CSS used by default
4. `src/patterns/` exists and is empty
