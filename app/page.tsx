import { Hero } from "./components/Hero";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const liveChips = ["Agent-native", "Protocol-first", "Borderless finance", "Future-proof"] as const;

export default function HomePage() {
  return (
    <div className="aae-root">
      <SiteHeader />
      <Hero />
      <main id="rebuild" className="aae-live">
        <div className="aae-banner">
          <img
            src="/brand/live/banner.jpg"
            srcSet="/brand/live/banner-830.jpg 830w, /brand/live/banner.jpg 1660w"
            sizes="(max-width: 1200px) 100vw, 1200px"
            width={1660}
            height={514}
            alt="AI Agent Economy LLC — Building the financial rails for the agentic economy"
          />
        </div>
        <p className="aae-tagline-live">Building the financial rails for the agentic economy.</p>
        <p className="aae-status">
          <span className="aae-pulse" aria-hidden="true" />
          We&apos;re rebuilding this site. More coming soon.
        </p>
        <ul className="aae-chips">
          {liveChips.map((label) => (
            <li key={label}>
              <b>/</b>
              {label}
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
