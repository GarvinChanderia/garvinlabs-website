export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://garvinlabs.vercel.app/#business",
        name: "GarvinLabs",
        description:
          "n8n automation and AI-powered lead generation for businesses in India",
        url: "https://garvinlabs.vercel.app",
        telephone: "+919356249535",
        email: "labs.garvin@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
        },
        founder: {
          "@type": "Person",
          name: "Garvin Chanderia",
        },
        priceRange: "₹₹",
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Pune" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "n8n Automation Builds",
                description:
                  "Automation workflows using n8n — lead capture, WhatsApp bots, CRM integrations, booking systems, and custom webhook pipelines.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead Generation Engines",
                description:
                  "AI-powered lead generation systems that scrape, enrich, qualify, and deliver prospects to your CRM or inbox on autopilot.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://garvinlabs.vercel.app/#website",
        url: "https://garvinlabs.vercel.app",
        name: "GarvinLabs",
        publisher: {
          "@id": "https://garvinlabs.vercel.app/#business",
        },
      },
      {
        "@type": "Person",
        "@id": "https://garvinlabs.vercel.app/#founder",
        name: "Garvin Chanderia",
        jobTitle: "Founder, GarvinLabs",
        worksFor: { "@id": "https://garvinlabs.vercel.app/#business" },
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
        knowsAbout: [
          "n8n automation",
          "lead generation",
          "workflow automation",
          "AI-powered systems",
          "business automation",
        ],
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
