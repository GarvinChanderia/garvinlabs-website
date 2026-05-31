import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Revenue Engine",
  description: "How GarvinLabs built a fully automated outreach system for 100+ dental clinics — personalised live previews deployed before the first email was sent.",
};

export default function DentalPage() {
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
                <span className="eyebrow-dot"></span>Automation · Healthcare
              </span>
              <h1 className="h2" style={{ marginTop: 18 }}>
                Dental Revenue Engine
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                A fully automated system to find, personalise, and reach out to dental clinics without a web presence — at nearly zero cost.
              </p>
            </div>
            <div className="case-meta reveal">
              <div className="case-meta-item">
                <div className="case-meta-label">Sector</div>
                <div className="case-meta-value">Healthcare / Dental</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Type</div>
                <div className="case-meta-value">Outreach Automation</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Output</div>
                <div className="case-meta-value">100+ personalised pages deployed</div>
              </div>
              <div className="case-meta-item">
                <div className="case-meta-label">Infrastructure cost</div>
                <div className="case-meta-value">~₹91</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-body">
          <div className="container case-content">
            <div className="case-block reveal">
              <h2 className="case-section-title">The Problem</h2>
              <p>
                Hundreds of independent dental clinics across Pune, Mumbai, and Bengaluru were operating with no web presence at all — not even a landing page. They existed only on aggregator listings: Practo, JustDial, Google Maps. Patients who searched directly couldn't find them. Clinics that competitors served more digitally were winning by default.
              </p>
              <p>
                The clinics knew they needed a website. But the process of finding a developer, scoping the project, reviewing designs, and waiting weeks for delivery felt like too much friction for a practice owner who was already operating at capacity.
              </p>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">What We Built</h2>
              <p>
                An end-to-end automated pipeline that removed every friction point — for both sides.
              </p>
              <ul className="case-list">
                <li>
                  <strong>Lead Discovery</strong> — AI-powered search identified 100+ qualified dental clinics (rating 4.0+, aggregator-only listings, no independent site) across six cities.
                </li>
                <li>
                  <strong>Personalised Preview Generation</strong> — Before a single email was sent, a fully-functional, mobile-first website preview was generated and deployed live for each clinic. The dentist could see their own site before being asked anything.
                </li>
                <li>
                  <strong>Automated Outreach</strong> — Custom email sequences were sent with unique live preview links per recipient. No generic pitches. Each email referenced the clinic by name with a working URL.
                </li>
                <li>
                  <strong>Reply Monitoring</strong> — An automated forwarding rule pushed inbound replies to Telegram and iMessage in real time, so no response was missed.
                </li>
              </ul>
            </div>

            <div className="case-block reveal">
              <h2 className="case-section-title">The Result</h2>
              <p>
                Over 100 personalised, live website previews were deployed across Pune, Mumbai, Bengaluru, and a national cohort — all before the first outreach email went out. The entire pipeline ran autonomously. Infrastructure cost for the full run was under ₹100.
              </p>
              <p>
                The project demonstrated that high-quality, personalised outreach at scale is achievable without a team, a budget, or manual effort — when the right automation architecture is in place.
              </p>
            </div>

            <div className="case-cta reveal">
              <p>Working on something similar?</p>
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
