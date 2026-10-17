import { Card, SiteShell } from "../components";

const faq = [
  ["What is the difference between ClawPowers and ClawPowers Agent?", "ClawPowers is the capability library. ClawPowers Agent is the faster wrapper runtime for teams who want a ready launch surface."],
  ["Do I need OpenClaw?", "Not always. The library can support broader integration patterns, while the agent runtime leans on the OpenClaw execution model more directly."],
  ["Is this production-ready?", "Some surfaces are already suitable for real use, while others are still better framed as guided soft-launch paths. The site should make that distinction explicit."],
  ["How do payments work?", "Through x402-oriented payment flows and policy-aware execution patterns."],
  ["How does memory work?", "By persisting useful execution context so the system can recall prior work instead of rediscovering it every run."],
  ["What license applies?", "License details vary by repo and component. The product site should point directly to the relevant license surfaces."],
];

export default function Page() {
  return (
    <SiteShell eyebrow="faq" title="Frequently asked questions">
      <div className="grid gap-5 lg:grid-cols-2">
        {faq.map(([q, a]) => (
          <Card key={q}>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{q}</h2>
            <p className="text-sm leading-6 text-slate-600">{a}</p>
          </Card>
        ))}
      </div>
    </SiteShell>
  );
}
