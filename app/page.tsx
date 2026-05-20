import Link from "next/link";
import { Card, SiteShell } from "./components";

const features = [
  ["Payments", "Give agents x402 payment workflow handling with policy control and approval logic."],
  ["Memory", "Persist useful context so agents stop repeating solved work."],
  ["RSI", "Run self-improvement loops with outcome tracking and mutation feedback."],
  ["Wallets", "Use wallet helpers behind explicit spend limits and approvals."],
  ["Skills", "Package reusable execution capabilities, not just prompt fragments."],
  ["Swarm", "Coordinate parallel agents with clearer task boundaries and shared outcomes."],
];

export default function HomePage() {
  return (
    <SiteShell eyebrow="clawpowers.ai" title="Ship AI agents with payments, memory, wallets, skills, and self-improvement loops without building the agent runtime from scratch.">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="mb-5 max-w-2xl text-lg text-[#8899bb]">ClawPowers is the capability layer for OpenClaw-compatible agents: install the CLI, initialize a project, and add production-grade powers behind explicit approval and spend controls.</p>
          <div className="mb-6 flex flex-wrap gap-3">
            <a href="#install" className="btn-primary">Install ClawPowers</a>
            <a href="https://github.com/up2itnow0822/ClawPowers-Skills" className="btn-secondary">View on GitHub</a>
          </div>
          <div id="install" className="code-block p-4 shadow-inner">
            <div className="mb-2 text-[#8899bb] text-sm">Install the CLI runtime</div>
            <pre className="whitespace-pre-wrap text-[#00d4ff]"><code>{`npm install -g openclaw@2026.5.7 clawpowers-agent
clawpowers init
clawpowers`}</code></pre>
            <div className="mt-3 text-sm text-[#8899bb]">Pinned to OpenClaw 2026.5.7 · Node 22+ · soft-launch preview · explicit wallet approvals</div>
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-sm font-semibold text-[#8899bb]">Launch surfaces</div>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-white">clawpowers</div>
              <div className="text-sm text-[#8899bb]">Capability library for builders integrating powers into existing agents.</div>
            </div>
            <div>
              <div className="font-semibold text-white">clawpowers-agent</div>
              <div className="text-sm text-[#8899bb]">Thin wrapper runtime around a stock, updatable OpenClaw runtime. Installs the public <code>clawpowers</code> CLI.</div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {["npm: clawpowers", "npm: clawpowers-agent CLI", "OpenClaw 2026.5.7", "Node 22+", "Hermes top-level skills", "preview-ready"].map((item) => (
          <div key={item} className="badge justify-center">{item}</div>
        ))}
      </section>

      <section className="stats-bar mt-10 grid gap-4 py-5 text-sm text-[#c8d4f2] md:grid-cols-5">
        <div><span className="font-semibold text-white">Payments:</span> x402 workflow handling with policy controls</div>
        <div><span className="font-semibold text-white">Memory:</span> persistent agent context instead of repeated setup</div>
        <div><span className="font-semibold text-white">RSI:</span> outcome-tracked mutation loops for safe improvement experiments</div>
        <div><span className="font-semibold text-white">Wallets:</span> helper flows gated by explicit spend limits and approvals</div>
        <div><span className="font-semibold text-white">Swarm:</span> parallel agents with clearer boundaries and shared outcomes</div>
      </section>

      <p className="mt-6 max-w-3xl text-[#8899bb]">Built for builders who want reusable agent powers now, while keeping OpenClaw stock, pinned, and auditable.</p>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map(([title, desc]) => (
          <Card key={title}>
            <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
            <p className="text-sm leading-6 text-[#8899bb]">{desc}</p>
          </Card>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">60-second setup demo</div>
          <h2 className="mb-3 text-2xl font-semibold text-white">Install the runtime, initialize ClawPowers, then run the first task.</h2>
          <p className="mb-5 text-[#8899bb]">The launch path uses <code>clawpowers-agent</code> for the CLI and pulls the shared <code>clawpowers</code> capability library automatically. OpenClaw stays stock and pinned to the supported release.</p>
          <div className="grid gap-3 text-sm text-white md:grid-cols-3">
            <div className="code-block p-4">1. Install OpenClaw + agent</div>
            <div className="code-block p-4">2. Run <code>clawpowers init</code></div>
            <div className="code-block p-4">3. Run first task</div>
          </div>
        </Card>
        <Card>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">Frameworks</div>
          <h2 className="mb-3 text-2xl font-semibold text-white">Use ClawPowers where compatibility is explicitly pinned or documented.</h2>
          <div className="grid gap-3 text-sm text-[#8899bb] sm:grid-cols-2">
            {['OpenClaw','Claude Code','Cursor','Codex','ElizaOS','LangChain / LangGraph'].map((fw) => <div key={fw} className="card p-4 hover:border-[#00d4ff]/30 transition-colors">{fw}</div>)}
          </div>
        </Card>
      </section>
    </SiteShell>
  );
}

