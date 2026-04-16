export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            Garvin<em>Labs.</em>
          </div>
          <div className="footer-links">
            <a href="mailto:labs.garvin@gmail.com">Email</a>
            <a href="https://wa.me/919356249535">WhatsApp</a>
            <a href="#offers">Offers</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>© {new Date().getFullYear()} GarvinLabs · Pune, India</div>
        </div>
      </div>
    </footer>
  );
}
