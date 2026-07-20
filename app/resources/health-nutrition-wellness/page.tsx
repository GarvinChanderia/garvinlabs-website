import type { Metadata } from "next";
import { ResourceDocPage } from "@/components/ResourceDocPage";

export const metadata: Metadata = {
  title: "Free Automations Guide for Health, Nutrition & Wellness Brands | GarvinLabs",
  description:
    "Seven automations built for health, nutrition, and wellness D2C brands: cart recovery, subscription renewals, review collection, and support. Free PDF, no email required.",
  alternates: { canonical: "https://garvinlabs.com/resources/health-nutrition-wellness" },
  openGraph: {
    title: "Free Automations Guide for Health, Nutrition & Wellness Brands | GarvinLabs",
    description:
      "Seven automations built for health, nutrition, and wellness D2C brands: cart recovery, subscription renewals, review collection, and support. Free PDF, no email required.",
    url: "https://garvinlabs.com/resources/health-nutrition-wellness",
    images: [{ url: "/website-images/pdf-health-nutrition-wellness-cover.png", width: 1200, height: 630, alt: "Health, Nutrition & Wellness automations guide: PDF cover" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Automations Guide for Health, Nutrition & Wellness Brands | GarvinLabs",
    description:
      "Seven automations built for health, nutrition, and wellness D2C brands: cart recovery, subscription renewals, review collection, and support. Free PDF, no email required.",
    images: ["/website-images/pdf-health-nutrition-wellness-cover.png"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Health, Nutrition & Wellness Automations Guide",
  description:
    "Seven high-impact automations for health, nutrition, and wellness D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-07-13",
  dateModified: "2026-07-14",
  url: "https://garvinlabs.com/resources/health-nutrition-wellness",
};

export default function HealthNutritionWellnessDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS (GPTBot, ClaudeBot, PerplexityBot) */}
      <aside aria-label="Quick Answer" style={{ display: "none" }}>
        <strong>What automations should health, nutrition, and wellness D2C brands build first?</strong>
        <p>
          On-topic, relevant email content sees a 41% higher click-through rate and a 29% lift in
          open rate over generic broadcasts (Mailmend, 2026); 53% of routine support queries can be
          resolved without a human touching them (Freshworks, 2025); a product-recommendation quiz
          that actually follows up lifts conversion by 36% (Outgrow); and up to 55% of shoppers
          permanently switch to a competitor after repeated stockouts (Aislestock). GarvinLabs has a
          free PDF ranking seven automations for health, nutrition, and wellness brands by ROI and
          build difficulty, no email required.
        </p>
      </aside>
      <ResourceDocPage
        config={{
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how wellness brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "A free breakdown of seven automations for health, nutrition, and wellness D2C brands, ranked by ROI and build difficulty. No email required, just the PDF.",
          bullets: [
            {
              text: "41% higher click-through and a 29% lift in open rate for relevant, on-topic email content versus generic broadcasts",
              sourceLabel: "Mailmend, 2026",
              sourceUrl: "https://mailmend.io/blogs/email-personalization-statistics",
            },
            {
              text: "53% of routine support queries resolved without a human touching them, first response cut to seconds",
              sourceLabel: "Freshworks, 2025",
              sourceUrl: "https://www.freshworks.com/How-AI-is-unlocking-ROI-in-customer-service/",
            },
            {
              text: "36% increase in conversion rate after adding a product-recommendation quiz that actually follows up",
              sourceLabel: "Outgrow",
              sourceUrl: "https://outgrow.co/blog/quizzes-drive-ecommerce-sales",
            },
            {
              text: "Up to 55% of shoppers permanently switch to a competitor after repeated stockouts",
              sourceLabel: "Aislestock",
              sourceUrl: "https://aislestock.com/stockout-cost",
            },
          ],
          coverImage: "/website-images/pdf-health-nutrition-wellness-cover.png",
          coverAlt: "Health, Nutrition & Wellness automations guide: PDF cover",
          pdfHref: "/pdfs/health-nutrition-wellness.pdf",
        }}
      />
    </>
  );
}
