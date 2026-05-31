import { LINKEDIN, MAILTO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            Garvin<em>Labs.</em>
          </div>
          <div className="footer-links">
            <a href={MAILTO} aria-label="Email GarvinLabs">Email</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="GarvinLabs on LinkedIn">LinkedIn</a>
            <a href="#offers">Offers</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>© {new Date().getFullYear()} GarvinLabs · Pune, India</div>
        </div>
      </div>
    </footer>
  );
}
