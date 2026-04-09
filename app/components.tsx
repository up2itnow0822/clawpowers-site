import Link from "next/link";

const nav = [
  ["Docs", "/docs"],
  ["Examples", "/examples"],
  ["Frameworks", "/frameworks"],
  ["Agent", "/agent"],
  ["FAQ", "/faq"],
];

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">ClawPowers</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-600 transition hover:text-slate-900">{label}</Link>
          ))}
        </nav>
        <a href="https://github.com/up2itnow0822/ClawPowers-Skills" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">View on GitHub</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        <div className="mb-2 font-medium text-slate-700">ClawPowers</div>
        <div>Capability layer for autonomous agents. Product site for the ClawPowers library and ClawPowers Agent runtime.</div>
      </div>
    </footer>
  );
}

export function SiteShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7ff_35%,#ffffff_100%)] text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <div className="mb-3 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h1>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">{children}</div>;
}
