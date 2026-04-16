export function Problems() {
  return (
    <section id="problem">
      <div className="container">
        <div className="problem-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>The Real Cost
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            Every month you wait is money on the floor.
          </h2>
          <p className="lead">
            Most tech-enabled businesses have the tools. What they don&apos;t have is the connective
            tissue between them. That gap costs you every single week, in wasted hours, missed
            revenue, and decisions made half-blind.
          </p>
        </div>
        <div className="problem-grid">
          <div className="problem-card reveal">
            <div className="problem-cost">
              $18K<span className="unit">/month wasted</span>
            </div>
            <p className="sub">
              Estimated cost of manual ops for a 50-person SaaS team at $40/hour.
            </p>
            <h3 className="h3">Manual work is eating your team&apos;s best hours.</h3>
            <ul className="problem-bullets">
              <li>Onboarding is part-manual. 40+ hours/month lost to checklists your team hates.</li>
              <li>Weekly reporting requires 3 people and half a day every Monday</li>
              <li>Support triage lands on engineers. No AI routing, no auto-resolution.</li>
              <li>Tools don&apos;t talk to each other without someone exporting CSVs</li>
              <li>Trial expirations and usage triggers run on humans, not systems</li>
            </ul>
          </div>
          <div className="problem-card reveal">
            <div className="problem-cost">
              $12–30K<span className="unit">/month leaking</span>
            </div>
            <p className="sub">
              Typical recoverable revenue for a D2C brand doing $1M+ annual.
            </p>
            <h3 className="h3">Revenue walks out the door after every sale.</h3>
            <ul className="problem-bullets">
              <li>70% of carts abandoned. Most brands recover under 3% of them.</li>
              <li>First-time buyers get no repeat trigger and simply don&apos;t come back</li>
              <li>Post-purchase communication ends at the shipping email</li>
              <li>Win-back campaigns are manual, infrequent, or just don&apos;t exist</li>
              <li>Zero visibility into which customers are about to churn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
