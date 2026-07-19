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
      "Operations Automation",
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
    "description": "GarvinLabs is Garvin Chanderia's public learning practice in operations automation: support triage, ops reporting, fulfilment, and inventory systems for retail brands, built and documented in the open."
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
