import type { Metadata } from "next";
import { IndustryDocClient } from "@/components/IndustryDocClient";

export const metadata: Metadata = {
  title: "Free Automations Guide for Health, Nutrition & Wellness Brands | GarvinLabs",
  description:
    "Seven automations built for health, nutrition, and wellness D2C brands: cart recovery, subscription renewals, review collection, and support. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Health, Nutrition & Wellness Automations Guide",
  description:
    "Seven high-impact automations for health, nutrition, and wellness D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@type": "Organization", name: "GarvinLabs" },
  url: "https://garvinlabs.com/resources/health-nutrition-wellness",
};

export default function HealthNutritionWellnessDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryDocClient
        config={{
          source: "resources-health-nutrition-wellness",
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how wellness brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "Drop your email and get the seven-automation breakdown for health, nutrition, and wellness brands, sent straight to your inbox. No drip sequence, no pitch calls.",
          bullets: [
            "Abandoned cart recovery: win back the carts left behind before checkout",
            "Subscription renewal reminders: catch churn before it happens quietly",
            "Review and success story collection: build proof without chasing every buyer",
            "Support Q&A automation: handle the repeat ingredient and dosage questions",
          ],
          coverImage: "/website-images/pdf-health-nutrition-wellness-cover.png",
          coverAlt: "Health, Nutrition & Wellness automations guide: PDF cover",
          emailLabel: "PDF",
        }}
      />
    </>
  );
}
