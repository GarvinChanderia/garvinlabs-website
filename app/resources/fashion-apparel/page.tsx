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
            "Abandoned cart recovery: win back the carts left behind before checkout",
            "Size exchange and returns: cut the manual back-and-forth on every swap",
            "Back-in-stock alerts: catch the sale you'd otherwise lose to a stockout",
            "Post-purchase review and UGC: build proof without chasing every buyer",
          ],
          coverImage: "/website-images/pdf-fashion-apparel-cover.png",
          coverAlt: "Fashion & Apparel automations guide: PDF cover",
          pdfHref: "/pdfs/fashion-apparel.pdf",
        }}
      />
    </>
  );
}
