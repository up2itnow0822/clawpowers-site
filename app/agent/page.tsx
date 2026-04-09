import { Card, SiteShell } from "../components";

export default function Page() {
  return (
    <SiteShell eyebrow="clawpowers.ai" title="ClawPowers Agent">
      <Card>
        <p className="text-base leading-7 text-slate-600">ClawPowers Agent is the thin wrapper runtime around the stock OpenClaw runtime. Use this page to explain when to choose the runtime over the library.</p>
      </Card>
    </SiteShell>
  );
}
