const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-copy reveal">
          <h1 className="display hero-headline">
            Find where <span className="accent">AI actually fits</span> in your business. Then ship the systems.
          </h1>
          <p className="hero-sub">
            Most teams have the tools. What they&apos;re missing is the map: where AI moves the
            needle, and where it&apos;s a distraction. I diagnose the gap, then build the systems
            that close it. Fixed price. No retainers. No strategy decks.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+book+the+%24200+Diagnostic.+%5Bsource%3A+hero%5D"
              target="_blank"
              rel="noopener"
              className="btn btn-green btn-lg"
            >
              Book the $200 Diagnostic <Arrow />
            </a>
            <a href="/pdf?pdf=saas" className="btn btn-glass btn-lg">
              Or get the free teardown
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <strong>25+</strong>
              <span>builds delivered</span>
            </div>
            <div className="trust-sep"></div>
            <div className="trust-item">
              <strong>938</strong>
              <span>pages automated for one client</span>
            </div>
            <div className="trust-sep"></div>
            <div className="trust-item">
              <strong>50/50</strong>
              <span>payment, no retainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
