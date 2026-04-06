export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://garvinlabs.vercel.app/#organization",
        name: "GarvinLabs",
        url: "https://garvinlabs.vercel.app",
        logo: "https://garvinlabs.vercel.app/icon.svg",
        founder: {
          "@type": "Person",
          name: "Garvin Chanderia",
          email: "chanderia.10.garvin@gmail.com",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-93562-49535",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://garvinlabs.vercel.app/#business",
        name: "GarvinLabs",
        description:
          "Website development, n8n automation, software development, and AI consulting for businesses ready to grow.",
        url: "https://garvinlabs.vercel.app",
        telephone: "+91-93562-49535",
        email: "chanderia.10.garvin@gmail.com",
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
        priceRange: "$$",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Development",
                description:
                  "Revenue-ready marketing websites, landing pages, and e-commerce stores built with Next.js and modern tech.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "n8n Automation",
                description:
                  "Workflow automation, lead generation pipelines, CRM integrations, and WhatsApp bots using n8n.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Software Development",
                description:
                  "Full-stack web apps, SaaS platforms, and mobile apps built with a dedicated development team.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Consulting",
                description:
                  "AI strategy, Claude MCP agents, AI-powered workflows, and intelligent automation for businesses.",
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
          "@id": "https://garvinlabs.vercel.app/#organization",
        },
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
