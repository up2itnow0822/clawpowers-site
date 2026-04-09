import { Card, SiteShell } from "../components";

const sections = [
  ["Install", "Package install paths, prerequisites, and first setup checks."],
  ["First Run", "The fastest route from install to first visible result."],
  ["Payments", "x402 payment flows, approval logic, and policy guidance."],
  ["Memory", "Memory behavior, persistence expectations, and recall patterns."],
  ["RSI", "Self-improvement loops, mutation acceptance, and evaluation guardrails."],
  ["Wallets", "Non-custodial wallet handling and execution safety notes."],
  ["Swarm", "Parallel-agent coordination, task partitioning, and result handling."],
  ["Troubleshooting", "Common launch blockers and how to clear them quickly."],
];

export default function Page() {
  return (
    <SiteShell eyebrow="docs" title="Docs hub">
      <Card>
        <p className="text-base leading-7 text-slate-600">
          This docs surface is designed for fast onboarding. The goal is to help a new user get from install to a real capability flow with as little ambiguity as possible.
        </p>
      </Card>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {sections.map(([title, desc]) => (
          <Card key={title}>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
            <p className="text-sm leading-6 text-slate-600">{desc}</p>
          </Card>
        ))}
      </div>
    </SiteShell>
  );
}
