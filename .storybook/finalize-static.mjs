import { access, copyFile, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = 'storybook-static';
const manifestPath = join(outputDir, 'manifests', 'components.json');

await access(join(outputDir, 'index.html'));
await access(manifestPath);

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const components = manifest.components;
if (
  components == null ||
  typeof components !== 'object' ||
  Object.keys(components).length === 0
) {
  console.error(
    'storybook-static/manifests/components.json has no components. The static MCP manifest was not generated.',
  );
  process.exit(1);
}

await copyFile(
  new URL('./htaccess', import.meta.url),
  join(outputDir, '.htaccess'),
);
