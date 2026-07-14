import type { Metadata } from "next";
import { ResourceDocPage } from "@/components/ResourceDocPage";

export const metadata: Metadata = {
  title: "Free Automations Guide for Fashion & Apparel Brands | GarvinLabs",
  description:
    "Seven automations built for fashion and apparel D2C brands: cart recovery, size exchanges, back-in-stock alerts, and review collection. Free PDF, no email required.",
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
      <ResourceDocPage
        config={{
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how fashion brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "A free breakdown of seven automations for fashion and apparel D2C brands, ranked by ROI and build difficulty. No email required, just the PDF.",
          bullets: [
            "50% cut in return processing time once approval and label steps are automated (Opensend)",
            "22.45% average conversion rate on back-in-stock alert emails (MarketingSherpa)",
            "111% higher conversion rate on a personalized cross-sell recommendation versus a generic weekly email (MarketingSherpa)",
            "52.2% conversion lift on a product page once it carries at least one review (PowerReviews)",
          ],
          coverImage: "/website-images/pdf-fashion-apparel-cover.png",
          coverAlt: "Fashion & Apparel automations guide: PDF cover",
          pdfHref: "/pdfs/fashion-apparel.pdf",
        }}
      />
    </>
  );
}
