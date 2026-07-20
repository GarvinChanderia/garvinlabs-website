import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://garvinlabs.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demos/threadwave`,
      lastModified: new Date("2026-05-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/beauty-cosmetics`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/fashion-apparel`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-beverage`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/health-nutrition-wellness`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/home-furniture-decor`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/abandoned-cart-recovery`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/back-in-stock-alerts`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/bulk-order-and-b2b-lead-alert`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/delivery-scheduling-and-notification`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/instant-customer-support`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/low-inventory-and-expiry-alerts`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/post-purchase-cross-sell-recommendations`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/post-purchase-review-and-ugc-collection`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/quiz-based-product-recommendations`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/returns-and-exchange-automation`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/shipping-and-tracking-updates`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/social-content-scheduling`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/subscription-box-preview-announcements`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/subscription-renewal-and-payment-recovery`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/vip-customer-recognition`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/wellness-tips-newsletter`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
