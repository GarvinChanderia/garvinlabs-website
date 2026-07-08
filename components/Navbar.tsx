"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",      href: "/"          },
  { label: "Builds",    href: "/demos"     },
  { label: "Resources", href: "/resources" },
  { label: "About",     href: "/about"     },
  { label: "Contact",   href: "/contact"   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      id="main-nav"
      className={`navbar${scrolled ? " scrolled navbar-liquid" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-inner container">
        {/* Logo */}
        <Link href="/" className="logo-group" aria-label="GarvinLabs home">
          <Image src="/logo-wordmark.svg" alt="GarvinLabs" width={130} height={18} />
        </Link>

        {/* Desktop links + CTA */}
        <div className={`nav-links${menuOpen ? " open" : ""}`} role="menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href) ? " active" : ""}`}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/garvinchanderia"
            className="btn-primary nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn ↗
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
