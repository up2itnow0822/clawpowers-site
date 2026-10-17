import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="aae-header">
      <a className="skip-link" href="#rebuild">
        Skip to content
      </a>
      <Link href="/" className="aae-wordmark">
        <img src="/brand/app-icon.png" alt="" width={28} height={33} />
        <span>AI Agent Economy LLC</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="aae-footer">
      <span>© 2026 AI Agent Economy LLC</span>
      <a href="https://www.ai-agent-economy.com">ai-agent-economy.com</a>
      <Link href="/archive/clawpowers">ClawPowers archive</Link>
    </footer>
  );
}
