import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "n8n Automation Builds",
  description:
    "We design and deploy automation workflows using n8n that eliminate repetitive tasks, capture leads automatically, and connect your business tools — in 1 to 2 weeks.",
  alternates: { canonical: "https://garvinlabs.vercel.app/services/automation" },
  openGraph: {
    title: "n8n Automation Builds | GarvinLabs",
    description:
      "Automation workflows for lead capture, WhatsApp bots, CRM integrations, and booking systems. Delivered in 1–2 weeks.",
    url: "https://garvinlabs.vercel.app/services/automation",
  },
};

const WA_LINK =
  "https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20discuss%20a%20project";

const automationTypes = [
  {
    title: "Lead Capture & Nurture",
    description:
      "Auto-capture leads from forms, ads, or scrapers → enrich → route to CRM → trigger follow-up sequences.",
  },
  {
    title: "WhatsApp & Email Bots",
    description:
      "Automated messaging flows for customer support, booking confirmations, and drip campaigns.",
  },
  {
    title: "CRM & Tool Integrations",
    description:
      "Connect HubSpot, Notion, Airtable, Google Sheets, Slack — any tool with an API.",
  },
  {
    title: "Data Sync Pipelines",
    description:
      "Keep data consistent across platforms. No more copy-pasting between tools.",
  },
  {
    title: "Booking & Reminder Systems",
    description:
      "Automated scheduling with confirmations, reminders, and follow-ups.",
  },
  {
    title: "Custom Webhook Pipelines",
    description:
      "Event-driven workflows triggered by any webhook source — payment received, form submitted, status changed.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "₹20,000–₹40,000",
    description: "Single workflow, 1–2 integrations, delivered in 1 week.",
  },
  {
    tier: "Growth",
    price: "₹40,000–₹80,000",
    description: "2–3 connected workflows, multi-tool integration, delivered in 2 weeks.",
  },
  {
    tier: "Scale",
    price: "₹80,000–₹1,50,000",
    description: "Full automation layer, 4+ workflows, custom logic, ongoing support.",
  },
];

const proof = [
  "SparringPlayer: 7 automations mapped for a sports booking marketplace",
  "Dental Revenue Engine: automated outreach to 938+ leads",
  "Personal ops: Morning Briefing, Nightly Distillation, Community Discovery Engine — all production n8n workflows",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "n8n Automation Builds",
      description:
        "Automation workflows using n8n — lead capture, WhatsApp bots, CRM integrations, booking systems, and custom webhook pipelines. Delivered in 1–2 weeks.",
      provider: {
        "@type": "LocalBusiness",
        name: "GarvinLabs",
        url: "https://garvinlabs.vercel.app",
        telephone: "+919356249535",
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
      },
      areaServed: { "@type": "Country", name: "India" },
      offers: [
        { "@type": "Offer", name: "Starter", price: "20000", priceCurrency: "INR" },
        { "@type": "Offer", name: "Growth", price: "40000", priceCurrency: "INR" },
        { "@type": "Offer", name: "Scale", price: "80000", priceCurrency: "INR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://garvinlabs.vercel.app" },
        { "@type": "ListItem", position: 2, name: "n8n Automation Builds", item: "https://garvinlabs.vercel.app/services/automation" },
      ],
    },
  ],
};

export default function AutomationPage() {
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
              Volume Service
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-8 max-w-3xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              n8n Automation Builds
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mb-12 leading-relaxed">
              We design and deploy automation workflows that eliminate repetitive tasks,
              capture leads automatically, and connect your business tools — in 1 to 2 weeks.
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

        {/* What We Automate */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-16"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What We Automate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
              {automationTypes.map((item) => (
                <div key={item.title} className="bg-[#0A0A0A] p-8 hover:bg-[#111111] transition-colors">
                  <div className="w-6 h-px bg-[#D4A853] mb-6" />
                  <h3
                    className="text-lg font-bold text-[#F5F5F5] mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
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

        {/* Proof */}
        <section className="py-24 border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Proof of Work
            </h2>
            <ul className="space-y-6">
              {proof.map((p, i) => (
                <li key={i} className="flex items-start gap-6 border-b border-[#222222] pb-6 last:border-0">
                  <span className="text-[#D4A853] text-sm font-semibold mt-0.5 shrink-0" style={{ fontFamily: "var(--font-syne)" }}>
                    0{i + 1}
                  </span>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to automate?
            </h2>
            <p className="text-[#A0A0A0] mb-10">
              Book a free call and we&apos;ll map out your first automation in 20 minutes.
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
