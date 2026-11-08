// Post-build: publish the individual token sheets next to the bundled
// `styles.css`, and drop the empty JS stub Rslib emits for the CSS entry.
import { copyFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist', 'css');

await mkdir(outDir, { recursive: true });

for (const name of ['fonts', 'colors', 'surface']) {
  await copyFile(
    join(root, 'src', 'assets', 'styles', `${name}.css`),
    join(outDir, `${name}.css`),
  );
}

await rm(join(outDir, 'styles.js'), { force: true });
