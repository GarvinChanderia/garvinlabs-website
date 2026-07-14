import type { Metadata } from "next";
import { ResourceDocPage } from "@/components/ResourceDocPage";

export const metadata: Metadata = {
  title: "Free Automations Guide for Home, Furniture & Decor Brands | GarvinLabs",
  description:
    "Seven automations built for home, furniture, and decor D2C brands: cart recovery, delivery scheduling, post-purchase care, and returns. Free PDF, no email required.",
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
      <ResourceDocPage
        config={{
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how home and furniture brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "A free breakdown of seven automations for home, furniture, and decor D2C brands, ranked by ROI and build difficulty. No email required, just the PDF.",
          bullets: [
            "Up to 20% of packages fail on the first delivery attempt industry-wide (Harvard Business Review, 2023)",
            "50% cut in return processing time once approval and label steps are automated (Opensend)",
            "36% increase in conversion rate after adding a product-recommendation quiz that actually follows up (Outgrow)",
            "21x more likely to qualify a lead reached within five minutes versus after thirty (Kixie)",
          ],
          coverImage: "/website-images/pdf-home-furniture-decor-cover.png",
          coverAlt: "Home, Furniture & Decor automations guide: PDF cover",
          pdfHref: "/pdfs/home-furniture-decor.pdf",
        }}
      />
    </>
  );
}
