const faqs = [
  {
    question: "What exactly is a conversion audit?",
    answer:
      "I put together a detailed PDF audit report covering your landing page or funnel. I check 7 areas — headline clarity, CTA effectiveness, social proof placement, value proposition, messaging, UX flow, and conversion killers. For each issue I find, I give you the exact fix — not vague advice like \"improve your CTA,\" but specific rewrites and annotated screenshots.",
  },
  {
    question: "How is this different from hiring a designer or agency?",
    answer:
      "Designers change how your page looks. I change how your page converts. Most conversion issues are copy, structure, and placement problems — not design problems. A headline rewrite or CTA change takes 20 minutes and can increase conversions by 20-40%. A full redesign costs ₹50K-₹2L and often doesn't fix the actual leaks.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "It depends on how broken your current funnel is — but the worse it is, the bigger the improvement. Common wins: single headline rewrites increasing demo bookings by 30-40%, moving social proof above the fold doubling form submissions, fixing CTA copy increasing click-through by 2-3x. I've audited 938 pages in a single project.",
  },
  {
    question: "How long does it take?",
    answer:
      "Conversion Audit: 1-2 days. You get a PDF report with every issue and fix. Conversion Sprint: 5-7 days. I audit and implement all fixes. Conversion System Sprint: 7-10 days. Full funnel redesign and implementation.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Your landing page URL. That's it. If you have specific pages or funnels you're worried about, share those too. If you have analytics data (conversion rates, traffic sources), it helps me prioritize — but it's not required.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. The audit and fixes are delivered digitally — PDF reports, documented recommendations, and implemented changes. Location doesn't matter. Most communication happens over WhatsApp or email.",
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
            className="text-xs font-semibold text-[#00AE43] uppercase tracking-widest"
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
            <div key={faq.question} className="bg-[#0A0A0A] p-8" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3
                className="text-base font-bold text-[#F5F5F5] mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-[#A0A0A0] text-sm leading-relaxed" itemProp="text" data-speakable="true">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
