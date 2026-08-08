"use client";

import { useState } from "react";
import type { ResourceSlug } from "@/lib/resourceSlugs";

const ERROR_COPY: Record<string, string> = {
  invalid_email: "That doesn't look like a valid email address.",
  undeliverable_domain: "That email domain doesn't accept mail. Double check it.",
  invalid_slug: "Something went wrong. Refresh and try again.",
  network: "Something went wrong. Try again in a moment.",
};

export function ResourceEmailGate({
  slug,
  downloadHref,
}: {
  slug: ResourceSlug;
  downloadHref: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/pdf-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(ERROR_COPY[data.error] ?? ERROR_COPY.network);
        setStatus("idle");
        return;
      }

      setStatus("done");
      window.location.href = downloadHref;
    } catch {
      setError(ERROR_COPY.network);
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div>
        <p style={{ color: "var(--ink)", fontWeight: 600, marginBottom: "0.5rem" }}>
          Your download should start automatically.
        </p>
        <a href={downloadHref} download className="btn-primary btn-large" style={{ width: "100%", justifyContent: "center" }}>
          Download PDF
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        style={{
          width: "100%",
          padding: "0.7rem 0.9rem",
          borderRadius: "var(--radius-input)",
          border: "var(--border)",
          background: "transparent",
          color: "var(--ink)",
          fontSize: "0.95rem",
          marginBottom: "0.6rem",
        }}
      />
      {error && (
        <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginBottom: "0.6rem" }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary btn-large"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {status === "submitting" ? "Checking..." : "Get the PDF"}
      </button>
    </form>
  );
}
