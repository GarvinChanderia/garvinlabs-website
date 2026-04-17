const WA_DIAGNOSTIC =
  "https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+book+the+%24200+Diagnostic.+%5Bsource%3A+offer-diagnostic%5D";
const WA_BUILD =
  "https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+talk+about+an+AI+Implementation.+%5Bsource%3A+offer-build%5D";
const WA_FULL =
  "https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+talk+about+a+Full+System+Build.+%5Bsource%3A+offer-full%5D";

export function Offers() {
  return (
    <section id="offers">
      <div className="container">
        <div className="offers-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>Three Clear Offers
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            Pick the scope. Get the price. I build.
          </h2>
          <p className="lead">
            No hourly billing. No vague retainers. Each offer is fixed-price, fixed-scope, and
            delivered in a defined window. You know exactly what you&apos;re paying for before a
            dollar changes hands.
          </p>
        </div>
        <div className="offers-grid">
          <div className="offer-card featured reveal">
            <span className="offer-pill popular">Start Here</span>
            <h3 className="offer-name">Diagnostic</h3>
            <div className="offer-price">
              <span className="amount">$200</span>
              <span className="unit">flat</span>
            </div>
            <p className="offer-desc">
              A written opportunity map of your ops or revenue stack, delivered in 72 hours.
            </p>
            <ul className="offer-list">
              <li>Current-state map of your ops or revenue flow</li>
              <li>Top 3 automation opportunities, ranked by $ impact</li>
              <li>Effort and cost estimates per opportunity</li>
              <li>15–20 min Loom walkthrough</li>
              <li>A scoped, priced recommendation for what to build first</li>
            </ul>
            <a
              href={WA_DIAGNOSTIC}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Book the Diagnostic
            </a>
            <div className="offer-meta">
              <span>⏱ 72-hour delivery</span>
              <span>💳 50/50 payment</span>
            </div>
          </div>

          <div className="offer-card reveal">
            <span className="offer-pill standard">Most Popular</span>
            <h3 className="offer-name">AI Implementation</h3>
            <div className="offer-price">
              <span className="amount">$600–$2,400</span>
            </div>
            <p className="offer-desc">
              One to three connected AI + automation systems, built, tested, and handed off with
              documentation.
            </p>
            <ul className="offer-list">
              <li>Built around the Diagnostic&apos;s top opportunities</li>
              <li>1–3 connected workflows (onboarding, win-back, support triage, reporting, etc.)</li>
              <li>n8n + WhatsApp API + Shopify + Claude/GPT, whatever fits your stack</li>
              <li>Full documentation + a live walkthrough on delivery</li>
              <li>Working systems, not spec documents</li>
            </ul>
            <a href={WA_BUILD} target="_blank" rel="noopener" className="btn btn-green">
              Talk about a build
            </a>
            <div className="offer-meta">
              <span>⏱ 1–4 weeks</span>
              <span>💳 50/50 payment</span>
            </div>
          </div>

          <div className="offer-card reveal">
            <span className="offer-pill standard">For Scale</span>
            <h3 className="offer-name">Full System Build</h3>
            <div className="offer-price">
              <span className="amount">$6K–$12K</span>
            </div>
            <p className="offer-desc">
              Production-grade end-to-end automation across your entire ops or revenue stack.
            </p>
            <ul className="offer-list">
              <li>Complete automation layer, engineered for load</li>
              <li>QA + monitoring + runbooks for your team</li>
              <li>Integration with internal tools, CRMs, and data warehouses</li>
              <li>30-day post-launch support window included</li>
              <li>Requires a completed Diagnostic</li>
            </ul>
            <a href={WA_FULL} target="_blank" rel="noopener" className="btn btn-primary">
              Let&apos;s scope it
            </a>
            <div className="offer-meta">
              <span>⏱ 6–12 weeks</span>
              <span>💳 50/50 payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
