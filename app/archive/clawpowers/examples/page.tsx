import { Card, SiteShell } from "../components";

const examples = [
  ["Install + first run", "Show the first successful setup path end to end."],
  ["Payment execution", "Demonstrate a real x402 flow with policy-aware guardrails."],
  ["Memory retrieval", "Show context persistence and useful recall, not just token stuffing."],
  ["RSI loop", "Demonstrate measurable self-improvement behavior with tracked outcomes."],
  ["Wallet flow", "Show non-custodial wallet handling and an example policy boundary."],
  ["Framework integration", "Show how ClawPowers fits inside existing agent environments."],
];

export default function Page() {
  return (
    <SiteShell eyebrow="examples" title="Examples gallery">
      <Card>
        <p className="text-base leading-7 text-slate-600">
          The examples page is where the product stops being abstract. Every example here should map to a recording, a short explainer, and a reproducible doc path.
        </p>
      </Card>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {examples.map(([title, desc]) => (
          <Card key={title}>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
            <p className="text-sm leading-6 text-slate-600">{desc}</p>
          </Card>
        ))}
      </div>
    </SiteShell>
  );
}
