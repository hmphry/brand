import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { defineConfig } from '@rslib/core';

// Docs: https://rslib.rs/config/
export default defineConfig({
  lib: [
    {
      format: 'esm',
      // Bundle mode: `?react` SVG imports are not supported in bundleless mode.
      // CSS Modules are extracted to dist/index.css and re-imported via banner.
      bundle: true,
      dts: true,
      banner: {
        js: "import './index.css';",
      },
      source: {
        entry: {
          index: './src/index.ts',
        },
        tsconfigPath: './tsconfig.build.json',
      },
      output: {
        distPath: { root: './dist' },
      },
    },
    {
      // Global token sheets: bundled so `@import`s are inlined into one file.
      format: 'esm',
      bundle: true,
      dts: false,
      source: {
        entry: {
          styles: './src/styles.css',
        },
      },
      output: {
        distPath: { root: './dist/css' },
      },
    },
  ],
  server: {
    // Playground `public/` assets must not leak into the package.
    publicDir: false,
  },
  output: {
    // Rslib defaults to `node`; `web` is required to process CSS.
    target: 'web',
  },
  tools: {
    cssLoader: {
      // Keep `../fonts/` as authored. finalize-css copies the files to
      // `dist/fonts`, which is the same relative path from `dist/css`.
      url: {
        filter: (url) => !url.startsWith('../fonts/'),
      },
    },
  },
  plugins: [pluginReact(), pluginSvgr({ mixedImport: true })],
});
