import Image from "next/image";

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
          <div className="hero-eyebrow">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              AI Consulting &amp; Implementation · Fixed Price · 2–4 Week Delivery
            </span>
          </div>
          <h1 className="display hero-headline">
            Find where <span className="accent">AI actually fits</span> in your business. Then ship the systems.
          </h1>
          <p className="hero-sub">
            Most teams have the tools. What they&apos;re missing is the map: where AI moves the
            needle, and where it&apos;s a distraction. We diagnose the gap, then build the systems
            that close it. Fixed price. No retainers. No strategy decks.
          </p>
          <div className="hero-actions">
            <a href="/pdf?pdf=saas" className="btn btn-green btn-lg">
              Get the free teardown <Arrow />
            </a>
            <a href="#offers" className="btn btn-glass btn-lg">
              See the offers
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
        <div className="hero-card reveal">
          <div className="hero-card-label">Free · No call required</div>
          <h2>Pick your teardown.</h2>
          <p>
            A written map of the biggest AI + automation opportunities in your stack, delivered
            straight to your inbox. No strategy call to unlock it.
          </p>
          <div className="hero-pdf-picker">
            <a href="/pdf?pdf=saas" className="hero-pdf-option">
              <div className="hero-pdf-cover">
                <Image
                  src="/website-images/pdf-saas-cover.png"
                  alt="SaaS teardown cover"
                  width={160}
                  height={208}
                  loading="lazy"
                />
              </div>
              <div className="hero-pdf-text">
                <span className="hero-pdf-tag">For SaaS Teams</span>
                <strong>Where hours die in SaaS ops, and the 5 systems that fix it</strong>
              </div>
              <svg className="hero-pdf-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="/pdf?pdf=d2c" className="hero-pdf-option">
              <div className="hero-pdf-cover">
                <Image
                  src="/website-images/pdf-d2c-cover.png"
                  alt="D2C teardown cover"
                  width={160}
                  height={208}
                  loading="lazy"
                />
              </div>
              <div className="hero-pdf-text">
                <span className="hero-pdf-tag">For D2C Brands</span>
                <strong>The 4 revenue leaks, with recovery estimates per leak</strong>
              </div>
              <svg className="hero-pdf-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
          <p className="hero-card-note">Sent to your inbox in minutes. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}
