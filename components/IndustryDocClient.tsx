"use client";

import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";

const ENDPOINT =
  process.env.NEXT_PUBLIC_REPORT_ENDPOINT ||
  "https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec";

export type IndustryDocConfig = {
  source: string;
  eyebrow: string;
  headline: React.ReactNode;
  lead: string;
  bullets: string[];
  coverImage: string;
  coverAlt: string;
  emailLabel: string;
};

export function IndustryDocClient({ config }: { config: IndustryDocConfig }) {
  const { source, eyebrow, headline, lead, bullets, coverImage, coverAlt, emailLabel } = config;

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
          source,
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
        <a href="/resources" className="report-back">
          ← Back to resources
        </a>
      </nav>

      <main className="report-main">
        <div className="report-split">
          <div className="report-copy">
            <span className="report-eyebrow">
              <span className="report-eyebrow-dot" />
              {eyebrow}
            </span>
            <h1 className="report-headline">{headline}</h1>
            <p className="report-lead">{lead}</p>
            <ul className="report-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="report-bullet-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="report-gate">
            <div className="report-cover-wrap">
              <Image
                src={coverImage}
                alt={coverAlt}
                width={320}
                height={415}
                priority
                className="report-cover-img"
              />
            </div>

            {!submitted ? (
              <form id="reportForm" className="report-form" noValidate onSubmit={onSubmit}>
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
                  <span>{submitting ? "Sending…" : `Send me the ${emailLabel}`}</span>
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
                  Your {emailLabel} is on its way. If it doesn&apos;t arrive within 10 minutes,
                  check your spam folder or email{" "}
                  <a href="mailto:chanderia.10.garvin@gmail.com">chanderia.10.garvin@gmail.com</a>.
                </p>
                <div className="report-success-cta">
                  <p>
                    Questions on how this maps to your setup? Reply to the email it arrives from,
                    happy to talk through specifics.
                  </p>
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
