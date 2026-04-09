import Link from "next/link";
import { Card, SiteShell } from "./components";

const features = [
  ["Payments", "Give agents x402 payment execution with policy control and approval logic."],
  ["Memory", "Persist useful context so agents stop repeating solved work."],
  ["RSI", "Run self-improvement loops with outcome tracking and mutation feedback."],
  ["Wallets", "Enable non-custodial wallet operations for agent workflows."],
  ["Skills", "Package reusable execution capabilities, not just prompt fragments."],
  ["Swarm", "Coordinate parallel agents with clearer task boundaries and shared outcomes."],
];

export default function HomePage() {
  return (
    <SiteShell eyebrow="clawpowers.ai" title="ClawPowers gives AI agents real capabilities.">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="mb-5 max-w-2xl text-lg text-slate-600">Payments, memory, RSI, wallets, swarm coordination, and skill execution in one launch-ready capability layer.</p>
          <div className="mb-6 flex flex-wrap gap-3">
            <Link href="/docs" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Get Started</Link>
            <a href="https://github.com/up2itnow0822/ClawPowers-Skills" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">View on GitHub</a>
          </div>
          <div className="rounded-2xl bg-slate-950 px-5 py-4 text-sm text-white shadow-inner">
            <div className="mb-2 text-slate-400">Install</div>
            <code>npx clawpowers init</code>
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-sm font-semibold text-slate-500">Launch surfaces</div>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-slate-900">clawpowers</div>
              <div className="text-sm text-slate-600">Capability library for builders integrating powers into existing agents.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">clawpowers-agent</div>
              <div className="text-sm text-slate-600">Thin wrapper runtime around a stock, updatable OpenClaw runtime.</div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {["npm: clawpowers", "npm: clawpowers-agent", "x402 ready", "memory included", "RSI capable", "multi-runtime compatible"].map((item) => (
          <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800">{item}</div>
        ))}
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map(([title, desc]) => (
          <Card key={title}>
            <h2 className="mb-2 text-xl font-semibold text-slate-900">{title}</h2>
            <p className="text-sm leading-6 text-slate-600">{desc}</p>
          </Card>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">60-second setup demo</div>
          <h2 className="mb-3 text-2xl font-semibold">Show the install, first run, and first visible result.</h2>
          <p className="mb-5 text-slate-600">Replace this card with the first real screen recording and hero loop. This is the exact slot for the soft launch media.</p>
          <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">1. Install</div>
            <div className="rounded-2xl bg-slate-50 p-4">2. Init</div>
            <div className="rounded-2xl bg-slate-50 p-4">3. Run first power</div>
          </div>
        </Card>
        <Card>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Frameworks</div>
          <h2 className="mb-3 text-2xl font-semibold">Use ClawPowers inside the tools you already ship with.</h2>
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {['OpenClaw','Claude Code','Cursor','Codex','ElizaOS','LangChain / LangGraph'].map((fw) => <div key={fw} className="rounded-2xl border border-slate-200 p-4">{fw}</div>)}
          </div>
        </Card>
      </section>
    </SiteShell>
  );
}
