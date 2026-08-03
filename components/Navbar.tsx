"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const TOP_LINKS = [
  { label: "Home",          href: "/"              },
  { label: "Builds",        href: "/demos"         },
  { label: "Case Studies",  href: "/case-studies"  },
  { label: "When AI Fails", href: "/when-ai-fails" },
];

const MORE_LINKS = [
  { label: "Resources", href: "/resources" },
  { label: "Blog",       href: "/blog"      },
  { label: "About",      href: "/about"     },
  { label: "Contact",    href: "/contact"   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [moreOpen,  setMoreOpen]  = useState(false);
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

  // close "More" dropdown on outside click
  useEffect(() => {
    if (!moreOpen) return;
    const close = (e: MouseEvent) => {
      const dropdown = document.getElementById("nav-more-dropdown");
      if (dropdown && !dropdown.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [moreOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const moreActive = MORE_LINKS.some((link) => isActive(link.href));

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
          {TOP_LINKS.map((link) => (
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

          <div
            id="nav-more-dropdown"
            className={`nav-dropdown${moreOpen ? " open" : ""}`}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger${moreActive ? " active" : ""}`}
              onClick={() => setMoreOpen((o) => !o)}
              aria-haspopup="menu"
              aria-expanded={moreOpen}
            >
              More
              <svg className="nav-dropdown-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-panel" role="menu">
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive(link.href) ? " active" : ""}`}
                  role="menuitem"
                  onClick={() => {
                    setMoreOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

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
