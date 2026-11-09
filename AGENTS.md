# AGENTS.md

## Commands

- `npm run storybook` — Start Storybook (primary surface). MCP is at http://localhost:6006/mcp while it runs.
- `npm run storybook:mcp` — Same dev server; the command Cursor and other agents should use for MCP.
- `npm run build-storybook` — Static Storybook. Includes `/manifests/components.json`. `/mcp` is not part of the static build.
- `npm run dev` — Start Rsbuild playground
- `npm run build` — Build playground for production
- `npm run preview` — Preview production playground
- `npm run build:lib` — Build the publishable `@hmphry/brand` package into `dist/` (Rslib, `rslib.config.ts`)
- `npm run check` — Types, Biome, Stylelint (also runs on publish)

## Package

- Published as `@hmphry/brand` to GitHub Packages. Entry is `src/index.ts`; tokens ship as `@hmphry/brand/styles.css` (built from `src/styles.css`).
- Library JS is built in bundle mode (`?react` SVG imports do not work in bundleless mode). CSS Modules go to `dist/index.css`.
- Anything new that should be public must be exported from `src/index.ts`.
- Releases are automated by release-please from commits on `main`. Do not bump `package.json` version or edit `CHANGELOG.md` by hand.

## Commits

- Use Conventional Commits: `type(scope): subject` (`feat:`, `fix:`, `feat!:`, `docs:`, `chore:`, ...). commitlint enforces this locally (Husky) and in CI. Types drive version bumps and the changelog.
- Suggested scopes: `mark`, `button`, `tokens`, `colors`, `build`, `release`.

## Layout

- `src/assets/styles` — global CSS (`reset`, `fonts`, `colors`, `surface`)
- `src/assets/svgs` — brand SVG marks
- `src/foundations` — foundation stories + colocated `*.module.css`
- `src/primitives` — atomic components + colocated `*.module.css` / `*.stories.tsx`
- `src/patterns` — composed patterns (reserved)
- `src/index.ts` — library barrel (do not use as Rsbuild entry)
- `src/styles.css` — bundled stylesheet entry (reset, fonts, colors, surface)
- `scripts/finalize-css.mjs` — post-build step for `build:lib`
- `src/main.tsx` — playground entry via `rsbuild.config.ts` `source.entry`

## Docs

- Spec: `docs/superpowers/specs/2026-11-06-brand-design-system-design.md`
- Plan: `docs/superpowers/plans/2026-11-06-brand-design-system.md`
- Rsbuild: https://rsbuild.rs/llms.txt
- Storybook Rsbuild: https://storybook.rsbuild.rs/
