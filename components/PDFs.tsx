import Image from "next/image";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export function PDFs() {
  return (
    <section id="pdfs">
      <div className="container">
        <div className="pdf-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>Free Teardowns · Delivered to Your Inbox
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            See where AI actually fits, before you spend a dollar.
          </h2>
          <p className="lead">
            Two teardowns. Pick the one that matches your business. Each one maps the common gaps,
            the likely cost of ignoring them, and the systems worth considering.
          </p>
        </div>
        <div className="pdf-grid">
          <a href="/pdf?pdf=saas" className="pdf-card reveal" id="saas-pdf-card">
            <div className="copy">
              <span className="pdf-badge">For SaaS Teams</span>
              <h3 className="h3">
                Where 200+ hours/month die in SaaS ops, and the 5 systems that kill the drain.
              </h3>
              <p className="desc">
                The 5 most common manual-ops drains in SaaS teams of 20–200 people, the $ cost of
                each at scale, and the exact automated replacement, delivered as a working
                blueprint (not a strategy deck).
              </p>
              <span className="cta">
                Send me the SaaS teardown <Arrow />
              </span>
            </div>
            <div className="pdf-cover">
              <Image
                src="/website-images/pdf-saas-cover.png"
                alt="SaaS automation teardown"
                width={280}
                height={360}
              />
            </div>
          </a>
          <a href="/pdf?pdf=d2c" className="pdf-card reveal" id="d2c-pdf-card">
            <div className="copy">
              <span className="pdf-badge">For D2C Brands</span>
              <h3 className="h3">
                The 4 revenue leaks costing D2C brands $25K/month, with $ recovery estimates per leak.
              </h3>
              <p className="desc">
                The 4 biggest recoverable revenue leaks in D2C brands doing $1M+ revenue, dollar
                recovery estimates per leak, and the specific AI + messaging systems that seal each
                one.
              </p>
              <span className="cta">
                Send me the D2C teardown <Arrow />
              </span>
            </div>
            <div className="pdf-cover">
              <Image
                src="/website-images/pdf-d2c-cover.png"
                alt="D2C revenue leak teardown"
                width={280}
                height={360}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
