export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://garvinlabs.vercel.app/#business",
        name: "GarvinLabs",
        alternateName: "Garvin Labs",
        description:
          "Conversion optimization for businesses losing customers to bad funnels. Landing page audits, funnel fixes, and CTA rewrites delivered in 5-10 days.",
        url: "https://garvinlabs.vercel.app",
        telephone: "+919356249535",
        email: "labs.garvin@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
        },
        founder: {
          "@id": "https://garvinlabs.vercel.app/#founder",
        },
        priceRange: "₹5,000 - ₹75,000",
        currenciesAccepted: "INR",
        paymentAccepted: "Bank Transfer, UPI",
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Bangalore" },
          { "@type": "City", name: "Delhi" },
        ],
        serviceType: "Conversion Rate Optimization",
        slogan:
          "I help businesses convert more of the traffic they're already paying for by fixing their conversion flow.",
        knowsAbout: [
          "Conversion Rate Optimization",
          "Landing Page Optimization",
          "Funnel Optimization",
          "CTA Optimization",
          "Copywriting for Conversion",
          "A/B Testing",
          "UX for Conversion",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Conversion Optimization Packages",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Conversion Audit",
              price: "5000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              itemOffered: {
                "@type": "Service",
                name: "Conversion Audit",
                description:
                  "PDF audit report of your landing page — top 5-7 conversion issues identified with exact fixes. Delivered in 1-2 days.",
                provider: {
                  "@id": "https://garvinlabs.vercel.app/#business",
                },
                serviceOutput: "PDF audit report with annotated screenshots and specific fixes",
                termsOfService: "https://garvinlabs.vercel.app/contact",
              },
            },
            {
              "@type": "Offer",
              name: "Conversion Sprint",
              price: "25000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              itemOffered: {
                "@type": "Service",
                name: "Conversion Sprint",
                description:
                  "Full conversion audit plus implementation — headlines rewritten, CTAs rebuilt, social proof optimized, page restructured. Delivered in 5-7 days.",
                provider: {
                  "@id": "https://garvinlabs.vercel.app/#business",
                },
              },
            },
            {
              "@type": "Offer",
              name: "Conversion System Sprint",
              price: "50000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              itemOffered: {
                "@type": "Service",
                name: "Conversion System Sprint",
                description:
                  "Complete conversion flow redesign — multi-page funnel optimization, trust architecture, objection handling. Delivered in 7-10 days.",
                provider: {
                  "@id": "https://garvinlabs.vercel.app/#business",
                },
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
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": "https://garvinlabs.vercel.app/#webpage",
        url: "https://garvinlabs.vercel.app",
        name: "GarvinLabs — Conversion Optimization for Businesses Losing Customers to Bad Funnels",
        isPartOf: { "@id": "https://garvinlabs.vercel.app/#website" },
        about: { "@id": "https://garvinlabs.vercel.app/#business" },
        description:
          "I help businesses convert more of the traffic they're already paying for by fixing their conversion flow. Landing page audits, funnel fixes, and CTA rewrites — delivered in 5-10 days.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "[data-speakable]"],
        },
        mainEntity: { "@id": "https://garvinlabs.vercel.app/#business" },
      },
      {
        "@type": "Person",
        "@id": "https://garvinlabs.vercel.app/#founder",
        name: "Garvin Chanderia",
        jobTitle: "Conversion Optimization Specialist",
        worksFor: { "@id": "https://garvinlabs.vercel.app/#business" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "MIT ADT University",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "B.Tech in Computer Science (AI/ML)",
            credentialCategory: "degree",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Microsoft AI PM Professional Certificate",
            credentialCategory: "certificate",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Google UX Design Certificate",
            credentialCategory: "certificate",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Google Data Analytics Certificate",
            credentialCategory: "certificate",
          },
        ],
        knowsAbout: [
          "conversion rate optimization",
          "landing page optimization",
          "funnel optimization",
          "copywriting",
          "CTA optimization",
          "UX for conversion",
          "Next.js",
          "n8n automation",
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://garvinlabs.vercel.app/#howto",
        name: "How to Get a Conversion Audit from GarvinLabs",
        description:
          "Get your landing page audited and conversion issues fixed in 4 simple steps.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Send your URL",
            text: "WhatsApp or email your landing page link to GarvinLabs. Response within 24 hours.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Audit against 7 areas",
            text: "Your page is audited against 7 conversion areas: headline, CTA, social proof, messaging, UX, value prop, and conversion killers.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Receive fixes",
            text: "You get a detailed PDF report showing every issue and the exact fix, or the fixes are implemented directly depending on your package.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "More visitors convert",
            text: "Same traffic, more customers. Most clients see results within the first week after fixes go live.",
          },
        ],
        totalTime: "P2D",
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
