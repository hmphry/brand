import { spawn } from 'node:child_process';

const child = spawn('storybook', ['dev', '-p', '6006'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, STORYBOOK_MCP: '1' },
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
