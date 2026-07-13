import type { Metadata } from "next";
import { IndustryDocClient } from "@/components/IndustryDocClient";

export const metadata: Metadata = {
  title: "Free Automations Guide for Beauty & Cosmetics Brands | GarvinLabs",
  description:
    "Seven automations built for beauty and skincare D2C brands: cart recovery, back-in-stock alerts, review collection, and support. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Beauty & Cosmetics Automations Guide",
  description:
    "Seven high-impact automations for beauty and skincare D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@type": "Organization", name: "GarvinLabs" },
  url: "https://garvinlabs.com/resources/beauty-cosmetics",
};

export default function BeautyCosmeticsDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryDocClient
        config={{
          source: "resources-beauty-cosmetics",
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how beauty brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "Drop your email and get the seven-automation breakdown for beauty and skincare brands, sent straight to your inbox. No drip sequence, no pitch calls.",
          bullets: [
            "Abandoned cart recovery: win back the carts left behind before checkout",
            "Back-in-stock alerts: turn a sold-out SKU from a lost sale into a captured one",
            "Review and UGC collection: build the social proof beauty buyers actually check",
            "Support automation: handle the repeat ingredient and routine questions without a bigger team",
          ],
          coverImage: "/website-images/pdf-beauty-cosmetics-cover.png",
          coverAlt: "Beauty & Cosmetics automations guide: PDF cover",
          emailLabel: "PDF",
        }}
      />
    </>
  );
}
