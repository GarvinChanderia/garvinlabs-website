import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const TITLE = "Case Studies: Garvin Chanderia";
const DESCRIPTION =
  "Case studies in AI modernization: where it fits, where it doesn't, and what changes when it's done right inside real businesses. Anonymized, with the numbers behind what I found.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/case-studies",
    siteName: "GarvinLabs",
    images: [{ url: "/hero-diagram.png", width: 1200, height: 630, alt: "GarvinLabs case studies" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-diagram.png"],
  },
};

const CASE_STUDIES = [
  {
    slug: "meridian-engineering",
    title: "Manufacturing AI fit analysis",
    description:
      "A manufacturer's order cycle ran 55 to 70 days against an ideal of 25 to 28. Before recommending a single tool, I mapped where those days actually went across 26 processes, two plants, and a full org chart.",
    tag: "AI Modernization · Process Diagnostic",
  },
  {
    slug: "ai-ugc-image-generation",
    title: "Fashion brand AI photography process",
    description:
      "A founder-led apparel brand needed campaign-ready photography without a studio shoot. I built a 7-step process, ICP through iteration, that gets AI-generated images to read as a real shoot instead of obviously synthetic.",
    tag: "AI Content Production · Case Study",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://garvinlabs.com/case-studies/#collection",
  name: TITLE,
  description: DESCRIPTION,
  url: "https://garvinlabs.com/case-studies",
  isPartOf: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-08-03",
  dateModified: "2026-08-05",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: CASE_STUDIES.map((cs, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://garvinlabs.com/case-studies/${cs.slug}`,
      name: cs.title,
    })),
  },
};

export default function CaseStudiesIndex() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What do GarvinLabs case studies cover?</strong>
        <p>
          Anonymized write-ups of AI modernization work inside real businesses: where it fits,
          where it doesn&apos;t, and what changes when it&apos;s done right, with the real numbers
          behind each finding. The first is a manufacturing AI fit analysis: a structural steel
          manufacturer&apos;s order cycle ran 55 to 70 days against an ideal of 25 to 28, diagnosed
          across 26 processes and two plants before any tool was recommended.
        </p>
      </aside>
      <Navbar />
      <section className="container section" aria-label="Case studies" style={{ maxWidth: 900 }}>
        <p className="section-eyebrow">Case studies</p>
        <h1 className="section-title">Case studies from projects I've worked on</h1>
        <p className="lead" style={{ marginTop: "1rem", maxWidth: 620 }}>
          How AI modernization actually plays out inside real businesses: where it
          fits, where it doesn't, and what changes when it's done right. Anonymized
          write-ups, with the real numbers behind what I found.
        </p>

        <div className="post-list">
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="post-list-card">
              <p className="post-tag">{cs.tag}</p>
              <h2 className="post-list-title">{cs.title}</h2>
              <p className="post-list-desc">{cs.description}</p>
              <span className="post-list-cta">Read →</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
