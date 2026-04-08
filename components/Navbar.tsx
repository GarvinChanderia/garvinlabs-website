"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Automation", href: "/services/automation" },
    { label: "Lead Engines", href: "/services/lead-engines" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.svg" alt="GarvinLabs" width={32} height={32} priority />
          <span
            className="text-lg font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Garvin<span className="text-[#D4A853]">Labs</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] text-sm font-semibold px-5 py-2.5 transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#F5F5F5]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#222222]">
          <div className="px-6 py-5 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] text-sm font-semibold px-5 py-3 text-center transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
