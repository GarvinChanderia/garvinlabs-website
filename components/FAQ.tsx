import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";

const faqs = [
  {
    question: "What industries does GarvinLabs work with?",
    answer:
      "We work across healthcare, logistics, sports tech, edtech, manufacturing, and media. Our clients range from creative founders building portfolio websites to SME owners needing full automation systems.",
  },
  {
    question: "How fast can you deliver a project?",
    answer:
      "Most websites ship in 2-3 weeks. Automation workflows in 1-2 weeks. Software MVPs in 4-8 weeks. We use AI-enabled delivery to move 2-3x faster than traditional freelancers.",
  },
  {
    question: "What does a free strategy call include?",
    answer:
      "A 20-minute call where we understand your business, identify the real problem, and map out quick wins. No pitch, no commitment — just clarity on what you need and whether we're the right fit.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "We're based in Pune, India and primarily serve Indian businesses. International clients are welcome — we work async with clear communication and weekly updates.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "50% upfront to start, 50% on delivery. For larger projects, we can break it into milestone-based payments. All proposals include transparent pricing with no hidden costs.",
  },
  {
    question: "Can you handle large software projects?",
    answer:
      "Yes. We have a 4-person development team ready for larger builds. We've delivered SaaS platforms, mobile apps, and enterprise automation systems across multiple industries.",
  },
];

export function FAQ() {
  const faqJsonLd = {
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
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="FAQ"
            title="Common questions"
          />
        </ScrollReveal>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={(i + 1) * 100}>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
