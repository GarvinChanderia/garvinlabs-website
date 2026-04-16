const WA_CTA =
  "https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+book+the+%24200+Diagnostic.+%5Bsource%3A+cta-main%5D";

export function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta-inner reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>2 Diagnostic slots open this month
          </span>
          <h2 className="h2">See where AI fits. Then decide.</h2>
          <p className="lead">
            Book the $200 Diagnostic. In 72 hours, you&apos;ll have a written map of where AI and
            automation can meaningfully move the needle in your business, with scope and cost for
            each. If it doesn&apos;t surface a clear, worth-building opportunity, it&apos;s free.
          </p>
          <div className="cta-actions">
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener"
              className="btn btn-green btn-lg"
            >
              Book the $200 Diagnostic{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="mailto:labs.garvin@gmail.com"
              className="btn btn-glass btn-lg"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              Email instead
            </a>
          </div>
          <p className="cta-contact">
            Prefer WhatsApp? Message <a href="https://wa.me/919356249535">+91 93562 49535</a>
          </p>
        </div>
      </div>
    </section>
  );
}
