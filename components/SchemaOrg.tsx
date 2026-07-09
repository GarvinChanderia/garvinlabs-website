export default function SchemaOrg() {
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
