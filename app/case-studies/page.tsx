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
    type: "website",
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
];

export default function CaseStudiesIndex() {
  return (
    <main>
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
