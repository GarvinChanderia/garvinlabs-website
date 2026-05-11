export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://garvinlabs.com/#organization",
        "name": "GarvinLabs",
        "url": "https://garvinlabs.com",
        "logo": "https://garvinlabs.com/logo-icon.svg",
        "description": "GarvinLabs builds AI customer support automation for D2C brands — replacing manual email sorting with intelligent triage systems that classify, prioritise, and auto-reply to 60%+ of tickets within 2 minutes.",
        "founder": { "@id": "https://garvinlabs.com/#garvin" },
        "serviceType": "AI Customer Support Automation",
        "areaServed": ["US", "GB", "AU", "CA", "NL", "DE"],
        "knowsAbout": [
          "AI Support Triage",
          "Customer Support Automation",
          "D2C Brand Operations",
          "Agentic AI Systems",
          "n8n Automation",
          "The Manual Tax"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://garvinlabs.com"
        }
      },
      {
        "@type": "Person",
        "@id": "https://garvinlabs.com/#garvin",
        "name": "Garvin Chanderia",
        "jobTitle": "AI Systems Builder",
        "description": "Garvin designs and builds AI systems for growing D2C brands — automation pipelines, intelligent decision layers, and production-grade workflows that handle operational work around the clock.",
        "url": "https://garvinlabs.com",
        "sameAs": ["https://linkedin.com/in/garvinchanderia"],
        "worksFor": { "@id": "https://garvinlabs.com/#organization" },
        "knowsAbout": [
          "AI Automation",
          "Customer Support Systems",
          "D2C Brand Operations",
          "n8n",
          "Gemini AI",
          "Agentic AI Architecture"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://garvinlabs.com/#service",
        "name": "AI Customer Support Triage System",
        "provider": { "@id": "https://garvinlabs.com/#organization" },
        "description": "A production-grade AI system that reads every inbound support email, classifies it by category and priority, auto-replies to 60%+ of tickets, surfaces urgent issues to your phone within 2 minutes, and logs every ticket to a live dashboard. Built on n8n with Gemini AI. Tested at 94%+ classification accuracy.",
        "serviceType": "AI Customer Support Automation",
        "areaServed": ["US", "GB", "AU"],
        "audience": {
          "@type": "Audience",
          "audienceType": "D2C eCommerce founders and Heads of Customer Experience processing 100+ support emails per day"
        },
        "offers": {
          "@type": "Offer",
          "name": "AI Support Triage — Full Build",
          "description": "Custom AI support triage system built to your brand's ticket types, policies, and response standards. Includes 14-day post-launch support. You own the system entirely.",
          "seller": { "@id": "https://garvinlabs.com/#organization" }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What if the AI sends a wrong reply to a customer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The system only sends automatically when it is highly certain the reply is correct. Everything else gets drafted and flagged for your review before anything goes out. Your brand reputation is never at risk from an unchecked reply."
            }
          },
          {
            "@type": "Question",
            "name": "Does AI support triage work with existing helpdesk tools?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. This works alongside whatever helpdesk you are already using. Your helpdesk handles the interface. The AI triage layer handles the reading, sorting, and replying before your team opens a single ticket."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI support triage reduce response times?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI support triage works by automatically reading every inbound email, classifying it by category and urgency, and either auto-replying (for high-confidence tickets) or preparing a draft reply within 2 minutes of arrival. Urgent tickets like billing disputes are flagged to your phone immediately, preventing multi-hour delays."
            }
          },
          {
            "@type": "Question",
            "name": "What if our support tickets are too complex for AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The system routes complex tickets to humans with context already prepared. The AI handles the sorting and draft generation. A human makes the final call on anything that warrants it."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build an AI support triage system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Build time depends on your brand's complexity: number of ticket categories, depth of your policies, and how quickly the Discover phase can be completed. A realistic timeline is discussed on the discovery call."
            }
          },
          {
            "@type": "Question",
            "name": "Does the AI support system handle seasonal volume spikes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The system scales with volume. There is no seat-based pricing or per-ticket fee. Infrastructure cost stays flat whether you receive 200 or 2,000 tickets in a day."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
