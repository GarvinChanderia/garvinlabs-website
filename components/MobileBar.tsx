const WA_MOBILE =
  "https://wa.me/919356249535?text=Hi+Garvin%2C+I+want+to+book+the+%24200+Diagnostic.+%5Bsource%3A+mobile-bar%5D";

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="m-label">
        <strong>$200 Diagnostic</strong>Delivered in 72 hours
      </div>
      <a
        href={WA_MOBILE}
        target="_blank"
        rel="noopener"
        className="btn btn-green"
        style={{ padding: "14px 22px", minHeight: 48, fontSize: 14 }}
      >
        Book now
      </a>
    </div>
  );
}
