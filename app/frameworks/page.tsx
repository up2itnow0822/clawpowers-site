import { Card, SiteShell } from "../components";

export default function Page() {
  return (
    <SiteShell eyebrow="clawpowers.ai" title="Frameworks">
      <Card>
        <p className="text-base leading-7 text-slate-600">Framework compatibility and integration notes for OpenClaw, Claude Code, Cursor, Codex, ElizaOS, LangChain, and custom stacks.</p>
      </Card>
    </SiteShell>
  );
}
