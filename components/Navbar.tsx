"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "About",    href: "/#about"    },
];


export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  return (
    <nav
      id="main-nav"
      className={`navbar${scrolled ? " scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-inner container">
        {/* Logo */}
        <a href="#" className="logo-group" aria-label="GarvinLabs home">
          <Image src="/logo-icon.svg"     alt=""            width={22} height={22} aria-hidden="true" />
          <Image src="/logo-wordmark.svg" alt="GarvinLabs"  width={100} height={22} />
        </a>

        {/* Desktop links + CTA */}
        <div className={`nav-links${menuOpen ? " open" : ""}`} role="menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/garvinchanderia"
            className="btn-secondary nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className={`hamburger${menuOpen ? " open" : ""}`} />
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
