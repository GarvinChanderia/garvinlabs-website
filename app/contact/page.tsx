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
  title: "Contact",
  description: "Get in touch with Garvin Chanderia by email or phone.",
};

export default function Contact() {
  return (
    <main>
      <Navbar />

      <div className="container section" style={{ maxWidth: "800px" }}>
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
          <h3 className="footer-heading" style={{ marginBottom: "1rem" }}>Elsewhere</h3>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="mono-tag">
              LinkedIn
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mono-tag">
              Instagram
            </a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" className="mono-tag">
              X
            </a>
            <a href={THREADS_URL} target="_blank" rel="noopener noreferrer" className="mono-tag">
              Threads
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
