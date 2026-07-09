import Image from "next/image";
import Link from "next/link";
import {
  LINKEDIN,
  INSTAGRAM,
  X_URL,
  THREADS_URL,
  MAILTO,
  EMAIL,
  PHONE_TEL,
  PHONE_DISPLAY,
} from "@/lib/constants";

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
            Operations automation for D2C brands.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/demos">Builds</Link></li>
            <li><Link href="/resources">Resources</Link></li>
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
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={X_URL} target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
            </li>
            <li>
              <a href={THREADS_URL} target="_blank" rel="noopener noreferrer">
                Threads
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-links-list">
            <li><a href={MAILTO}>{EMAIL}</a></li>
            <li><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Garvin Chanderia. All rights reserved.</p>
      </div>
    </footer>
  );
}
