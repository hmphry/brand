// Post-build: publish the individual token sheets next to the bundled
// `styles.css`, copy self-hosted fonts, and drop the empty JS stub Rslib
// emits for the CSS entry.
import { copyFile, cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist', 'css');

await mkdir(outDir, { recursive: true });

for (const name of ['reset', 'fonts', 'colors', 'surface']) {
  await copyFile(
    join(root, 'src', 'assets', 'styles', `${name}.css`),
    join(outDir, `${name}.css`),
  );
}

// fonts.css (and the bundled styles.css) reference these as `../fonts/`.
await cp(join(root, 'src', 'assets', 'fonts'), join(root, 'dist', 'fonts'), {
  recursive: true,
});

await rm(join(outDir, 'styles.js'), { force: true });
