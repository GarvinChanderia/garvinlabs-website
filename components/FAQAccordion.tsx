"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What if the AI sends a wrong reply to a customer?",
    a: "It won't auto-send anything it isn't confident about. The system only sends automatically when it's highly certain the reply is correct. Everything else gets drafted and flagged for your review before anything goes out. Your brand reputation is never at risk from an unchecked reply.",
  },
  {
    q: "We already have a helpdesk tool.",
    a: "This works alongside whatever you're already using. Your helpdesk handles the interface. This handles the reading, sorting, and replying before your team opens a single ticket.",
  },
  {
    q: "We're not technical enough to maintain this.",
    a: "You don't need to be. The documentation is written for non-technical operators. The system runs itself. We build it so your team understands what it's doing and why.",
  },
  {
    q: "What if our tickets are too complex for AI?",
    a: "The system sends complex tickets to humans, with context already prepared. The AI handles the sorting and drafting. A human makes the final call on anything that warrants it.",
  },
  {
    q: "How long does the build take?",
    a: "It depends on your brand's complexity: number of ticket types, depth of your policies, and how quickly we can complete the Discover phase together. We'll give you a realistic timeline on the call, not before we understand your setup.",
  },
  {
    q: "What if we have seasonal spikes (BFCM, etc.)?",
    a: "The system scales with volume. No seat-based pricing, no per-ticket fees. Infrastructure cost stays flat whether you get 200 or 2,000 tickets in a day.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-wrapper">
      <h3 className="faq-heading">Common questions</h3>
      {FAQS.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span>{item.q}</span>
            <span className={`faq-icon${openIndex === i ? " open" : ""}`} aria-hidden="true">+</span>
          </button>
          <div
            id={`faq-answer-${i}`}
            className={`faq-answer${openIndex === i ? " open" : ""}`}
            role="region"
          >
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
