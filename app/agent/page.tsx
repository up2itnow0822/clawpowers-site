import Link from "next/link";
import { Card, SiteShell } from "../components";

const bullets = [
  "Thin wrapper runtime around a stock, updatable OpenClaw runtime",
  "Faster onboarding for users who want a ready launch surface",
  "Works well when you want the ClawPowers experience without hand-assembling every capability",
];

export default function Page() {
  return (
    <SiteShell eyebrow="runtime" title="ClawPowers Agent">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <p className="mb-5 text-base leading-7 text-slate-600">
            ClawPowers Agent is the thin runtime wrapper around the stock OpenClaw runtime. It gives teams a faster path to using the ClawPowers capability layer without building the full runtime surface from scratch.
          </p>
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            {bullets.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">When to choose it</div>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">Use the agent when you want speed over composition.</h2>
          <p className="mb-5 text-slate-600">
            If you are evaluating ClawPowers for a soft launch, demos, or fast operator workflows, the agent runtime is usually the fastest way to get to visible results.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Read Docs</Link>
            <a href="https://github.com/up2itnow0822/clawpowers-agent" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">View Repo</a>
          </div>
        </Card>
      </div>
    </SiteShell>
  );
}
