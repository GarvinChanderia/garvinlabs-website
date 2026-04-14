import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%20want%20a%20free%20landing%20page%20audit";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/icon.svg" alt="GarvinLabs" width={28} height={28} />
              <span
                className="text-lg font-bold text-[#F5F5F5]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Garvin<span className="text-[#00AE43]">Labs</span>
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              Conversion optimization for businesses losing customers to bad funnels.
              Specific problems. Specific fixes. 5-10 days.
            </p>
            <p className="mt-4 text-[#A0A0A0] text-sm">Pune, India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#packages"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#proof"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Proof
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A0A0] hover:text-[#00AE43] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:labs.garvin@gmail.com"
                  className="text-sm text-[#A0A0A0] hover:text-[#00AE43] transition-colors"
                >
                  labs.garvin@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Get a Free Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0A0A0]">
            &copy; {new Date().getFullYear()} GarvinLabs. All rights reserved.
          </p>
          <p className="text-xs text-[#A0A0A0]">Built with Next.js &middot; Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
