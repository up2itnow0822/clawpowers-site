import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.cwd();
const supportedOpenClaw = '2026.5.7';
const homepage = readFileSync(join(repoRoot, 'app', 'page.tsx'), 'utf8');
const docs = readFileSync(join(repoRoot, 'app', 'docs', 'page.tsx'), 'utf8');
const agent = readFileSync(join(repoRoot, 'app', 'agent', 'page.tsx'), 'utf8');

const failures = [];

if (!homepage.includes(`openclaw@${supportedOpenClaw}`)) {
  failures.push(`app/page.tsx must install-pin openclaw@${supportedOpenClaw}`);
}

if (!homepage.includes(`OpenClaw ${supportedOpenClaw}`)) {
  failures.push(`app/page.tsx must show OpenClaw ${supportedOpenClaw} badge/text`);
}

for (const [file, text] of [
  ['app/page.tsx', homepage],
  ['app/docs/page.tsx', docs],
  ['app/agent/page.tsx', agent],
]) {
  if (/2026\.4\.14/.test(text)) failures.push(`${file} contains stale OpenClaw 2026.4.14 text`);
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`release surfaces OK: OpenClaw ${supportedOpenClaw}`);
