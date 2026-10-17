# AI Agent Economy LLC

Marketing site for [AI Agent Economy LLC](https://www.ai-agent-economy.com): **building the financial rails for the agentic economy**.

This repository previously launched ClawPowers. ClawPowers is paused. The home page is now the AI Agent Economy brand surface. The previous ClawPowers site is preserved and can be rolled back.

## Routes

- `/` — AI Agent Economy cinematic hero plus the live holding page (framed banner, tagline, rebuild status, four chips)
- Live production is a single HTML document. Extra paths on https://www.ai-agent-economy.com return that same homepage, so this repo does not invent extra public routes.
- `/archive/clawpowers` — archived ClawPowers home
- `/archive/clawpowers/agent`
- `/archive/clawpowers/docs`
- `/archive/clawpowers/examples`
- `/archive/clawpowers/faq`
- `/archive/clawpowers/frameworks`
- `/archive/clawpowers/license`

## Brand

- Concrete gray `#8A8A8A`
- Iron black `#0B0B0B`
- Neon amber `#FF8A00`
- Ember gradient `#FF8A00` → `#FF3D00`
- Display: Space Grotesk, extended tracking, all caps
- Secondary: JetBrains Mono
- Mark: angular AE monogram, stone + molten amber

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm test
npm run build
```

`npm test` checks archived ClawPowers release pins and the new AI Agent Economy lockup, live copy, fonts, and favicon.

## Rollback

The archived ClawPowers App Router tree lives at `app/archive/clawpowers`. To restore it as the public home page, move those routes back to `app/` (home, docs, examples, frameworks, agent, faq, license) and restore the previous metadata in `app/layout.tsx`.
