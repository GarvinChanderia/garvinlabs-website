"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar container${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <div className="logo-group">
        <Image src="/logo-icon.svg" alt="GarvinLabs logo" width={32} height={32} />
        <Image src="/logo-wordmark.svg" alt="GarvinLabs" width={140} height={32} />
      </div>
      <a
        href="https://calendly.com/labs-garvin/30min"
        className="btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Free 20-Min Call
      </a>
    </nav>
  );
}
