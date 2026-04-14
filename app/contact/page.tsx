import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free landing page audit from GarvinLabs. Send your URL via WhatsApp or email — response within 24 hours. Based in Pune, India.",
  alternates: { canonical: "https://garvinlabs.vercel.app/contact" },
  openGraph: {
    title: "Contact | GarvinLabs",
    description:
      "Get a free conversion audit. Drop your URL — I'll send a PDF showing every issue and how to fix it.",
    url: "https://garvinlabs.vercel.app/contact",
  },
};

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%20want%20a%20free%20landing%20page%20audit";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get your free audit.
            </h1>
            <p className="text-xl text-[#A0A0A0]">
              Send me your landing page URL. I&apos;ll tell you what&apos;s costing you conversions.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left: How it works */}
              <div>
                <h2
                  className="text-sm font-semibold text-[#00AE43] uppercase tracking-widest mb-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  How To Get Started
                </h2>

                <div className="space-y-10">
                  <div className="pb-10 border-b border-[#222222]">
                    <div
                      className="text-3xl font-bold text-[#00AE43]/20 mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      01
                    </div>
                    <h3
                      className="text-lg font-bold text-[#F5F5F5] mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Send me your URL
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                      WhatsApp is fastest. Just drop your landing page link with a quick note
                      about what you sell and who your customers are.
                    </p>
                  </div>

                  <div className="pb-10 border-b border-[#222222]">
                    <div
                      className="text-3xl font-bold text-[#00AE43]/20 mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      02
                    </div>
                    <h3
                      className="text-lg font-bold text-[#F5F5F5] mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      I send you a PDF audit
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                      Within 48 hours, you get a detailed PDF report walking through
                      every conversion issue on your page — with annotated screenshots and the exact fix for each one.
                    </p>
                  </div>

                  <div>
                    <div
                      className="text-3xl font-bold text-[#00AE43]/20 mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      03
                    </div>
                    <h3
                      className="text-lg font-bold text-[#F5F5F5] mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      You decide what&apos;s next
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                      Fix the issues yourself with my recommendations, or hire me
                      to implement everything in a Conversion Sprint (5-7 days). No pressure either way.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Contact Info */}
              <div>
                <h2
                  className="text-sm font-semibold text-[#00AE43] uppercase tracking-widest mb-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Reach Out
                </h2>
                <ul className="space-y-8 mb-12">
                  <li className="pb-8 border-b border-[#222222]">
                    <div
                      className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      WhatsApp (fastest)
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5F5F5] hover:text-[#00AE43] transition-colors font-medium"
                    >
                      +91 93562 49535
                    </a>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div
                      className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:labs.garvin@gmail.com"
                      className="text-[#F5F5F5] hover:text-[#00AE43] transition-colors font-medium"
                    >
                      labs.garvin@gmail.com
                    </a>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div
                      className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Location
                    </div>
                    <span className="text-[#F5F5F5] font-medium">Pune, India</span>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div
                      className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Availability
                    </div>
                    <span className="text-[#4ADE80] font-medium text-sm">
                      5 free audit slots this week
                    </span>
                  </li>
                  <li>
                    <div
                      className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Response Time
                    </div>
                    <span className="text-[#F5F5F5] font-medium">Within 24 hours</span>
                  </li>
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#00AE43] hover:bg-[#00C94E] text-[#0A0A0A] font-semibold py-4 text-center transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Get Your Free Audit on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
