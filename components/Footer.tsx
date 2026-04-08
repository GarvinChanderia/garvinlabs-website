import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

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
                Garvin<span className="text-[#D4A853]">Labs</span>
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              n8n automation workflows and AI-powered lead generation engines for businesses
              that want to grow without adding headcount.
            </p>
            <p className="mt-4 text-[#A0A0A0] text-sm">Pune, India</p>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/automation"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  n8n Automation Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lead-engines"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Lead Generation Engines
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Work
                </Link>
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
                  className="text-sm text-[#A0A0A0] hover:text-[#D4A853] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:labs.garvin@gmail.com"
                  className="text-sm text-[#A0A0A0] hover:text-[#D4A853] transition-colors"
                >
                  labs.garvin@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0A0A0]">
            © {new Date().getFullYear()} GarvinLabs. All rights reserved.
          </p>
          <p className="text-xs text-[#A0A0A0]">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
