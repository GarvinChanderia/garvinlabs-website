const BASE_URL = "https://garvinlabs.vercel.app";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: "GarvinLabs",
        description:
          "AI consulting and implementation practice for lean teams. Fixed price. 2–4 week delivery.",
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        url: `${BASE_URL}/`,
        name: "GarvinLabs | AI Consulting & Implementation for Lean Teams",
        description:
          "GarvinLabs maps where AI fits in your business, then builds the systems. Fixed price. 2–4 week delivery. Start with a free teardown.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
          ],
        },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${BASE_URL}/#organization`,
        name: "GarvinLabs",
        description:
          "AI consulting and implementation practice. I help modern teams identify where AI fits in their business, then build the systems. Fixed price. No retainers. Delivered in 2–4 weeks.",
        url: `${BASE_URL}/`,
        email: "labs.garvin@gmail.com",
        telephone: "+919356249535",
        founder: { "@id": `${BASE_URL}/#person` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: ["IN", "US", "EU"],
        priceRange: "$200–$12,000",
        currenciesAccepted: "USD",
        openingHours: "Mo-Fr 09:00-18:00",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "3",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Director, Manufacturing Business" },
            reviewBody:
              "Built our entire process documentation system from scratch. 26 detailed documents our team actually uses every day. Hours saved every week.",
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Confidential Client, Logistics Platform" },
            reviewBody:
              "Website was done fast and looked exactly like what we wanted. Came back for the app build because the first project went so smoothly.",
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Web Dev Freelancer" },
            reviewBody:
              "938 personalized pages for our outreach, all automated. Quality was high, the cost was almost nothing. Impressive work.",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "GarvinLabs AI Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Diagnostic",
                description:
                  "A 2–3 day opportunity map with the top 3 AI + automation opportunities in your business, ranked by impact and scoped for build. Delivered in 72 hours.",
              },
              price: "200",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Implementation",
                description:
                  "One to three connected AI + automation systems built, tested, and handed off with documentation. 1–4 weeks.",
              },
              lowPrice: "600",
              highPrice: "2400",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full System Build",
                description:
                  "Production-grade end-to-end automation across your entire ops or revenue stack with QA, monitoring, and 30-day post-launch support. 6–12 weeks.",
              },
              lowPrice: "6000",
              highPrice: "12000",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          ],
        },
        sameAs: ["https://wa.me/919356249535"],
        knowsAbout: [
          "AI consulting",
          "AI implementation",
          "n8n workflow automation",
          "WhatsApp Business API",
          "Shopify automation",
          "AI agent development",
          "business process automation",
          "Claude AI integration",
          "GPT integration",
        ],
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Garvin Chanderia",
        jobTitle: "AI Consultant & Founder",
        description:
          "AI consultant and builder based in Pune, India. Former BI developer and product consultant with experience across SaaS, D2C, manufacturing, and healthcare. Founder of GarvinLabs.",
        worksFor: { "@id": `${BASE_URL}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        email: "labs.garvin@gmail.com",
        telephone: "+919356249535",
        sameAs: ["https://wa.me/919356249535"],
        knowsAbout: [
          "AI consulting",
          "n8n automation",
          "workflow automation",
          "AI implementation",
          "business automation",
          "Power BI",
          "product management",
          "enterprise architecture",
        ],
        hasCredential: [
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
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What exactly do I get for $200?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A written opportunity map of your ops or revenue stack, the top 3 automation opportunities ranked by monthly dollar impact, effort and cost estimates per opportunity, a specific scoped recommendation for what to build first, and a 15–20 minute Loom walkthrough you can forward to your team. Delivered within 72 hours after our discovery call.",
            },
          },
          {
            "@type": "Question",
            name: "What tools does GarvinLabs build with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "n8n for workflow automation, WhatsApp Business API for messaging, Shopify webhooks for D2C, Claude and GPT for the AI layers, and whatever CRM or data tool already lives in your stack. The tools are chosen to fit your existing infrastructure, not whatever is trending.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can GarvinLabs deliver AI systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI Diagnostic: 72 hours. AI Implementation: 1–4 weeks depending on scope. Full System Build: 6–12 weeks. These are hard timelines. If a delivery date is missed, the balance payment is waived until the system ships.",
            },
          },
          {
            "@type": "Question",
            name: "What are the payment terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "50% upfront, 50% on delivery. No retainers. No hourly billing. No surprise invoices. You pay once to start and once to finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a Diagnostic before an AI implementation build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, for any Build engagement. The Diagnostic is what enables fixed-price quoting and fixed-date delivery. Without it, scope estimates would be guesswork — and guesswork is how projects blow their budget.",
            },
          },
          {
            "@type": "Question",
            name: "Who runs GarvinLabs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Garvin Chanderia — former BI developer, product consultant, and founder based in Pune, India. GarvinLabs serves clients remotely across the US, EU, and India. Contact: WhatsApp +91 93562 49535, Email labs.garvin@gmail.com.",
            },
          },
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
