export function Guarantee() {
  return (
    <section id="guarantee">
      <div className="container">
        <div className="guarantee-card reveal">
          <div className="guarantee-shield">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h2>If the Diagnostic isn&apos;t useful, you don&apos;t pay.</h2>
            <p>
              If after the readout you don&apos;t see at least one clear, scoped opportunity worth
              building, I refund it in full. No forms. No friction. The goal is clarity, not to
              sell you a build you don&apos;t need.
            </p>
            <a
              href="https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+book+the+%24200+Diagnostic.+%5Bsource%3A+guarantee%5D"
              target="_blank"
              rel="noopener"
              className="btn btn-green"
              style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Book the $200 Diagnostic — if it&apos;s not useful, you pay nothing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
