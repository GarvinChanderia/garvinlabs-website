import type { Metadata } from "next";
import { ResourceDocPage } from "@/components/ResourceDocPage";

export const metadata: Metadata = {
  title: "Free Automations Guide for Beauty & Cosmetics Brands | GarvinLabs",
  description:
    "Seven automations built for beauty and skincare D2C brands: cart recovery, back-in-stock alerts, review collection, and support. Free PDF, no email required.",
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
      <ResourceDocPage
        config={{
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how beauty brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "A free breakdown of seven automations for beauty and skincare D2C brands, ranked by ROI and build difficulty. No email required, just the PDF.",
          bullets: [
            {
              text: "50% repeat purchase rate among loyalty-point redeemers, versus 10.7% for those who don't",
              sourceLabel: "Rivo, 2026",
              sourceUrl: "https://www.rivo.io/blog/vip-customer-repeat-rate-statistics",
            },
            {
              text: "52.2% conversion lift on a product page once it carries at least one review",
              sourceLabel: "PowerReviews",
              sourceUrl: "https://www.powerreviews.com/review-volume-conversion-impact/",
            },
            {
              text: "22.45% average conversion rate on back-in-stock alert emails",
              sourceLabel: "MarketingSherpa",
              sourceUrl: "https://marketingsherpa.com/article/case-study/backinstock-alert-emails-achieve-2245",
            },
            {
              text: "53% of routine support queries resolved without a human touching them, first response cut to seconds",
              sourceLabel: "Freshworks, 2025",
              sourceUrl: "https://www.freshworks.com/How-AI-is-unlocking-ROI-in-customer-service/",
            },
          ],
          coverImage: "/website-images/pdf-beauty-cosmetics-cover.png",
          coverAlt: "Beauty & Cosmetics automations guide: PDF cover",
          pdfHref: "/pdfs/beauty-cosmetics.pdf",
        }}
      />
    </>
  );
}
