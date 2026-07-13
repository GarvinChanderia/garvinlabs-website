import type { Metadata } from "next";
import { IndustryDocClient } from "@/components/IndustryDocClient";

export const metadata: Metadata = {
  title: "Free Automations Guide for Fashion & Apparel Brands | GarvinLabs",
  description:
    "Seven automations built for fashion and apparel D2C brands: cart recovery, size exchanges, back-in-stock alerts, and review collection. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fashion & Apparel Automations Guide",
  description:
    "Seven high-impact automations for fashion and apparel D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@type": "Organization", name: "GarvinLabs" },
  url: "https://garvinlabs.com/resources/fashion-apparel",
};

export default function FashionApparelDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryDocClient
        config={{
          source: "resources-fashion-apparel",
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how fashion brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "Drop your email and get the seven-automation breakdown for fashion and apparel brands, sent straight to your inbox. No drip sequence, no pitch calls.",
          bullets: [
            "Abandoned cart recovery: win back the carts left behind before checkout",
            "Size exchange and returns: cut the manual back-and-forth on every swap",
            "Back-in-stock alerts: catch the sale you'd otherwise lose to a stockout",
            "Post-purchase review and UGC: build proof without chasing every buyer",
          ],
          coverImage: "/website-images/pdf-fashion-apparel-cover.png",
          coverAlt: "Fashion & Apparel automations guide: PDF cover",
          emailLabel: "PDF",
        }}
      />
    </>
  );
}
