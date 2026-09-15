export default function SchemaOrg() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    "name": "Garvin Chanderia",
    "url": "https://garvinlabs.com",
    "jobTitle": "Enterprise Architecture Consultant",
    "description": "Enterprise Architecture Consultant and automation practitioner. Maps manual business operations, then builds systems to run them without a person babysitting the process.",
    "sameAs": ["https://linkedin.com/in/garvinchanderia"],
    "knowsAbout": [
      "Enterprise Architecture",
      "AI Modernization",
      "System Integration",
      "n8n",
      "Support Triage Systems",
      "Workflow Automation"
    ]
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://garvinlabs.com/#organization",
    "name": "GarvinLabs",
    "url": "https://garvinlabs.com",
    "founder": { "@id": "https://garvinlabs.com/#garvin" },
    "sameAs": ["https://linkedin.com/in/garvinchanderia"],
    "description": "GarvinLabs connects businesses at the exact moment a new need appears (a new obligation, a new space, or a broken process) with the specialists built to solve it, before the window closes, and builds AI modernization systems (support triage, ops reporting, fulfilment, and inventory) for retail brands, documented in the open."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
