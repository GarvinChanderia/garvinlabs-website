import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transport Platform — SaaS Design",
  description: "How GarvinLabs designed a 3-sided SaaS platform for a subscription transport startup running its operations on Google Forms.",
};

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="case-hero">
          <div className="container">
            <Link href="/demos" className="case-back reveal">
              ← All demos
            </Link>
            <div className="reveal" style={{ maxWidth: 760, marginTop: 24 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>SaaS · Transport
              </span>
              <h1 className="h2" style={{ marginTop: 18 }}>
                Transport Platform
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                A subscription transport startup with real traction but no platform to run on. We designed the system that could carry it forward.
              </p>
            </div>
            <div className="case-meta reveal">
              <div className="case-meta-item">
                <div className="case-meta-label">Sector</div>
                <div className="case-meta-value">Shared Transport / Mobility</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Type</div>
                <div className="case-meta-value">SaaS Design & Architecture</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Platform sides</div>
                <div className="case-meta-value">3 — Commuter, Provider, Admin</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Previous setup</div>
                <div className="case-meta-value">Google Forms</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-body">
          <div className="container case-content">
            <div className="case-block reveal">
              <h2 className="case-section-title">The Problem</h2>
              <p>
                The client connects daily commuters to fixed-route shared vehicles on a high-demand urban corridor. It isn't an aggregator or ride-hailing service — it's a subscription model: commuters pay for a seat on a recurring route, providers manage fleets of scheduled vehicles.
              </p>
              <p>
                The business had a real product and real demand. What it didn't have was a platform. Registration happened through Google Forms. Subscriptions were tracked manually. Providers had no dashboard. The admin team had no visibility into who was riding, who was paying, or which routes were full.
              </p>
              <p>
                As the network grew, the manual overhead was becoming the ceiling.
              </p>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">What We Built</h2>
              <p>
                We designed and proposed a full 3-sided SaaS platform, scoped to two delivery tiers based on the client's go-to-market timeline.
              </p>
              <ul className="case-list">
                <li>
                  <strong>Commuter side</strong> — Route discovery, seat selection, subscription checkout, and a personal dashboard to manage recurring bookings.
                </li>
                <li>
                  <strong>Provider side</strong> — Fleet and driver management, route creation, live subscriber view, attendance coordination, and a revenue dashboard.
                </li>
                <li>
                  <strong>Admin side</strong> — Provider verification, route moderation, dispute resolution, payout management, and platform-level analytics.
                </li>
                <li>
                  <strong>Infrastructure</strong> — Razorpay billing with automated platform fee deduction, JWT authentication, seat tracking, and push notifications.
                </li>
              </ul>
              <p>
                The architecture was designed for the fixed-route, scheduled model — not adapted from an on-demand template. The platform needed to reflect how subscription transport actually works, not how ride-hailing works.
              </p>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">The Result</h2>
              <p>
                A full platform architecture — covering every user journey, every edge case, and the billing engine — was delivered as a structured proposal with two tiers: a fast-to-market MVP and an investor-ready full build.
              </p>
              <p>
                The engagement also included an earlier project: the client's marketing website with integrated registration flows, which was completed and well-received — and led directly to the SaaS engagement.
              </p>
            </div>

            <div className="case-cta reveal">
              <p>Building a platform or marketplace?</p>
              <a href="/#cta" className="btn btn-green btn-lg">
                Book a free diagnostic
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
