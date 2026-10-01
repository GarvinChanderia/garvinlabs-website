import Image from "next/image";
import Link from "next/link";
import { LINKEDIN, MAILTO, EMAIL, BOOKING_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-grid">
        {/* Brand column */}
        <div className="footer-col">
          <div className="logo-group mb-1">
            <Image
              src="/logo-wordmark.svg"
              alt="GarvinLabs"
              width={120}
              height={17}
            />
          </div>
          <p className="footer-tagline">
            We connect businesses with qualified service providers when
            they&apos;re actively looking to buy.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-links-list">
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-links-list">
            <li><a href={MAILTO}>{EMAIL}</a></li>
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a 30-minute call
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} GarvinLabs. All rights reserved.</p>
      </div>
    </footer>
  );
}
