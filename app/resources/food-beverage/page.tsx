import type { Metadata } from "next";
import { IndustryDocClient } from "@/components/IndustryDocClient";

export const metadata: Metadata = {
  title: "Free Automations Guide for Food & Beverage Brands | GarvinLabs",
  description:
    "Seven automations built for food and beverage D2C brands: cart recovery, subscription renewals, shipping updates, and review collection. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Food & Beverage Automations Guide",
  description:
    "Seven high-impact automations for food and beverage D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@type": "Organization", name: "GarvinLabs" },
  url: "https://garvinlabs.com/resources/food-beverage",
};

export default function FoodBeverageDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryDocClient
        config={{
          source: "resources-food-beverage",
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how food and beverage brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "Drop your email and get the seven-automation breakdown for food and beverage brands, sent straight to your inbox. No drip sequence, no pitch calls.",
          bullets: [
            "Abandoned cart recovery: win back the carts left behind before checkout",
            "Subscription order automation: catch renewals before they churn quietly",
            "Shipping and tracking updates: stop fielding \"where's my order\" by hand",
            "Review and taste survey automation: collect feedback without asking twice",
          ],
          coverImage: "/website-images/pdf-food-beverage-cover.png",
          coverAlt: "Food & Beverage automations guide: PDF cover",
          emailLabel: "PDF",
        }}
      />
    </>
  );
}
