export default function SchemaOrg() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    "name": "Garvin Chanderia",
    "url": "https://garvinlabs.com",
    "jobTitle": "Enterprise Architecture Consultant",
    "description": "Enterprise architecture and analytics background. Founder of GarvinLabs, which connects businesses with qualified service providers when they're actively looking to buy.",
    "sameAs": ["https://linkedin.com/in/garvinchanderia"],
    "knowsAbout": [
      "Enterprise Architecture",
      "Business Intelligence",
      "B2B Introductions",
      "OSHA Compliance Market",
      "Commercial Tenant Improvement",
      "Warehouse Automation"
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
    "description": "GarvinLabs connects businesses with qualified service providers when they're actively looking to buy. It identifies companies with a live need (an OSHA citation or inspection, a new commercial lease, a warehouse expansion), checks the fit, and introduces safety and compliance consultants, commercial fit-out contractors and warehouse automation integrators directly to the buyer."
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
