import { spawn } from 'node:child_process';

// `@storybook/addon-mcp` is always registered in main.ts. This script is the
// documented way to start the dev server that serves http://localhost:6006/mcp.
const child = spawn('storybook', ['dev', '-p', '6006'], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
