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
npm run storybook       # Storybook at http://localhost:6006 (MCP at /mcp)
npm run storybook:mcp   # Same dev server; documented entry for the MCP client
npm run build-storybook # Static Storybook build, including component manifests
npm run dev             # Playground at http://localhost:3000
npm run build           # Production playground build
npm run preview         # Preview production build
```

## Deployment

Pushes to `main`, and manual runs of the **Deploy Storybook** workflow from `main`, build the static Storybook and upload it to the Namecheap site at https://brand.emilyhumphrey.com. Pull requests build the site and do not deploy.

The workflow is `.github/workflows/deploy-storybook.yml`. It installs with `npm ci`, runs `npm run build-storybook`, and syncs `storybook-static/` over explicit FTPS (port 21) with [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action). A state file (`.ftp-deploy-sync-state.json`) on the server makes later deploys upload only what changed. Runs on the same branch are queued, so a production upload finishes before the next one starts. A newer pull request push cancels the older build.

The FTP account must be the deploy-only user jailed to the subdomain document root (`/home/hmphqcxx/sites/brand.emilyhumphrey.com/httpdocs`). The workflow uploads to that account's root (`./`), which is the docroot. Using the main cPanel user (`hmphqcxx`) would put the files in the wrong directory.

Add these repository secrets (Settings → Secrets and variables → Actions). The workflow never contains their values.

| Secret         | Value                      |
| -------------- | -------------------------- |
| `FTP_SERVER`   | `premium3.web-hosting.com` |
| `FTP_USERNAME` | Deploy-only FTP username   |
| `FTP_PASSWORD` | Deploy-only FTP password   |

`security` is `loose`: the connection is still TLS, but the action will not reject Namecheap's shared certificate when the hostname check fails. The static build includes an `.htaccess` that sets MIME types (including `.mjs`, `.json`, and `.woff2`), short revalidation caching, and a deny rule for the FTP state file.

## MCP

Storybook 10.6 is wired with `@storybook/addon-mcp` and `features.componentsManifest`. Those are two different surfaces.

**Local MCP server (dev only).** `npm run storybook` and `npm run storybook:mcp` serve the MCP endpoint at http://localhost:6006/mcp. This repo's `.cursor/mcp.json` points Cursor at that URL. Start Storybook first, then connect the client. A browser request to that URL shows which toolsets are on and links to the manifest debugger at http://localhost:6006/manifests/components.html.

The docs toolset reads the component manifest, so it can describe the components in this design system. The dev toolset's story-editing tools need the running dev server. `stories-changed` stays off because `features.changeDetection` is disabled. The test toolset stays off because `@storybook/addon-vitest` is not installed. The Rsbuild builder may also leave module-graph tools unavailable; the `/mcp` page is the source of truth for the current process.

**Static hosting.** `storybook build` writes the manifests into the deployed site:

- https://brand.emilyhumphrey.com/manifests/components.json
- https://brand.emilyhumphrey.com/manifests/components.html (readable debugger)

`docs.json` is written beside those files only when Storybook has MDX docs to index. This project has no MDX docs, so the deployed site does not currently include `/manifests/docs.json`. Prop types in `components.json` come from Storybook's default `react-docgen` extractor.

There is no `https://brand.emilyhumphrey.com/mcp`. The MCP endpoint is a Node HTTP server attached to `storybook dev`. Namecheap is serving the static Apache docroot, and this pipeline does not run a Node process there. `@storybook/mcp` can self-host a docs toolset from those manifest files, but that needs a Node host, which this deploy does not provide. Agents that can read the published JSON can use the manifest URLs directly. Agents that need the MCP tools have to run Storybook locally and connect to `http://localhost:6006/mcp`.
