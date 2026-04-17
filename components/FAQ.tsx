"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly do I get for $200?",
    a: (
      <p>
        A written opportunity map of your ops or revenue stack, the top 3 automation opportunities
        ranked by monthly $ impact, effort and cost estimates per opportunity, a specific scoped
        recommendation for what to build first, and a 15–20 minute Loom walkthrough you can forward
        to your team. Delivered in 72 hours after our discovery call.
      </p>
    ),
  },
  {
    q: "What tools do you build with?",
    a: (
      <p>
        n8n for workflow automation, WhatsApp Business API for messaging, Shopify webhooks for D2C,
        Claude and GPT for the AI layers, and whatever CRM or data tool already lives in your
        stack. I pick tools that fit. Not whatever&apos;s trending on Twitter.
      </p>
    ),
  },
  {
    q: "How fast can you actually deliver?",
    a: (
      <p>
        Diagnostic: 72 hours. AI Implementation: 1–4 weeks depending on scope. Full System Build:
        6–12 weeks. These are hard timelines. If I miss a date, you don&apos;t pay the balance
        until it ships.
      </p>
    ),
  },
  {
    q: "What are the payment terms?",
    a: (
      <p>
        50% upfront, 50% on delivery. No retainers. No hourly billing. No surprise invoices. You
        pay once to start and once to finish. That&apos;s it.
      </p>
    ),
  },
  {
    q: "Do I need a Diagnostic before a build?",
    a: (
      <p>
        Yes, for any Build engagement. The Diagnostic is what lets me quote fixed price and ship on
        a fixed date. Without it, I&apos;d be guessing. And guessing is how projects blow their
        scope.
      </p>
    ),
  },
  {
    q: "Who runs GarvinLabs?",
    a: (
      <p>
        Garvin Chanderia. Former BI developer, product consultant, and founder. Based in Pune,
        India. Working remotely with clients across the US, EU, and India. WhatsApp:{" "}
        <a href="https://wa.me/919356249535">+91 93562 49535</a> · Email:{" "}
        <a href="mailto:labs.garvin@gmail.com">labs.garvin@gmail.com</a>
      </p>
    ),
  },
  {
    q: "What results should I expect?",
    a: (
      <p>
        Depends on the scope, but here&apos;s what past builds have delivered: a 40% reduction in
        workflow turnaround at a Fortune 500 client, 938 personalised outreach pages automated for
        a single campaign, and 26 process documents built from scratch that a manufacturing team
        uses daily. The Diagnostic will tell you specifically what&apos;s achievable in your stack
        before any build commitment.
      </p>
    ),
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-head reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>Common Questions
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            Straight answers.
          </h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            const answerId = `faq-a-${i + 1}`;
            return (
              <div key={faq.q} className={`faq-item${open ? " open" : ""}`}>
                <button
                  className="faq-q"
                  aria-expanded={open}
                  aria-controls={answerId}
                  onClick={() => setOpenIdx(open ? null : i)}
                >
                  {faq.q}
                  <span className="faq-q-icon">{open ? "–" : "+"}</span>
                </button>
                <div className="faq-a" id={answerId}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
