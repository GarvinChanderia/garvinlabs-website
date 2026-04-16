"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const ENDPOINT =
  process.env.NEXT_PUBLIC_PDF_ENDPOINT ||
  "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec";

const CONTENT = {
  saas: {
    eyebrow: "SaaS Teardown · Free",
    headlineLead: "Where hours die in SaaS ops, and ",
    headlineAccent: "the 5 systems that fix it",
    headlineTail: ".",
    lead:
      "Drop your email and we'll send the PDF straight to your inbox. No strategy call. No drip sequence traps.",
    bullets: [
      "The 5 most common manual-ops drains in SaaS teams of 20–200 people",
      "The likely dollar cost of each at scale",
      "The specific AI + automation system that replaces it. Not a spec doc.",
    ],
    cover: "/website-images/pdf-saas-cover.png",
    coverAlt: "SaaS teardown cover",
  },
  d2c: {
    eyebrow: "D2C Teardown · Free",
    headlineLead: "The 4 revenue leaks in D2C, ",
    headlineAccent: "with recovery estimates",
    headlineTail: " per leak.",
    lead:
      "Drop your email and we'll send the PDF straight to your inbox. No strategy call. No drip sequence traps.",
    bullets: [
      "The 4 biggest recoverable revenue leaks in D2C brands doing $1M+",
      "Dollar recovery estimates per leak",
      "The specific AI + messaging systems that seal each one",
    ],
    cover: "/website-images/pdf-d2c-cover.png",
    coverAlt: "D2C teardown cover",
  },
} as const;

type PdfKey = keyof typeof CONTENT;

function isPdfKey(v: string | null): v is PdfKey {
  return v === "saas" || v === "d2c";
}

export function PDFClient() {
  const params = useSearchParams();
  const raw = params.get("pdf");
  const pdfType: PdfKey = isPdfKey(raw) ? raw : "saas";
  const c = useMemo(() => CONTENT[pdfType], [pdfType]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  useEffect(() => {
    document.title = `${c.eyebrow} | GarvinLabs`;
  }, [c.eyebrow]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const n = name.trim();
    const em = email.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

    setNameInvalid(!n);
    setEmailInvalid(!em || !emailValid);

    if (!n || !em || !emailValid) {
      setStatus({ type: "err", msg: "Please enter your name and a valid email." });
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: n,
        email: em,
        pdf: pdfType,
        source: "pdf-page",
        submittedAt: new Date().toISOString(),
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      };

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch {
      setSubmitting(false);
      setStatus({
        type: "err",
        msg: "Something went wrong. Please email labs.garvin@gmail.com and we'll send it over.",
      });
    }
  }

  return (
    <div className="pdf-page-bg">
      <a href="#pdfForm" className="skip-link">
        Skip to form
      </a>

      <nav className="pdf-top-nav">
        <a href="/" className="logo">
          Garvin
          <em>
            Labs<span style={{ color: "var(--green)" }}>.</span>
          </em>
        </a>
        <a href="/" className="pdf-back">
          ← Back to site
        </a>
      </nav>

      <main className="pdf-main">
        <div className="pdf-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {c.eyebrow}
          </span>
          <h1>
            {c.headlineLead}
            <span className="accent">{c.headlineAccent}</span>
            {c.headlineTail}
          </h1>
          <p className="pdf-lead">{c.lead}</p>
          <ul>
            {c.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="pdf-card-wrap">
          <div className="pdf-cover-wrap">
            <Image src={c.cover} alt={c.coverAlt} width={480} height={624} priority />
          </div>

          {!submitted ? (
            <form id="pdfForm" className="pdf-form" noValidate onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={nameInvalid || undefined}
                  aria-describedby="pdf-status"
                />
              </div>
              <div>
                <label htmlFor="email">Work email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={emailInvalid || undefined}
                  aria-describedby="pdf-status"
                />
              </div>
              <button type="submit" className="pdf-submit" disabled={submitting}>
                <span>{submitting ? "Sending…" : "Send me the teardown"}</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  width={16}
                  height={16}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
              <div
                className={`pdf-status${status ? ` ${status.type}` : ""}`}
                id="pdf-status"
                role="status"
                aria-live="polite"
              >
                {status?.msg || ""}
              </div>
              <p className="pdf-fine">
                Delivered to your inbox in a few minutes. No spam. Unsubscribe any time.
              </p>
            </form>
          ) : (
            <div className="pdf-success">
              <div className="check">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={28}
                  height={28}
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <h2>Check your inbox.</h2>
              <p>
                Your teardown is on its way. If it doesn&apos;t show up in 10 minutes, check spam,
                or email{" "}
                <a href="mailto:labs.garvin@gmail.com" style={{ color: "var(--green-deep)" }}>
                  labs.garvin@gmail.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
