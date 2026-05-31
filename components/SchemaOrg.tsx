export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    "name": "Garvin Chanderia",
    "url": "https://garvinlabs.com",
    "jobTitle": "Enterprise Architecture Consultant",
    "description": "Enterprise Architecture Consultant and AI & automation practitioner. Builds systems that replace manual operations — AI pipelines, automation layers, and intelligent workflows.",
    "sameAs": ["https://linkedin.com/in/garvinchanderia"],
    "knowsAbout": [
      "Enterprise Architecture",
      "AI Automation",
      "System Integration",
      "n8n",
      "AI Implementation",
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
