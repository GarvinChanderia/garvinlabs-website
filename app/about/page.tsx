import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BOOKING_URL, EMAIL, MAILTO } from "@/lib/constants";

const DESCRIPTION =
  "GarvinLabs connects businesses with qualified service providers when they're actively looking to buy, built on an enterprise architecture and analytics background.";

export const metadata: Metadata = {
  title: "About GarvinLabs",
  description: DESCRIPTION,
  alternates: { canonical: "https://garvinlabs.com/about" },
  openGraph: {
    title: "About GarvinLabs",
    description: DESCRIPTION,
    url: "https://garvinlabs.com/about",
    images: [{ url: "/website-images/founder-portrait.png", width: 1200, height: 630, alt: "GarvinLabs founder Garvin Chanderia" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GarvinLabs",
    description: DESCRIPTION,
    images: ["/website-images/founder-portrait.png"],
  },
};

// Facts from Garvin's CV. Dates are deliberately left off.
const EXPERIENCE = [
  {
    role: "Product Consultant, Enterprise Architecture Platforms",
    org: "Invecto Technologies",
    points: [
      "Led discovery, roadmap and delivery of enterprise architecture platforms for CXO-level stakeholders",
      "Translated architect and EA team requirements into structured workflows, data models and dashboards",
      "Built and presented platform demos that shaped vendor buy or no-buy decisions",
    ],
  },
  {
    role: "Business Intelligence Developer",
    org: "Cummins",
    points: [
      "Delivered 30+ dashboards translating real-time plant operations into ERP-linked insight for leadership",
      "Automated recurring workflows with Power BI, Power Automate and Power Apps, cutting reporting turnaround by 40%",
      "Ran field visits to manufacturing sites to gather requirements and validate dashboards on the floor",
    ],
  },
  {
    role: "Data Analyst",
    org: "Cummins",
    points: [
      "Analyzed operational data trends across manufacturing and ERP workflows and delivered Power BI visualizations for stakeholders",
    ],
  },
  {
    role: "Founder",
    org: "ThrottleApp",
    points: [
      "Built a motorcycle road-trip app end to end: 200+ rider interviews, 10+ MVP features, 300+ organic downloads in 4 months",
    ],
  },
];

const CERTIFICATIONS = [
  "Avolution ABACUS (Enterprise Architecture)",
  "Databricks Lakehouse Architecture",
  "Google Data Analytics",
  "Google UX Design",
];

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://garvinlabs.com/about",
  mainEntity: { "@id": "https://garvinlabs.com/#garvin" },
};

const EYEBROW = {
  fontSize: "var(--type-caption2)",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#10B981",
  fontWeight: 700,
  marginBottom: "0.875rem",
  fontFamily: "var(--font-mono)",
};

const H2 = {
  fontSize: "var(--type-title1)",
  fontWeight: 700,
  color: "#f5f5f7",
  letterSpacing: "-0.02em",
  marginBottom: "2.5rem",
};

const BODY = { fontSize: "var(--type-body)", lineHeight: 1.75, color: "#a1a1a6", marginBottom: "1rem" };

const GLASS_CARD = {
  padding: "1.75rem 2rem",
  borderRadius: "var(--radius-card)",
  background: "var(--glass-medium-bg)",
  backdropFilter: "var(--glass-medium-blur)",
  WebkitBackdropFilter: "var(--glass-medium-blur)",
  border: "var(--glass-medium-border)",
};

export default function About() {
  return (
    <main style={{ background: "#0d0d0d", color: "#f5f5f7", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>Who is GarvinLabs?</strong>
        <p>
          GarvinLabs connects businesses with qualified service providers when they&apos;re
          actively looking to buy, in three markets: OSHA safety and compliance, commercial
          fit-outs, and warehouse automation. It is built on the enterprise architecture and
          analytics background of its founder, Garvin Chanderia: CXO-level enterprise architecture
          consulting, and BI development on plant and ERP data at Cummins.
        </p>
      </aside>
      <Navbar />

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section
        style={{ background: "#0d0d0d", padding: "6rem 0 5rem", position: "relative", overflow: "hidden" }}
        aria-label="About GarvinLabs"
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="about-hero-grid">
            <div className="about-hero-portrait">
              <Image
                src="/website-images/founder-portrait.png"
                alt="GarvinLabs founder Garvin Chanderia"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 90vw, 300px"
                priority
              />
            </div>

            <div>
              <p style={EYEBROW}>About</p>
              <h1
                style={{
                  fontSize: "var(--type-large-title)",
                  fontWeight: 700,
                  color: "#f5f5f7",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                GarvinLabs
              </h1>
              <p style={{ fontSize: "var(--type-footnote)", color: "#6b7280", marginBottom: "1.5rem", fontFamily: "var(--font-mono)" }}>
                Founder: Garvin Chanderia
              </p>
              <p style={BODY}>
                GarvinLabs connects businesses with qualified service providers when they&apos;re
                actively looking to buy. We work in three markets: OSHA safety and compliance,
                commercial fit-outs, and warehouse automation.
              </p>
              <p style={BODY}>
                The method comes from enterprise architecture and analytics: working out how
                systems, data and buying decisions actually connect inside an organisation before
                deciding what should change. We point the same discipline at a market. Read the
                signal, confirm the fit, then make the introduction.
              </p>
              <p style={{ ...BODY, marginBottom: "2rem" }}>
                Every introduction is checked against what the provider actually delivers. If it
                doesn&apos;t fit, it doesn&apos;t get sent.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a 30-minute call
                </a>
                <a href={MAILTO} className="btn-secondary">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────── */}
      <section
        style={{ background: "#0d0d0d", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Experience"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={EYEBROW}>Experience</p>
          <h2 style={H2}>Where this comes from.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {EXPERIENCE.map((job) => (
              <div key={job.role} style={GLASS_CARD}>
                <h3
                  style={{
                    fontSize: "var(--type-title3)",
                    fontWeight: 700,
                    color: "#f5f5f7",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                  }}
                >
                  {job.role}
                  <span style={{ color: "#10B981", fontWeight: 500 }}> · {job.org}</span>
                </h3>
                <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {job.points.map((p) => (
                    <li key={p} style={{ fontSize: "var(--type-callout)", lineHeight: 1.65, color: "#a1a1a6" }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTIFICATIONS ─────────────────────────── */}
      <section
        style={{ background: "#050505", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        aria-label="Education and Certifications"
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={EYEBROW}>Education &amp; Certifications</p>
          <h2 style={H2}>Background.</h2>

          <div style={{ ...GLASS_CARD, marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "var(--type-title3)", fontWeight: 700, color: "#f5f5f7", marginBottom: "0.4rem" }}>
              B.Tech, Computer Science
            </h3>
            <p style={{ fontSize: "var(--type-caption1)", fontFamily: "var(--font-mono)", color: "#6b7280" }}>
              MIT ADT University, Pune
            </p>
          </div>

          <div style={GLASS_CARD}>
            <h3 style={{ fontSize: "var(--type-title3)", fontWeight: 700, color: "#f5f5f7", marginBottom: "1rem" }}>
              Certifications
            </h3>
            <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {CERTIFICATIONS.map((c) => (
                <li key={c} style={{ fontSize: "var(--type-callout)", lineHeight: 1.65, color: "#a1a1a6" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section
        style={{ background: "#0d0d0d", padding: "6rem 0 7rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}
        aria-label="Get in touch"
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2 style={{ ...H2, marginBottom: "2rem" }}>
            Looking for more customers? Tell us what services you provide and which markets you serve.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a 30-minute call
            </a>
            <a href={MAILTO} className="btn-secondary">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
