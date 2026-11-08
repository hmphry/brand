# @hmphry/brand

React + TypeScript design system with Rsbuild and Storybook. Styled with CSS Modules and Lightning CSS. Published as a package to GitHub Packages.

## Install

The package is hosted on GitHub Packages. In the consuming project, add to `.npmrc`:

```ini
@hmphry:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

`GITHUB_TOKEN` must be a personal access token with the `read:packages` scope. Then:

```bash
npm install @hmphry/brand
```

`react` and `react-dom` (19+) are peer dependencies.

## Usage

Load the token stylesheet once at your app root. It is required: the components read the CSS custom properties it defines.

```tsx
import '@hmphry/brand/styles.css';
import {
  Button,
  Lockup,
  Sigil,
  StackedWordmark,
  Wordmark,
} from '@hmphry/brand';

export function Header() {
  return (
    <>
      <Lockup variant="stacked" />
      <Sigil width="4rem" />
      <Wordmark width="16rem" />
      <StackedWordmark width="10rem" />
      <Button variant="primary">Go</Button>
    </>
  );
}
```

### Token stylesheets

| Import                      | Contents                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| `@hmphry/brand/styles.css`  | Everything below, in one file                                                                  |
| `@hmphry/brand/fonts.css`   | Lora, Quicksand, DM Mono                                                                       |
| `@hmphry/brand/colors.css`  | Color palette (`--color-<name>-<lightest..darkest>`)                                           |
| `@hmphry/brand/surface.css` | Theme aliases, semantic colors, space, radius, type, shadow and z-index scales, sigil defaults |

`surface.css` reads variables from `colors.css`, so load them in that order if you import them separately.

Browser baseline: modern browsers with `oklch()` and relative color syntax (`oklch(from ...)`).

## Structure

- `src/foundations` — tokens and global CSS custom properties
- `src/primitives` — atomic building blocks
- `src/patterns` — composed UI (empty for now)
- `src/index.ts` — public library exports
- `src/styles.css` — bundled token stylesheet entry
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
npm run build:lib       # Build the publishable package into dist/
npm run check           # Types, Biome, Stylelint
npm run commitlint      # Lint commits since origin/main
```

## Commits and releases

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint (a Husky `commit-msg` hook locally, and a pull request check in CI). Use squash merge so the PR title becomes the commit message.

- `feat:` minor bump, `fix:` patch bump, `feat!:` or a `BREAKING CHANGE:` footer major bump.
- Suggested scopes: `mark`, `button`, `tokens`, `colors`, `build`, `release`.

Releases are automated with [release-please](https://github.com/googleapis/release-please): merged commits on `main` open a Release PR that bumps the version and updates `CHANGELOG.md`. Merging that PR tags the release and publishes to GitHub Packages. Do not bump versions or edit `CHANGELOG.md` by hand.

One-time repo setting: enable Settings > Actions > General > "Allow GitHub Actions to create and approve pull requests".
