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
    <header className="nav-glass sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">ClawPowers</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-[#8899bb] transition hover:text-white">{label}</Link>
          ))}
        </nav>
        <a href="https://github.com/up2itnow0822/ClawPowers-Skills" className="btn-secondary text-sm">View on GitHub</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#050818]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[#8899bb]">
        <div className="mb-2 font-medium text-white">ClawPowers</div>
        <div>Capability layer for autonomous agents. Product site for the ClawPowers library and ClawPowers Agent runtime.</div>
      </div>
    </footer>
  );
}

export function SiteShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="hero-bg min-h-screen text-[#f0f4ff]">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 relative z-10">
        <div className="mb-10">
          <div className="badge mb-3">{eyebrow}</div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card p-6">{children}</div>;
}
