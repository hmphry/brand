# AGENTS.md

## Commands

- `npm run storybook` — Start Storybook (primary surface). MCP is at http://localhost:6006/mcp while it runs.
- `npm run storybook:mcp` — Same dev server; the command Cursor and other agents should use for MCP.
- `npm run build-storybook` — Static Storybook. Includes `/manifests/components.json`. `/mcp` is not part of the static build.
- `npm run dev` — Start Rsbuild playground
- `npm run build` — Build playground for production
- `npm run preview` — Preview production playground

## Layout

- `src/assets/styles` — global CSS (`fonts`, `colors`, `surface`)
- `src/assets/svgs` — brand SVG marks
- `src/foundations` — foundation stories + colocated `*.module.css`
- `src/primitives` — atomic components + colocated `*.module.css` / `*.stories.tsx`
- `src/patterns` — composed patterns (reserved)
- `src/index.ts` — library barrel (do not use as Rsbuild entry)
- `src/main.tsx` — playground entry via `rsbuild.config.ts` `source.entry`

## Docs

- Spec: `docs/superpowers/specs/2026-11-06-brand-design-system-design.md`
- Plan: `docs/superpowers/plans/2026-11-06-brand-design-system.md`
- Rsbuild: https://rsbuild.rs/llms.txt
- Storybook Rsbuild: https://storybook.rsbuild.rs/
