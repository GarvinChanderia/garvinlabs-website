"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export type Build = {
  id: string;
  tag: string;
  title: string;
  image?: string;
  alt?: string;
  video?: string;
  problem: string;
  howSolved: string;
  cost: string;
  stats: { num: string; label: string }[];
  stack: string[];
  cta?: { label: string; href: string };
};

export function BuildsGrid({ builds }: { builds: Build[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const close = useCallback(() => {
    setOpenId(null);
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }, []);

  const open = useCallback((id: string) => {
    setOpenId(id);
    history.replaceState(null, "", `#${id}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && builds.some((b) => b.id === hash)) {
      setOpenId(hash);
    }
  }, [builds]);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openId, close]);

  const active = builds.find((b) => b.id === openId);

  return (
    <>
      <div className="builds-grid">
        {builds.map((b) => (
          <div key={b.id} className="build-grid-card reveal">
            <button
              type="button"
              className="build-grid-card-trigger"
              onClick={() => open(b.id)}
              aria-haspopup="dialog"
            >
              <div className="build-grid-card-media">
                {b.image ? (
                  <Image src={b.image} alt={b.alt ?? b.title} fill style={{ objectFit: "cover" }} />
                ) : b.video ? (
                  <video src={b.video} muted loop autoPlay playsInline preload="metadata" />
                ) : null}
              </div>
              <div className="build-grid-card-info">
                <p className="build-card-tag">{b.tag}</p>
                <h2 className="build-card-title" style={{ fontSize: "1.1rem" }}>{b.title}</h2>
              </div>
            </button>

            <div className="build-grid-card-footer">
              {b.cta ? (
                <Link href={b.cta.href} className="build-grid-card-cta">
                  {b.cta.label}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ) : (
                <button
                  type="button"
                  className="build-grid-card-cta build-grid-card-cta-button"
                  onClick={() => open(b.id)}
                >
                  View details
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="build-modal-backdrop" onClick={close}>
          <div
            className="build-modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="build-modal-close" onClick={close} aria-label="Close">
              ×
            </button>

            {(active.image || active.video) && (
              <div className="build-modal-media">
                {active.video ? (
                  <video
                    src={active.video}
                    controls
                    playsInline
                    preload="metadata"
                    title={`${active.title}: Walkthrough`}
                  />
                ) : active.image ? (
                  <Image src={active.image} alt={active.alt ?? active.title} fill style={{ objectFit: "cover" }} />
                ) : null}
              </div>
            )}

            <p className="build-card-tag">{active.tag}</p>
            <h2 className="build-card-title">{active.title}</h2>

            <div className="build-card-block" style={{ marginTop: "1.25rem" }}>
              <h3>The Problem</h3>
              <p>{active.problem}</p>
            </div>

            <div className="build-card-block" style={{ marginTop: "1.25rem" }}>
              <h3>How It&apos;s Solved</h3>
              <p>{active.howSolved}</p>
            </div>

            <div className="build-card-cost" style={{ marginTop: "1.25rem" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)", marginBottom: "0.4rem" }}>
                Cost of the Problem
              </p>
              <p style={{ fontSize: "0.975rem", lineHeight: "1.7", color: "var(--ink)" }}>{active.cost}</p>
            </div>

            {active.stats.length > 0 && (
              <div className="proof-stats" style={{ marginTop: "1.25rem" }}>
                {active.stats.map((s) => (
                  <div key={s.label} className="stat-chip">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="project-stack">
              {active.stack.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
