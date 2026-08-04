import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  EMAIL,
  MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
  LINKEDIN,
  INSTAGRAM,
  X_URL,
  THREADS_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Garvin Chanderia | GarvinLabs",
  description: "Get in touch with Garvin Chanderia by email or phone.",
  alternates: { canonical: "https://garvinlabs.com/contact" },
  openGraph: {
    title: "Contact Garvin Chanderia | GarvinLabs",
    description: "Get in touch with Garvin Chanderia by email or phone.",
    url: "https://garvinlabs.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Garvin Chanderia | GarvinLabs",
    description: "Get in touch with Garvin Chanderia by email or phone.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://garvinlabs.com/contact",
  name: "Contact Garvin Chanderia | GarvinLabs",
  mainEntity: { "@id": "https://garvinlabs.com/#garvin" },
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
        <strong>How do you contact Garvin Chanderia?</strong>
        <p>
          Email ({EMAIL}) or phone ({PHONE_DISPLAY}) are the fastest routes. He&apos;s also
          reachable on LinkedIn, Instagram, X/Twitter, and Threads.
        </p>
      </aside>
      <Navbar />

      <section className="container section" aria-label="Contact" style={{ maxWidth: "800px" }}>
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title">Get in touch.</h1>
        <p className="lead" style={{ marginTop: "1rem", maxWidth: "640px" }}>
          The fastest way to reach me is email or phone.
        </p>

        {/* ── PRIMARY CTAS ────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          <a href={MAILTO} className="card" style={{ textDecoration: "none" }}>
            <p className="stat-label" style={{ marginBottom: "0.75rem" }}>Email</p>
            <p style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)" }}>
              {EMAIL}
            </p>
          </a>
          <a href={PHONE_TEL} className="card" style={{ textDecoration: "none" }}>
            <p className="stat-label" style={{ marginBottom: "0.75rem" }}>Phone</p>
            <p style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)" }}>
              {PHONE_DISPLAY}
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
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-chip">
              Instagram
            </a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" className="social-chip">
              X / Twitter
            </a>
            <a href={THREADS_URL} target="_blank" rel="noopener noreferrer" className="social-chip">
              Threads
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
