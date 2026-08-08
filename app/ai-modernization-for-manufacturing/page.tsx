import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LINKEDIN } from "@/lib/constants";

const TITLE = "AI modernization for manufacturers: what a fit diagnostic finds";
const DESCRIPTION =
  "A structural steel manufacturer's order cycle ran 55 to 70 days against an ideal of 25 to 28. Mapping 26 processes across two plants found three root causes, none of them about the equipment.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-modernization-for-manufacturing" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/ai-modernization-for-manufacturing",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/ai-modernization-for-manufacturing/cover.svg",
        width: 1730,
        height: 909,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    name: "Garvin Chanderia",
    url: "https://garvinlabs.com",
  },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/ai-modernization-for-manufacturing",
  },
  image: "https://garvinlabs.com/ai-modernization-for-manufacturing/cover.svg",
};

export default function AiModernizationManufacturing() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What does AI modernization look like for a manufacturer?</strong>
        <p>
          For a manufacturer, AI modernization starts with mapping the actual order cycle before
          recommending any automation, since most delays trace back to process gaps, not equipment or
          headcount. In one diagnostic (Meridian Engineering, anonymized), a structural steel
          fabricator&apos;s order cycle ran 55 to 70 days against an ideal of 25 to 28. Three causes,
          no real-time job tracking, no documentation at point of work, no minimum-stock enforcement,
          accounted for the gap. Fixing the top two was estimated to recover 12 to 25 days, on paper,
          before any AI automation was scoped.
        </p>
      </aside>
      <Navbar />

      <article className="post-layout">
        <figure className="post-figure" style={{ marginTop: "2rem" }}>
          <Image
            src="/ai-modernization-for-manufacturing/cover.svg"
            alt="A factory silhouette next to a bar chart comparing a 55-70 day actual cycle time against a 25-28 day ideal"
            width={1730}
            height={909}
            sizes="(max-width: 1024px) 100vw, 880px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <Link href="/case-studies" className="post-back">← Case studies</Link>
          <p className="post-tag">AI Modernization · Manufacturing</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            A structural steel manufacturer&apos;s order cycle ran 55 to 70 days against
            an ideal of 25 to 28. Mapping 26 processes across two plants found three root
            causes, none of them about the equipment.
          </p>
        </header>

        <div className="post-body">
          <h2>Where manufacturing ops actually break</h2>
          <p>
            The instinct is to blame the floor: not enough people, not enough machines, not enough
            speed. In the one diagnostic run so far, none of the three root causes were about the
            workers or the equipment. They were about visibility: nobody could see a job falling
            behind until it was already late, paperwork got filled in retroactively instead of at the
            point of work, and stock ran out because nothing enforced a minimum.
          </p>

          <h2>One diagnostic: a structural steel manufacturer</h2>
          <p>
            Two plants, a recurring B2B customer base, and a director&apos;s complaint that orders were
            taking longer than they should, with long-standing customers starting to send their own QC
            inspectors instead of trusting the internal sign-off. Mapping all 26 steps of the
            order-to-cash cycle, building the org chart and a responsibility matrix, and measuring
            ideal against actual duration per step traced the gap to three specific causes instead of
            a guess.
          </p>
          <p>
            <strong>The numbers:</strong> 55 to 70 days actual cycle time against an ideal of 25 to 28.
            9 to 10 days lost before production even starts, on material shortage alone. 2 to 15 days
            lost at dispatch, waiting on documentation that should have been ready already. Fixing the
            top two issues was estimated to recover 12 to 25 days from the cycle.
          </p>

          <h2>What gets scoped after the diagnostic</h2>
          <p>
            The manual process comes first. Once daily job tracking and documentation discipline are
            in place to generate real data, four automations were scoped as a follow-on, each
            estimated at 2 to 6 hours of build time on tools the business already had: a live
            job-status dashboard, a payment-clock tracker with automatic escalation, a material
            reorder alert, and templated email automation for customer communication.
          </p>

          <h2>What this doesn&apos;t claim</h2>
          <p>
            This page describes one diagnostic engagement and the roadmap it produced. It is not a
            track record of delivered manufacturing automations, and whether the four scoped builds
            were actually implemented hasn&apos;t been confirmed. A process map and a prioritized plan
            are a real deliverable on their own; this page says exactly that and nothing more. Full
            write-up: the <Link href="/case-studies/meridian-engineering">Meridian Engineering case study</Link>.
          </p>
        </div>

        <footer className="post-footer" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>To know more, contact:</p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            LinkedIn ↗
          </a>
        </footer>
      </article>
      <Footer />
    </main>
  );
}
