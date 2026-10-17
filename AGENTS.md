# AGENTS.md

This is the AI Agent Economy LLC marketing site on Next.js 16 (App Router) + Tailwind v4. Keep that stack. Do not replace the framework, build, or CI toolchain.

## Current product surface

- Public home (`app/page.tsx`) is the AI Agent Economy site, not ClawPowers.
- Live holding page from https://www.ai-agent-economy.com is recreated below the hero in the same order: framed banner, tagline, rebuild status with amber pulse, then the `/Agent-native` `/Protocol-first` `/Borderless finance` `/Future-proof` chips. Do not add invented marketing sections on `/`.
- Live production is one HTML document. Paths like `/about` 200 because they serve that same file, not because they are distinct routes — do not invent extra public pages.
- Brand assets live in `public/brand/` (app icon, hero banner PNG + WebP). The live holding banner JPEGs are in `public/brand/live/`. Tab icons are `app/icon.png` / `public/favicon.png`.

## Hero contract

`app/components/Hero.tsx` is cinematic and must stay light on CPU:

- SVG AE monogram stroke draw, then forge glow, with the photographic icon fading in (`app/components/AeMonogram.tsx`)
- Sparse ember particles on canvas (`app/components/EmberField.tsx`), paused offscreen / when hidden
- Mouse + scroll parallax via CSS variables (no per-frame React state)
- Soft tower-light flicker over the city layer
- Staggered headline rise + mono tagline type-in
- Amber primary CTA (`#rebuild`) and ghost secondary CTA (`https://www.ai-agent-economy.com`)
- `prefers-reduced-motion` yields a static glowing frame (no particles, no parallax, no typewriter)

On small screens the mark stacks above the type and the left/right rail copy is hidden.

## Archive / rollback

Do not delete ClawPowers content. It was moved to:

- `app/archive/clawpowers/` — pages, original `SiteShell`, and nav retargeted to archive URLs
- Public URL prefix: `/archive/clawpowers`

`scripts/check-release-surfaces.mjs` still pins OpenClaw `2026.5.7` against the **archived** home/docs/agent files.

## Commands

- `npm run dev` — local site
- `npm run lint` — `tsc --noEmit`
- `npm test` — archive release-surface check + AAE lockup check
- `npm run build` — Next.js production build (this is what CI runs)

There is no ESLint config in this repo. Typecheck is the lint gate. Do not add a new test runner unless asked.

## Out of scope unless explicitly requested

- Merging PRs or marking them ready
- Pushing to `main`
- Deploying or changing Vercel project settings
- Rewriting archived ClawPowers copy except to keep links working under `/archive/clawpowers`
