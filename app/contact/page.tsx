import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 20-minute strategy call with GarvinLabs or send a message. Based in Pune, India. Response within 24 hours.",
  alternates: { canonical: "https://garvinlabs.vercel.app/contact" },
  openGraph: {
    title: "Contact | GarvinLabs",
    description:
      "Book a free strategy call or drop a message. WhatsApp or email — we respond within 24 hours.",
    url: "https://garvinlabs.vercel.app/contact",
  },
};

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

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
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-[#A0A0A0]">
              Book a free 20-minute call or drop us a message.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left: Contact Info */}
              <div>
                <h2
                  className="text-sm font-semibold text-[#D4A853] uppercase tracking-widest mb-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Contact Info
                </h2>
                <ul className="space-y-8">
                  <li className="pb-8 border-b border-[#222222]">
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      WhatsApp
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5F5F5] hover:text-[#D4A853] transition-colors font-medium"
                    >
                      +91 93562 49535
                    </a>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      Email
                    </div>
                    <a
                      href="mailto:labs.garvin@gmail.com"
                      className="text-[#F5F5F5] hover:text-[#D4A853] transition-colors font-medium"
                    >
                      labs.garvin@gmail.com
                    </a>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      Location
                    </div>
                    <span className="text-[#F5F5F5] font-medium">Pune, India</span>
                  </li>
                  <li className="pb-8 border-b border-[#222222]">
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      Availability
                    </div>
                    <span className="text-[#4ADE80] font-medium text-sm">Currently accepting projects</span>
                  </li>
                  <li>
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                      Response Time
                    </div>
                    <span className="text-[#F5F5F5] font-medium">Within 24 hours</span>
                  </li>
                </ul>
              </div>

              {/* Right: Contact Form */}
              <div>
                <h2
                  className="text-sm font-semibold text-[#D4A853] uppercase tracking-widest mb-10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Send a Message
                </h2>
                <form
                  action="mailto:labs.garvin@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-[#111111] border border-[#222222] text-[#F5F5F5] px-4 py-3 text-sm focus:outline-none focus:border-[#D4A853] transition-colors placeholder-[#444444]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-[#111111] border border-[#222222] text-[#F5F5F5] px-4 py-3 text-sm focus:outline-none focus:border-[#D4A853] transition-colors placeholder-[#444444]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-[#111111] border border-[#222222] text-[#F5F5F5] px-4 py-3 text-sm focus:outline-none focus:border-[#D4A853] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="automation">Automation Build</option>
                      <option value="lead-gen">Lead Gen Engine</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs text-[#A0A0A0] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-[#111111] border border-[#222222] text-[#F5F5F5] px-4 py-3 text-sm focus:outline-none focus:border-[#D4A853] transition-colors placeholder-[#444444] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] font-semibold py-4 transition-colors"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-10 pt-10 border-t border-[#222222] text-center">
                  <p className="text-[#A0A0A0] text-sm mb-4">
                    Prefer WhatsApp? Most of our clients do.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-[#D4A853] text-[#D4A853] hover:bg-[#D4A853] hover:text-[#0A0A0A] font-semibold px-8 py-3 transition-all text-sm"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
