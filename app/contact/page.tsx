import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EMAIL, MAILTO, LINKEDIN, BOOKING_URL } from "@/lib/constants";

const DESCRIPTION =
  "Looking for more customers? Tell GarvinLabs what services you provide and which markets you serve. Book a 30-minute call or email us.";

export const metadata: Metadata = {
  title: "Contact GarvinLabs",
  description: DESCRIPTION,
  alternates: { canonical: "https://garvinlabs.com/contact" },
  openGraph: {
    title: "Contact GarvinLabs",
    description: DESCRIPTION,
    url: "https://garvinlabs.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact GarvinLabs",
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://garvinlabs.com/contact",
  name: "Contact GarvinLabs",
  mainEntity: { "@id": "https://garvinlabs.com/#organization" },
};

export default function Contact() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>How do you contact GarvinLabs?</strong>
        <p>
          Book a 30-minute call directly, or email {EMAIL}. Tell us what services you provide and
          which markets you serve.
        </p>
      </aside>

      <Navbar />

      <section className="container section" aria-label="Contact" style={{ maxWidth: "800px" }}>
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title">
          Looking for more customers? Tell us what services you provide and which markets you serve.
        </h1>

        {/* ── PRIMARY CTAS ────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ textDecoration: "none" }}
          >
            <p className="stat-label" style={{ marginBottom: "0.75rem" }}>Book a call</p>
            <p style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)" }}>
              30-minute call
            </p>
          </a>

          <a href={MAILTO} className="card" style={{ textDecoration: "none" }}>
            <p className="stat-label" style={{ marginBottom: "0.75rem" }}>Email</p>
            <p style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)" }}>
              {EMAIL}
            </p>
          </a>
        </div>

        {/* ── SOCIALS (secondary) ─────────────────────────────── */}
        <div style={{ marginTop: "3rem" }}>
          <h2 className="footer-heading" style={{ marginBottom: "1rem" }}>Elsewhere</h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-chip">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
