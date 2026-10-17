import { Hero } from "./components/Hero";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const liveTraits = [
  ["Agent-native", "Built so autonomous agents can transact, route, and settle without a human in every loop."],
  ["Protocol-first", "Rails before products. Interfaces that other agents and operators can trust."],
  ["Borderless finance", "Value that can move across venues, networks, and jurisdictions."],
  ["Future-proof", "Infrastructure meant to outlast a single model generation or market cycle."],
] as const;

const brandTraits = [
  "Ruggedly oriented",
  "Globally functioned",
  "Protocol first",
  "Agent native",
  "Borderless finance",
  "Historic foundation",
  "Future proof",
] as const;

export default function HomePage() {
  return (
    <div className="aae-root">
      <SiteHeader />
      <Hero />
      <main>
        <section className="aae-band" id="rebuild">
          <p className="aae-tagline-live">Building the financial rails for the agentic economy.</p>
          <p className="aae-status">
            <span className="aae-pulse" aria-hidden="true" />
            We&apos;re rebuilding this site. More coming soon.
          </p>
        </section>

        <section className="aae-section" aria-labelledby="traits-heading">
          <p className="aae-kicker" id="traits-heading">
            Live holding signals
          </p>
          <ul className="aae-chips">
            {liveTraits.map(([label]) => (
              <li key={label}>
                <b>/</b>
                {label}
              </li>
            ))}
          </ul>
          <div className="aae-cards">
            {liveTraits.map(([label, body]) => (
              <article key={label} className="aae-card">
                <h2>{label}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="aae-section aae-section-dim" aria-labelledby="brand-heading">
          <p className="aae-kicker" id="brand-heading">
            Key traits
          </p>
          <h2 className="aae-section-title">Ancient routes. Autonomous futures.</h2>
          <p className="aae-body">
            Same human drive. Wealth through movement. Power through infrastructure. Agents without borders.
          </p>
          <ul className="aae-trait-grid">
            {brandTraits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
