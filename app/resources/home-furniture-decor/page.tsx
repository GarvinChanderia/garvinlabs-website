import type { Metadata } from "next";
import { IndustryDocClient } from "@/components/IndustryDocClient";

export const metadata: Metadata = {
  title: "Free Automations Guide for Home, Furniture & Decor Brands | GarvinLabs",
  description:
    "Seven automations built for home, furniture, and decor D2C brands: cart recovery, delivery scheduling, post-purchase care, and returns. Get it free, straight to your inbox.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Home, Furniture & Decor Automations Guide",
  description:
    "Seven high-impact automations for home, furniture, and decor D2C brands, ranked by ROI and build difficulty.",
  publisher: { "@type": "Organization", name: "GarvinLabs" },
  url: "https://garvinlabs.com/resources/home-furniture-decor",
};

export default function HomeFurnitureDecorDoc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryDocClient
        config={{
          source: "resources-home-furniture-decor",
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how home and furniture brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "Drop your email and get the seven-automation breakdown for home, furniture, and decor brands, sent straight to your inbox. No drip sequence, no pitch calls.",
          bullets: [
            "Abandoned cart recovery: win back the carts left behind before checkout, even on big-ticket items",
            "Delivery scheduling and notifications: cut the manual coordination on every order",
            "Post-purchase care and review requests: follow up without chasing every buyer",
            "Return and exchange handling: take the manual load off returns processing",
          ],
          coverImage: "/website-images/pdf-home-furniture-decor-cover.png",
          coverAlt: "Home, Furniture & Decor automations guide: PDF cover",
          emailLabel: "PDF",
        }}
      />
    </>
  );
}
