import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lead Generation Engines",
  description:
    "Custom AI-powered systems that find, enrich, qualify, and deliver leads to your pipeline on autopilot. No SDRs needed. Built on n8n.",
  alternates: { canonical: "https://garvinlabs.vercel.app/services/lead-engines" },
  openGraph: {
    title: "Lead Generation Engines | GarvinLabs",
    description:
      "AI-powered lead generation systems that deliver qualified prospects to your CRM on autopilot. Proven: 1,100+ leads processed.",
    url: "https://garvinlabs.vercel.app/services/lead-engines",
  },
};

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

const pipeline = [
  {
    stage: "Data Sources",
    description:
      "Industry directories, Google Maps, LinkedIn (manual), niche databases, community platforms.",
  },
  {
    stage: "Scraping & Collection",
    description:
      "Automated extraction of business data — names, emails, websites, phone numbers, social profiles.",
  },
  {
    stage: "Enrichment & Qualification",
    description:
      "AI-powered scoring. Filter by revenue signals, tech stack, hiring patterns, social presence. Kill junk leads before they enter your pipeline.",
  },
  {
    stage: "Outreach Sequencing",
    description:
      "Multi-channel delivery — email sequences, WhatsApp, LinkedIn connection notes. Personalized at scale using AI.",
  },
  {
    stage: "CRM / Inbox Delivery",
    description:
      "Clean, qualified leads delivered to your CRM, Airtable, Google Sheet, or directly to your inbox. Daily or weekly batches.",
  },
];

const deliverables = [
  "A fully automated lead generation system built on n8n, running on your own infrastructure or ours",
  "Custom scraping logic tailored to your industry and ICP",
  "AI enrichment and lead scoring",
  "Multi-channel outreach setup (email, WhatsApp, LinkedIn)",
  "Dashboard or sheet with full pipeline visibility",
  "Documentation and handoff so your team can manage it",
];

const pricing = [
  {
    tier: "Starter Engine",
    price: "₹1,50,000",
    description:
      "Single industry, single channel, up to 500 leads/month capacity. 3-week build.",
  },
  {
    tier: "Growth Engine",
    price: "₹2,50,000–₹4,00,000",
    description:
      "Multi-source, multi-channel, AI qualification, CRM integration. 4–6 week build.",
  },
  {
    tier: "Enterprise",
    price: "Custom",
    description:
      "Full outbound infrastructure, dedicated support, ongoing optimization.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Lead Generation Engines",
      description:
        "AI-powered lead generation systems that scrape, enrich, qualify, and deliver prospects to your CRM or inbox on autopilot. Proven: 1,100+ leads processed in a single pipeline.",
      provider: {
        "@type": "LocalBusiness",
        name: "GarvinLabs",
        url: "https://garvinlabs.vercel.app",
        telephone: "+919356249535",
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
      },
      areaServed: { "@type": "Country", name: "India" },
      offers: [
        { "@type": "Offer", name: "Starter Engine", price: "150000", priceCurrency: "INR" },
        { "@type": "Offer", name: "Growth Engine", price: "250000", priceCurrency: "INR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://garvinlabs.vercel.app" },
        { "@type": "ListItem", position: 2, name: "Lead Generation Engines", item: "https://garvinlabs.vercel.app/services/lead-engines" },
      ],
    },
  ],
};

export default function LeadEnginesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto">
            <span
              className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest mb-6 block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Big Ticket Service
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-8 max-w-3xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Lead Generation Engines
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mb-12 leading-relaxed">
              We build custom AI-powered systems that find, enrich, qualify, and deliver
              leads to your pipeline — on autopilot. No SDRs needed.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] font-semibold px-8 py-4 transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Book a Free Call
            </a>
          </div>
        </section>

        {/* Pipeline Flow */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              How It Works
            </h2>
            <p className="text-[#A0A0A0] mb-16 text-sm">
              Data Sources → Scraping & Collection → Enrichment & Qualification → Outreach Sequencing → CRM / Inbox Delivery
            </p>

            <div className="space-y-px bg-[#222222]">
              {pipeline.map((stage, i) => (
                <div key={stage.stage} className="bg-[#0A0A0A] p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:bg-[#111111] transition-colors">
                  <div className="md:w-48 shrink-0">
                    <span
                      className="text-xs text-[#D4A853] font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Step {i + 1}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#F5F5F5] mt-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {stage.stage}
                    </h3>
                  </div>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 bg-[#111111] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-[#0A0A0A]">
                  <span
                    className="text-[#D4A853] text-sm font-semibold shrink-0"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    ✓
                  </span>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Proof
            </h2>
            <div className="bg-[#111111] p-10 border-l-2 border-[#D4A853]">
              <h3
                className="text-xl font-bold text-[#F5F5F5] mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Dental Revenue Engine V1
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                1,102 leads scraped from industry directories. 551 automated site previews
                generated. Full email outreach sequence built and deployed. Zero manual work
                after initial setup.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-[#111111] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-16"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
              {pricing.map((p) => (
                <div key={p.tier} className="bg-[#111111] p-10">
                  <h3
                    className="text-lg font-bold text-[#F5F5F5] mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.tier}
                  </h3>
                  <div
                    className="text-2xl font-bold text-[#D4A853] mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.price}
                  </div>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to build your pipeline?
            </h2>
            <p className="text-[#A0A0A0] mb-10">
              Book a free call. We&apos;ll scope your lead gen engine in 20 minutes.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D4A853] hover:bg-[#E8C36A] text-[#0A0A0A] font-semibold px-10 py-4 transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Book a Free Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
