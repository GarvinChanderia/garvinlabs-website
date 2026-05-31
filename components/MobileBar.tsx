import { CALENDLY, MAILTO } from "@/lib/constants";

export function MobileBar() {
  return (
    <div className="mobile-bar" role="complementary" aria-label="Quick actions">
      <div className="m-label">
        <strong>Book the $500 Diagnostic</strong>Full refund if not useful
      </div>
      <div className="m-actions">
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-green m-btn">
          Book now
        </a>
        <a href={MAILTO} className="btn btn-ghost m-btn">
          Email
        </a>
      </div>
    </div>
  );
}
