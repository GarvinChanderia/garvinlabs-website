import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Hub for everything AI. Kept out of the main nav (only reachable via More)
// so connector visitors don't mistake GarvinLabs for an AI product.

const TITLE = "GarvinLabs AI Services";
const DESCRIPTION =
  "AI modernization work by GarvinLabs, separate from our connector work: real builds, case studies, guides and the D2C automation blog.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/ai-services",
    siteName: "GarvinLabs",
    type: "website",
  },
};

type Item = { href: string; title: string; desc: string };

const GROUPS: { heading: string; items: Item[] }[] = [
  {
    heading: "Builds",
    items: [
      {
        href: "/demos",
        title: "Builds",
        desc: "AI modernization systems built for D2C operations: the problem each one solves, how it works, and what the manual version costs.",
      },
    ],
  },
  {
    heading: "Case studies",
    items: [
      {
        href: "/case-studies/meridian-engineering",
        title: "Manufacturing AI fit analysis",
        desc: "A manufacturer's order cycle ran 55 to 70 days against an ideal of 25 to 28. Before recommending a single tool, we mapped where those days actually went across 26 processes, two plants, and a full org chart.",
      },
      {
        href: "/case-studies/ai-ugc-image-generation",
        title: "Fashion brand AI photography process",
        desc: "A founder-led apparel brand needed campaign-ready photography without a studio shoot. We built a 7-step process that gets AI-generated images to read as a real shoot instead of obviously synthetic.",
      },
    ],
  },
  {
    heading: "Guides",
    items: [
      { href: "/when-ai-fails", title: "When AI fails", desc: "Three real incidents and the guardrail framework that would have caught them." },
      { href: "/ai-readiness-audit", title: "What an AI readiness audit actually finds", desc: "A process diagnostic, not a tool recommendation." },
      { href: "/ai-modernization-vs-ai-automation", title: "AI modernization vs AI automation", desc: "Automation does the same process faster. Modernization asks whether it's the right process at all." },
      { href: "/garvinlabs-vs-ai-agencies", title: "GarvinLabs vs traditional AI agencies", desc: "A diagnose-first method instead of a service menu." },
      { href: "/ai-modernization-for-retail", title: "AI modernization for D2C and retail brands", desc: "Where manual work piles up across support, fulfilment, reporting, influencer ops and inventory." },
      { href: "/ai-modernization-for-manufacturing", title: "AI modernization for manufacturers", desc: "What a fit diagnostic finds when you map every process first." },
      { href: "/ai-modernization-company-india", title: "AI modernization for D2C brands, based in India", desc: "The same method, for India-based D2C founders." },
    ],
  },
  {
    heading: "Blog and resources",
    items: [
      { href: "/blog", title: "Blog", desc: "Write-ups of the D2C automations: what each one fixes and how it runs." },
      { href: "/resources", title: "Resources", desc: "Free D2C automation guides by vertical." },
    ],
  },
];

export default function AiServices() {
  return (
    <main>
      <Navbar />
      <section className="container section" aria-label="GarvinLabs AI Services" style={{ maxWidth: 900 }}>
        <p className="section-eyebrow">GarvinLabs AI Services</p>
        <h1 className="section-title">AI modernization for operations teams</h1>
        <p className="lead" style={{ marginTop: "1rem", maxWidth: 620 }}>
          This is separate from our connector work. We map how a business actually runs, then build
          the system around what&apos;s really there.
        </p>

        {GROUPS.map((group) => (
          <div key={group.heading}>
            <h2 className="section-eyebrow" style={{ marginTop: "3rem" }}>{group.heading}</h2>
            <div className="post-list">
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="post-list-card">
                  <h3 className="post-list-title">{item.title}</h3>
                  <p className="post-list-desc">{item.desc}</p>
                  <span className="post-list-cta">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
