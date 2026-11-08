# AGENTS.md

## Commands

- `npm run storybook` — Start Storybook (primary surface)
- `npm run storybook:mcp` — Start Storybook with the MCP server at http://localhost:6006/mcp
- `npm run build-storybook` — Build static Storybook
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
