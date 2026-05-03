export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GarvinLabs",
    "founder": {
      "@type": "Person",
      "name": "Garvin Chanderia",
      "jobTitle": "Enterprise Architecture Consultant",
      "knowsAbout": ["Artificial Intelligence", "Enterprise Architecture", "Agentic AI", "Support Automation"]
    },
    "description": "GarvinLabs architects agentic AI systems to eliminate the 'Manual Tax' for scaling SaaS and D2C brands.",
    "url": "https://garvinlabs.vercel.app",
    "serviceType": "Agentic AI Architecture",
    "offers": {
      "@type": "Offer",
      "name": "AI Support Triage Deployment",
      "description": "A 14-day deployment of an agentic AI system to categorize, prioritize, and draft responses for support inboxes."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://garvinlabs.vercel.app"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
