const FAQS = [
  {
    q: "What if the AI sends a wrong reply to a customer?",
    a: "It won't auto-send anything it isn't confident about. The system only sends automatically when it's highly certain the reply is correct. Everything else gets drafted and flagged for your review before anything goes out. Your brand reputation is never at risk from an unchecked reply.",
  },
  {
    q: "Does this work with our existing helpdesk tool?",
    a: "Yes. This works alongside whatever helpdesk you're already using — Gorgias, Zendesk, Freshdesk, Intercom. Your helpdesk handles the interface. This handles the reading, sorting, and replying before your team opens a single ticket.",
  },
  {
    q: "Do we need technical knowledge to run this?",
    a: "No. The documentation is written for non-technical operators. The system runs itself. We build it so your team understands what it's doing and why — no developer required after handoff.",
  },
  {
    q: "What if our tickets are too complex for AI?",
    a: "The system routes complex tickets to humans with context already prepared. The AI handles the sorting and drafting. A human makes the final call on anything that warrants it.",
  },
  {
    q: "How long does the build take?",
    a: "Most builds are live within 2 weeks of the discovery call: Days 1–3 for Discover (one 90-minute session), Days 4–10 for Build and Test, and Day 11 onward for Deploy and Hand Off with 14 days of post-launch support included.",
  },
  {
    q: "What if we have seasonal spikes (BFCM, etc.)?",
    a: "The system scales with volume. No seat-based pricing, no per-ticket fees. Infrastructure cost stays flat whether you get 200 or 2,000 tickets in a day.",
  },
];

export default function FAQAccordion() {
  return (
    <div className="faq-wrapper">
      <h3 className="faq-heading">Common questions</h3>
      {FAQS.map((item, i) => (
        <details key={i} className="faq-item">
          <summary className="faq-trigger">
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </summary>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
