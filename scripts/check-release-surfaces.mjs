import { readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.cwd();
const supportedOpenClaw = "2026.5.7";
const homepage = readFileSync(join(repoRoot, "app", "archive", "clawpowers", "page.tsx"), "utf8");
const docs = readFileSync(join(repoRoot, "app", "archive", "clawpowers", "docs", "page.tsx"), "utf8");
const agent = readFileSync(join(repoRoot, "app", "archive", "clawpowers", "agent", "page.tsx"), "utf8");
const demoProof = readFileSync(join(repoRoot, "public", "demo", "clawpowers-install-init-proof.txt"), "utf8");

const failures = [];

if (!homepage.includes(`openclaw@${supportedOpenClaw}`)) {
  failures.push(`app/archive/clawpowers/page.tsx must install-pin openclaw@${supportedOpenClaw}`);
}

if (!homepage.includes(`OpenClaw ${supportedOpenClaw}`)) {
  failures.push(`app/archive/clawpowers/page.tsx must show OpenClaw ${supportedOpenClaw} badge/text`);
}

if (!homepage.includes("/demo/clawpowers-install-init-proof.txt")) {
  failures.push("app/archive/clawpowers/page.tsx must link the install/init proof transcript");
}

for (const expected of [
  "npm install openclaw@2026.5.7 clawpowers-agent@latest",
  "npx clawpowers init",
  "npx clawpowers status",
  "0 vulnerabilities",
]) {
  if (!demoProof.includes(expected)) {
    failures.push(`demo transcript must include: ${expected}`);
  }
}

for (const [file, text] of [
  ["app/archive/clawpowers/page.tsx", homepage],
  ["app/archive/clawpowers/docs/page.tsx", docs],
  ["app/archive/clawpowers/agent/page.tsx", agent],
  ["public/demo/clawpowers-install-init-proof.txt", demoProof],
]) {
  if (/2026\.4\.14/.test(text)) failures.push(`${file} contains stale OpenClaw 2026.4.14 text`);
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`release surfaces OK: OpenClaw ${supportedOpenClaw} (archived at /archive/clawpowers)`);
