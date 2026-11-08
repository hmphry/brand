# Brand Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a React + TypeScript design-system starter with Rsbuild, Storybook, CSS Modules + Lightning CSS, layered as foundations / primitives / patterns.

**Architecture:** Single package. Storybook (`storybook-react-rsbuild`) is the primary surface; Rsbuild powers a thin playground. Shared tokens and primitives live under `src/`. Patterns folder reserved empty.

**Tech Stack:** React 19, TypeScript, Rsbuild, Storybook 10, CSS Modules, Lightning CSS (Rsbuild default)

## Global Constraints

- Package manager: npm
- Layers: `foundations`, `primitives`, `patterns` (patterns empty)
- Styling: CSS Modules + Lightning CSS; tokens as CSS custom properties
- No Rslib, publishing, or visual regression in v1

---

### Task 1: Scaffold Rsbuild React TypeScript project

**Files:**

- Create: `package.json`, `rsbuild.config.ts`, `tsconfig.json`, `src/main.tsx`, `src/App.tsx`, `src/App.module.css` (via create-rsbuild; entry remapped so `src/index.ts` can be the library barrel)

**Interfaces:**

- Produces: working `npm run dev` / `npm run build` React+TS Rsbuild app

- [ ] **Step 1: Create Rsbuild React TS app in place**

Run from repo root (non-interactive):

```bash
npm create rsbuild@latest . -- --template react-ts --dir .
```

If the CLI refuses a non-empty dir (docs present), scaffold into a temp folder and move files, preserving `docs/`.

- [ ] **Step 2: Verify playground starts**

Run: `npm run dev`  
Expected: Rsbuild serves the default React page without errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json rsbuild.config.ts tsconfig.json src index.html
git commit -m "chore: scaffold Rsbuild React TypeScript app"
```

---

### Task 2: Add Storybook with Rsbuild framework

**Files:**

- Create: `.storybook/main.ts`, `.storybook/preview.ts`
- Modify: `package.json` (scripts + deps)

**Interfaces:**

- Consumes: existing `rsbuild.config.ts` / `@rsbuild/plugin-react`
- Produces: `npm run storybook` and `npm run build-storybook`

- [ ] **Step 1: Install Storybook Rsbuild packages**

```bash
npm install -D storybook storybook-react-rsbuild @storybook/addon-docs
```

Pin compatible Storybook 10 + `storybook-react-rsbuild` ^3.

- [ ] **Step 2: Configure Storybook**

`.storybook/main.ts`:

```ts
import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  framework: 'storybook-react-rsbuild',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
};

export default config;
```

`.storybook/preview.ts`:

```ts
import type { Preview } from 'storybook-react-rsbuild';
import '../src/foundations/tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;
```

- [ ] **Step 3: Add scripts**

```json
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"
```

- [ ] **Step 4: Commit**

```bash
git add .storybook package.json package-lock.json
git commit -m "chore: add Storybook with Rsbuild framework"
```

---

### Task 3: Foundations + layered source layout

**Files:**

- Create: `src/foundations/tokens.css`, `src/patterns/.gitkeep`, `src/index.ts`
- Modify: `src/App.tsx`, `src/index.tsx`, `tsconfig.json` (ensure `@rsbuild/core/types`)

**Interfaces:**

- Produces: CSS custom properties `--color-*`, `--space-*`, `--radius-*`, `--font-*`
- Produces: empty `src/patterns/`

- [ ] **Step 1: Add tokens**

`src/foundations/tokens.css` with color, space, radius, and type-scale custom properties on `:root`.

- [ ] **Step 2: Wire tokens into playground**

Import `./foundations/tokens.css` from `src/index.tsx`.

- [ ] **Step 3: Add public export barrel and empty patterns**

```ts
// src/index.ts
export { Button } from './primitives/Button';
```

Create `src/patterns/.gitkeep`.

- [ ] **Step 4: Commit**

```bash
git add src/foundations src/patterns src/index.ts src/index.tsx tsconfig.json
git commit -m "feat: add foundations tokens and layer folders"
```

---

### Task 4: Button primitive + stories + playground

**Files:**

- Create: `src/primitives/Button/Button.tsx`, `Button.module.css`, `Button.stories.tsx`, `index.ts`
- Modify: `src/App.tsx`

**Interfaces:**

- Produces:

```ts
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary';
};
export function Button(props: ButtonProps): JSX.Element;
```

- [ ] **Step 1: Implement Button with CSS Modules using tokens**

- [ ] **Step 2: Add stories under title `Primitives/Button`**

Stories: `Default`, `Primary`.

- [ ] **Step 3: Render Button in playground `App.tsx`**

- [ ] **Step 4: Verify**

Run: `npm run storybook` — Button stories visible under Primitives.  
Run: `npm run build` — succeeds.  
Run: `npm run build-storybook` — succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/primitives src/App.tsx src/App.module.css
git commit -m "feat: add Button primitive with Storybook stories"
```
