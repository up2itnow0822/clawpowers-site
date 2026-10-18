import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];

function read(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    failures.push(`missing file: ${rel}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

const homepage = read("app/page.tsx");
const layout = read("app/layout.tsx");
const hero = read("app/components/Hero.tsx");
const chrome = read("app/components/SiteChrome.tsx");
const css = read("app/globals.css");
const archiveHome = read("app/archive/clawpowers/page.tsx");

for (const rel of [
  "app/icon.png",
  "app/apple-icon.png",
  "public/favicon.png",
  "public/apple-touch-icon.png",
  "public/brand/app-icon.png",
  "public/brand/hero-banner.png",
  "public/brand/hero-banner.webp",
  "public/brand/hero-city.webp",
  "public/brand/hero-water.webp",
  "public/brand/live/banner.jpg",
  "public/brand/live/banner-830.jpg",
  "public/og.jpg",
  "app/archive/clawpowers/page.tsx",
  "app/archive/clawpowers/docs/page.tsx",
  "app/archive/clawpowers/agent/page.tsx",
  "app/archive/clawpowers/examples/page.tsx",
  "app/archive/clawpowers/faq/page.tsx",
  "app/archive/clawpowers/frameworks/page.tsx",
  "app/archive/clawpowers/license/page.tsx",
]) {
  if (!existsSync(join(root, rel))) failures.push(`missing file: ${rel}`);
}

for (const [label, haystack, needle] of [
  ["homepage title lockup", hero, "AI AGENT"],
  ["homepage company line", hero, "ECONOMY LLC"],
  ["live framed banner", homepage, "/brand/live/banner.jpg"],
  ["live banner srcset", homepage, "/brand/live/banner-830.jpg 830w, /brand/live/banner.jpg 1660w"],
  ["live tagline", homepage, "Building the financial rails for the agentic economy."],
  ["rebuild status", homepage, "We&apos;re rebuilding this site. More coming soon."],
  ["live trait Agent-native", homepage, "Agent-native"],
  ["live trait Protocol-first", homepage, "Protocol-first"],
  ["live trait Borderless finance", homepage, "Borderless finance"],
  ["live trait Future-proof", homepage, "Future-proof"],
  ["live banner frame", css, ".aae-banner"],
  ["live holding main", css, ".aae-live"],
  ["header wordmark", chrome, "AI Agent Economy LLC"],
  ["footer copyright", chrome, "© 2026 AI Agent Economy LLC"],
  ["footer domain as text", chrome, ">ai-agent-economy.com</span>"],
  ["archive link", chrome, "/archive/clawpowers"],
  ["layout title", layout, "AI Agent Economy LLC"],
  ["layout canonical", layout, "https://ai-agent-economy.com"],
  ["Space Grotesk", layout, "Space_Grotesk"],
  ["JetBrains Mono", layout, "JetBrains_Mono"],
  ["hero tagline", hero, "BUILDING THE FINANCIAL RAILS FOR THE AGENTIC ECONOMY."],
  ["hero left rail", hero, "WEALTH THROUGH MOVEMENT"],
  ["hero right rail", hero, "ANCIENT ROUTES."],
  ["live site CTA", hero, "https://www.ai-agent-economy.com"],
  ["reduced motion hook", hero, "useReducedMotion"],
  ["ember CTA class", css, ".btn-ember"],
  ["reduced motion CSS", css, "prefers-reduced-motion"],
  ["archived ClawPowers home", archiveHome, "ClawPowers"],
]) {
  if (!haystack.includes(needle)) failures.push(`expected ${label} to include ${JSON.stringify(needle)}`);
}

for (const [label, haystack, needle] of [
  ["invented Live holding signals", homepage, "Live holding signals"],
  ["invented Key traits", homepage, "Key traits"],
  ["invented trait cards", homepage, "aae-card"],
  ["invented trait grid", homepage, "brandTraits"],
]) {
  if (haystack.includes(needle)) failures.push(`homepage should not include ${label} (${JSON.stringify(needle)})`);
}

if (/<title>\s*ClawPowers/i.test(layout) || layout.includes('title: "ClawPowers"')) {
  failures.push("root layout still titles the site ClawPowers");
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("aae surfaces OK: brand lockup, live holding page, archive, favicon, fonts");
