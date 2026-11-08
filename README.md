# Brand

React + TypeScript design system with Rsbuild and Storybook. Styled with CSS Modules and Lightning CSS.

## Structure

- `src/foundations` — tokens and global CSS custom properties
- `src/primitives` — atomic building blocks
- `src/patterns` — composed UI (empty for now)
- `src/index.ts` — public library exports
- `src/main.tsx` — thin playground entry

## Setup

Requires Node.js 20.19+ or 22.12+ (Volta pin included).

```bash
npm install
```

## Scripts

```bash
npm run storybook       # Storybook at http://localhost:6006
npm run build-storybook # Static Storybook build
npm run dev             # Playground at http://localhost:3000
npm run build           # Production playground build
npm run preview         # Preview production build
```
