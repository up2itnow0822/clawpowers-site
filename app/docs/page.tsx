const canonicalDocs = [
  {
    title: "Full capability-library docs",
    repo: "ClawPowers-Skills",
    description:
      "Complete docs for the clawpowers npm package, including install, payments, memory, RSI, wallets, swarm, ITP, API reference, and license details.",
    links: [
      ["Full docs", "https://github.com/up2itnow0822/ClawPowers-Skills#readme"],
      ["npm package", "https://www.npmjs.com/package/clawpowers"],
    ],
  },
  {
    title: "Full agent-runtime docs",
    repo: "ClawPowers-Agent",
    description:
      "Complete docs for clawpowers-agent, including OpenClaw prerequisites, quick start, architecture, configuration, CLI reference, development, and licensing.",
    links: [
      ["Full docs", "https://github.com/up2itnow0822/ClawPowers-Agent#readme"],
      ["npm package", "https://www.npmjs.com/package/clawpowers-agent"],
    ],
  },
] as const;

const quickLinks = [
  ["Install the library", "https://github.com/up2itnow0822/ClawPowers-Skills#quick-start"],
  ["Install the agent runtime", "https://github.com/up2itnow0822/ClawPowers-Agent#prerequisites-openclaw"],
  ["First run", "https://github.com/up2itnow0822/ClawPowers-Agent#quick-start"],
  ["Payments", "https://github.com/up2itnow0822/ClawPowers-Skills#payments"],
  ["Memory", "https://github.com/up2itnow0822/ClawPowers-Skills#memory"],
  ["RSI", "https://github.com/up2itnow0822/ClawPowers-Skills#rsi-recursive-self-improvement"],
  ["Wallets", "https://github.com/up2itnow0822/ClawPowers-Skills#wallet"],
  ["Swarm", "https://github.com/up2itnow0822/ClawPowers-Skills#parallel-swarm"],
  ["API reference", "https://github.com/up2itnow0822/ClawPowers-Skills#api-reference"],
  ["CLI reference", "https://github.com/up2itnow0822/ClawPowers-Agent#cli-reference"],
  ["Configuration", "https://github.com/up2itnow0822/ClawPowers-Agent#configuration"],
  ["Troubleshooting / known limitations", "https://github.com/up2itnow0822/ClawPowers-Agent/blob/main/KNOWN_LIMITATIONS.md"],
] as const;

const referenceLinks = [
  ["Library compatibility matrix", "https://github.com/up2itnow0822/ClawPowers-Skills/blob/main/COMPATIBILITY.md"],
  ["Agent compatibility matrix", "https://github.com/up2itnow0822/ClawPowers-Agent/blob/main/COMPATIBILITY.md"],
  ["Library security", "https://github.com/up2itnow0822/ClawPowers-Skills/blob/main/SECURITY.md"],
  ["Agent security", "https://github.com/up2itnow0822/ClawPowers-Agent/blob/main/SECURITY.md"],
  ["Library licensing", "https://github.com/up2itnow0822/ClawPowers-Skills/blob/main/LICENSING.md"],
  ["Agent licensing", "https://github.com/up2itnow0822/ClawPowers-Agent/blob/main/LICENSING.md"],
  ["Library known limitations", "https://github.com/up2itnow0822/ClawPowers-Skills/blob/main/KNOWN_LIMITATIONS.md"],
  ["Agent known limitations", "https://github.com/up2itnow0822/ClawPowers-Agent/blob/main/KNOWN_LIMITATIONS.md"],
] as const;

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-[#00d4ff] transition hover:text-white"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Page() {
  return (
    <div className="hero-bg min-h-screen text-[#f0f4ff]">
      <main className="mx-auto max-w-6xl px-6 py-12 relative z-10">
        <div className="mb-10">
          <div className="badge mb-3">docs</div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Docs hub</h1>
        </div>

        <div className="card p-6 md:p-8">
          <p className="max-w-4xl text-base leading-7 text-[#8899bb]">
            The canonical ClawPowers docs currently live in the two GitHub READMEs plus their adjacent reference docs. This page now links directly to the full docs, not just topic placeholders, so users can get from install to working usage without hunting.
          </p>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {canonicalDocs.map((doc) => (
            <div key={doc.title} className="card p-6 md:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <div className="badge">{doc.repo}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#8899bb]">Canonical docs</div>
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-white">{doc.title}</h2>
              <p className="mb-5 text-sm leading-6 text-[#8899bb]">{doc.description}</p>
              <div className="flex flex-wrap gap-4">
                {doc.links.map(([label, href]) => (
                  <ExternalLink key={href} href={href} label={label} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">Quick links</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map(([label, href]) => (
              <div key={href} className="card p-5">
                <div className="mb-3 text-lg font-semibold text-white">{label}</div>
                <ExternalLink href={href} label="Open doc" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">Reference docs</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {referenceLinks.map(([label, href]) => (
              <div key={href} className="card p-5">
                <div className="mb-3 text-base font-semibold text-white">{label}</div>
                <ExternalLink href={href} label="Open file" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
