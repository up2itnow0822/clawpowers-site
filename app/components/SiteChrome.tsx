import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="aae-header">
      <a className="skip-link" href="#rebuild">
        Skip to content
      </a>
      <div className="aae-wordmark">
        <img src="/brand/app-icon.png" alt="" width={28} height={33} />
        <span>AI Agent Economy LLC</span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="aae-footer">
      <span>© 2026 AI Agent Economy LLC</span>
      <span>ai-agent-economy.com</span>
      <Link href="/archive/clawpowers">ClawPowers archive</Link>
    </footer>
  );
}
