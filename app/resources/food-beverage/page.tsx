import type { Metadata } from "next";
import { ResourceDocPage } from "@/components/ResourceDocPage";

export const metadata: Metadata = {
  title: "Free Automations Guide for Food & Beverage Brands | GarvinLabs",
  description:
    "Seven automations built for food and beverage D2C brands: cart recovery, subscription renewals, shipping updates, and review collection. Free PDF, no email required.",
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
      <ResourceDocPage
        config={{
          eyebrow: "Free Automations Guide",
          headline: (
            <>
              Seven automations built for how food and beverage brands{" "}
              <span className="report-accent">actually lose time and revenue.</span>
            </>
          ),
          lead: "A free breakdown of seven automations for food and beverage D2C brands, ranked by ROI and build difficulty. No email required, just the PDF.",
          bullets: [
            {
              text: "9% of monthly recurring revenue lost industry-wide to failed payments, most of it recoverable with a proper retry sequence",
              sourceLabel: "Baremetrics, 2026",
              sourceUrl: "https://baremetrics.com/blog/dunning-management",
            },
            {
              text: "Up to 65% fewer \"where is my order\" tickets once proactive tracking notifications are in place",
              sourceLabel: "ShippyPro, 2026",
              sourceUrl: "https://www.shippypro.com/blog/en/how-to-reduce-wismo-tickets-in-ecommerce-the-complete-guide",
            },
            {
              text: "30% higher take rate for matched cross-sell offers versus generic promotions",
              sourceLabel: "Opensend",
              sourceUrl: "https://www.opensend.com/post/upsell-cross-sell-take-rate-statistics-ecommerce",
            },
            {
              text: "1 in 3 subscribers adjusted an order instead of canceling outright in 2023",
              sourceLabel: "Swell, 2026",
              sourceUrl: "https://www.swell.is/content/subscription-box-statistics",
            },
          ],
          coverImage: "/website-images/pdf-food-beverage-cover.png",
          coverAlt: "Food & Beverage automations guide: PDF cover",
          pdfHref: "/pdfs/food-beverage.pdf",
        }}
      />
    </>
  );
}
