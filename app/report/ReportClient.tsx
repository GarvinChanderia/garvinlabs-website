"use client";

import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";

const ENDPOINT =
  process.env.NEXT_PUBLIC_REPORT_ENDPOINT ||
  "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec";

const BULLETS = [
  "Why support costs are higher than they appear in your P&L: and what to do about it",
  "How AI handles tickets at scale without degrading customer experience",
  "What implementation actually looks like: timeline, risk, what you hand over",
  "Ready-to-present format: your team can take this into any budget meeting",
];

export function ReportClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const n = name.trim();
    const em = email.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

    setNameInvalid(!n);
    setEmailInvalid(!em || !emailOk);

    if (!n || !em || !emailOk) {
      setStatus({ type: "err", msg: "Please enter your name and a valid email." });
      return;
    }

    setSubmitting(true);

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: n,
          email: em,
          source: "report-page",
          submittedAt: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          referrer: typeof document !== "undefined" ? document.referrer || "" : "",
        }),
      });

      setSubmitted(true);
    } catch {
      setSubmitting(false);
      setStatus({
        type: "err",
        msg: "Something went wrong. Email chanderia.10.garvin@gmail.com and I'll send it over.",
      });
    }
  }

  return (
    <>
      <a href="#reportForm" className="report-skip">
        Skip to form
      </a>

      <nav className="report-nav">
        <a href="/" className="report-logo" aria-label="GarvinLabs home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-wordmark.svg" alt="GarvinLabs" height="20" style={{ display: "block" }} />
        </a>
        <a href="/" className="report-back">
          ← Back to site
        </a>
      </nav>

      <main className="report-main">
        <div className="report-split">
          {/* Left: copy */}
          <div className="report-copy">
            <span className="report-eyebrow">
              <span className="report-eyebrow-dot" />
              Free Business Case
            </span>
            <h1 className="report-headline">
              The AI support business case,{" "}
              <span className="report-accent">pre-built for leadership sign-off.</span>
            </h1>
            <p className="report-lead">
              Drop your email and I&apos;ll send it straight to your inbox. No drip sequence.
              No pitch calls.
            </p>
            <ul className="report-bullets">
              {BULLETS.map((b) => (
                <li key={b}>
                  <span className="report-bullet-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: gate */}
          <div className="report-gate">
            <div className="report-cover-wrap">
              <Image
                src="/website-images/pdf-report-cover.jpg"
                alt="AI Support Business Case: PDF cover"
                width={320}
                height={415}
                priority
                className="report-cover-img"
              />
            </div>

            {!submitted ? (
              <form
                id="reportForm"
                className="report-form"
                noValidate
                onSubmit={onSubmit}
              >
                <div className="report-field">
                  <label htmlFor="report-name">Your name</label>
                  <input
                    type="text"
                    id="report-name"
                    name="name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={nameInvalid || undefined}
                    aria-describedby="report-status"
                  />
                </div>
                <div className="report-field">
                  <label htmlFor="report-email">Work email</label>
                  <input
                    type="email"
                    id="report-email"
                    name="email"
                    placeholder="jane@brand.com"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={emailInvalid || undefined}
                    aria-describedby="report-status"
                  />
                </div>

                <button type="submit" className="report-submit" disabled={submitting}>
                  <span>{submitting ? "Sending…" : "Send me the PDF"}</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>

                <div
                  className={`report-status${status ? ` ${status.type}` : ""}`}
                  id="report-status"
                  role="status"
                  aria-live="polite"
                >
                  {status?.msg || ""}
                </div>

                <p className="report-fine">
                  Delivered to your inbox within a few minutes. No spam. Unsubscribe any time.
                </p>
              </form>
            ) : (
              <div className="report-success">
                <div className="report-check" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width={26}
                    height={26}
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h2>Check your inbox.</h2>
                <p>
                  Your business case is on its way. If it doesn&apos;t arrive within 10 minutes,
                  check your spam folder or email{" "}
                  <a href="mailto:chanderia.10.garvin@gmail.com">
                    chanderia.10.garvin@gmail.com
                  </a>
                  .
                </p>
                <div className="report-success-cta">
                  <p>Ready to see it working on a live brand?</p>
                  <a
                    href="https://calendly.com/labs-garvin/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="report-book-btn"
                  >
                    Book a 30-min call
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      width={14}
                      height={14}
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
