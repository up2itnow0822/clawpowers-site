import { Card, SiteShell } from "../components";

const frameworks = [
  ["OpenClaw", "Primary runtime alignment and the clearest path for the wrapper-agent surface."],
  ["Claude Code", "Use ClawPowers as capability infrastructure under coding-agent workflows."],
  ["Cursor", "Wrap real capabilities around editor-native agent execution."],
  ["Codex", "Use ClawPowers for reusable execution patterns, not just one-off prompting."],
  ["ElizaOS", "Position ClawPowers as a capability layer for plugin and integration paths."],
  ["LangChain / LangGraph", "Use the library where composable orchestration matters more than a packaged runtime."],
];

export default function Page() {
  return (
    <SiteShell eyebrow="frameworks" title="Framework compatibility">
      <Card>
        <p className="text-base leading-7 text-slate-600">
          ClawPowers is meant to fit into the environments teams already use. This page should make compatibility confidence obvious before a visitor has to dig through source code.
        </p>
      </Card>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {frameworks.map(([title, desc]) => (
          <Card key={title}>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
            <p className="text-sm leading-6 text-slate-600">{desc}</p>
          </Card>
        ))}
      </div>
    </SiteShell>
  );
}
