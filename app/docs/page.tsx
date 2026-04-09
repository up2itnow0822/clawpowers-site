import { Card, SiteShell } from "../components";

export default function Page() {
  return (
    <SiteShell eyebrow="clawpowers.ai" title="Docs">
      <Card>
        <p className="text-base leading-7 text-slate-600">Docs hub for install, first run, payments, memory, RSI, wallets, swarm, config, and troubleshooting.</p>
      </Card>
    </SiteShell>
  );
}
