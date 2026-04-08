const faqs = [
  {
    question: "What is n8n automation and how can it help my business?",
    answer:
      "n8n is a workflow automation platform that connects your business tools and automates repetitive tasks. GarvinLabs uses n8n to build lead capture pipelines, WhatsApp bots, CRM integrations, and booking systems — so your team stops doing manual work and your systems run 24/7.",
  },
  {
    question: "How much does an automation workflow cost?",
    answer:
      "n8n automation builds start at ₹20,000 for a single workflow and go up to ₹1,50,000 for a full automation layer with 4+ connected workflows. Lead generation engines start at ₹1,50,000 for a starter build. All pricing is transparent — no hidden costs.",
  },
  {
    question: "How long does it take to build an automation system?",
    answer:
      "Single n8n workflows are typically delivered in 1 week. Multi-workflow automation systems take 2 weeks. Lead generation engines take 3–6 weeks depending on complexity. GarvinLabs uses AI-assisted delivery to move 2–3x faster than traditional freelancers.",
  },
  {
    question: "What industries does GarvinLabs work with?",
    answer:
      "GarvinLabs works with SME owners (5–50 employees), startup founders, and agencies across healthcare, logistics, sports tech, manufacturing, and services. If you have a process that could be automated, we can build it.",
  },
  {
    question: "Do you build lead generation systems for businesses in India?",
    answer:
      "Yes. GarvinLabs is based in Pune, India and specializes in building AI-powered lead generation systems for Indian businesses. We've processed 1,100+ leads in a single pipeline for a dental practice outreach campaign. We build systems for local and national markets.",
  },
  {
    question: "What happens after the system is built?",
    answer:
      "Every system is documented and handed over to your team. GarvinLabs stays available for iterations and questions. You own the system — it runs on your infrastructure or ours.",
  },
];

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#222222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#D4A853] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            FAQ
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Common questions
          </h2>
        </div>

        <div className="max-w-3xl space-y-px bg-[#222222]">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-[#0A0A0A] p-8">
              <h3
                className="text-base font-bold text-[#F5F5F5] mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {faq.question}
              </h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
