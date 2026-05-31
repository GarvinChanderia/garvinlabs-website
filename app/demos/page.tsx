import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealScript } from "@/components/RevealScript";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demos",
  description: "Real client problems, real systems built. A selection of GarvinLabs projects across automation, SaaS, and operations.",
};

const projects = [
  {
    slug: "threadwave",
    tag: "Live Demo · AI Support Triage",
    headline: "A D2C brand's support inbox was drowning in repeat questions with no triage in place.",
    summary:
      "ThreadWave needed a support layer that could classify tickets, draft KB-grounded replies, and escalate edge cases — without hiring a support team. We built a two-pass Gemini pipeline on n8n that classifies, drafts, and responds in under 4 seconds. This is a live interactive demo.",
    outcome: "Live: classify → draft → respond in ~3s",
    industry: "D2C / Retail",
  },
  {
    slug: "dental-revenue-engine",
    tag: "Automation · Healthcare",
    headline: "100+ dental clinics had no web presence — and no way to fix it themselves.",
    summary:
      "Independent clinics were invisible to patients online. We built an end-to-end automated system that discovered leads, generated personalised live website previews per clinic, and ran the entire outreach pipeline — at nearly zero cost.",
    outcome: "100+ personalised pages deployed",
    industry: "Healthcare",
  },
  {
    slug: "transport-platform",
    tag: "SaaS · Transport",
    headline: "A subscription transport startup was running its entire operation on Google Forms.",
    summary:
      "Badi Bandi connects commuters to fixed-route vehicles on the Warangal–Hyderabad corridor. With no platform, they had no subscription management, no fleet visibility, and no commuter coordination. We designed and proposed a 3-sided SaaS to fix that.",
    outcome: "Full SaaS architecture designed & proposed",
    industry: "Transport",
  },
  {
    slug: "manufacturing-business",
    tag: "Consulting · Manufacturing",
    headline: "A heavy engineering manufacturer was taking 55–70 days to complete jobs that should take 25.",
    summary:
      "The delay wasn't people or machines — it was invisible. No job tracking, no documentation discipline, and chronic raw material gaps were compounding into 30+ day overruns every cycle. We mapped 26 business processes and delivered a prioritised transformation roadmap.",
    outcome: "Full ops audit + AI roadmap delivered",
    industry: "Manufacturing",
  },
];

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section style={{ paddingTop: 80, paddingBottom: 40 }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: 680 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Client Work
              </span>
              <h1 className="h2" style={{ marginTop: 18 }}>
                Real problems. Systems that actually shipped.
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                A selection of projects across automation, SaaS, and operations consulting. Names and sensitive details are kept confidential.
              </p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0, paddingBottom: 120 }}>
          <div className="container">
            <div className="demos-grid">
              {projects.map((p) => (
                <Link key={p.slug} href={`/demos/${p.slug}`} className="demo-card reveal">
                  <div className="demo-card-tag">{p.tag}</div>
                  <h2 className="demo-card-headline">{p.headline}</h2>
                  <p className="demo-card-summary">{p.summary}</p>
                  <div className="demo-card-footer">
                    <span className="demo-outcome">{p.outcome}</span>
                    <span className="demo-link">
                      View case study
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
