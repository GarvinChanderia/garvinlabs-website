export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService"],
        "@id": "https://garvinlabs.vercel.app/#organization",
        name: "GarvinLabs",
        description:
          "AI consulting and implementation practice. We help modern teams identify where AI fits in their business, then build the systems.",
        url: "https://garvinlabs.vercel.app/",
        email: "labs.garvin@gmail.com",
        founder: { "@type": "Person", name: "Garvin Chanderia" },
        priceRange: "$200–$12,000",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "GarvinLabs Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Diagnostic",
                description:
                  "A 2–3 day opportunity map with the top 3 AI + automation opportunities in your business, ranked by impact and scoped for build.",
              },
              price: "200",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Implementation",
                description:
                  "One to three connected systems built, tested, and handed off with documentation. 1–4 weeks.",
              },
              price: "600",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full System Build",
                description:
                  "End-to-end production implementation across your ops or revenue stack. 6–12 weeks.",
              },
              price: "6000",
              priceCurrency: "USD",
            },
          ],
        },
        sameAs: ["https://wa.me/919356249535"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
