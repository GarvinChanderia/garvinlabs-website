"use client";

import { useEffect, useRef, useId } from "react";

interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Tilt strength on hover in degrees. Default 5 */
  tiltDeg?: number;
  /** Border radius. Default "28px" */
  radius?: string;
  /** Blur amount. Default "28px" */
  blur?: string;
  /** Accent glow on hover — set false to disable */
  accentGlow?: boolean;
}

/**
 * LiquidGlass — macOS Spotlight-style frosted glass card.
 *
 * Why NOT SVG feDisplacementMap here:
 *   SVG filters on `filter:` apply to an element's OWN rendered pixels,
 *   not the content behind it. To displace the background you'd need
 *   `backdrop-filter: url(#id)` which only works in Chrome 76+ with a flag.
 *   Applying it to `filter:` just warps whatever is INSIDE the card/navbar,
 *   which causes the visible bleed-through shown in the screenshot.
 *
 * What Apple's Spotlight glass actually uses (and what we replicate):
 *
 *   Layer 1 — Frosted blur
 *     backdrop-filter: saturate(180%) blur(28px)
 *     background: rgba(28,28,30, 0.65)      (dark frosted base)
 *
 *   Layer 2 — Glass body tint
 *     Subtle rgba white fill: rgba(255,255,255,0.055)
 *     Creates the slightly-lighter-than-background feel of glass
 *
 *   Layer 3 — Rim border (::before)
 *     1px stroke border with brighter top edge via box-shadow inset
 *     This is the "edge of the glass" catching light
 *
 *   Layer 4 — Specular highlight (::after)
 *     Soft radial gradient from upper-left white → transparent
 *     Simulates the primary light source hitting curved glass
 *
 *   Layer 5 — Top edge shimmer
 *     A 1px linear-gradient line across the top — the brightest
 *     specular point where light reflects off the glass rim
 *
 *   Mouse parallax tilt
 *     rotateX/Y up to 6° following cursor — gives the liquid wobble
 */
export default function LiquidGlass({
  children,
  className = "",
  style = {},
  tiltDeg = 5,
  radius = "28px",
  blur = "28px",
  accentGlow = true,
}: LiquidGlassProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const card = cardRef.current;
    if (!card || typeof window === "undefined") return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width * 0.5);   // –1 … +1
      const dy = (e.clientY - cy) / (rect.height * 0.5);
      const rx = -dy * tiltDeg;
      const ry = dx * tiltDeg;
      // also shift the specular highlight position to follow cursor
      const sx = 30 + dx * 20;   // 10–50% horizontal
      const sy = 20 + dy * 15;   // 5–35% vertical
      card.style.setProperty("--spec-x", `${sx}%`);
      card.style.setProperty("--spec-y", `${sy}%`);
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    };

    const onLeave = () => {
      card.style.transform = "";
      card.style.setProperty("--spec-x", "30%");
      card.style.setProperty("--spec-y", "20%");
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [tiltDeg]);

  return (
    <div
      id={`lg-${id.replace(/:/g, "")}`}
      ref={cardRef}
      className={`spotlight-glass ${className}`}
      style={
        {
          "--radius": radius,
          "--blur": blur,
          "--spec-x": "30%",
          "--spec-y": "20%",
          ...style,
        } as React.CSSProperties
      }
      data-accent-glow={accentGlow ? "true" : "false"}
    >
      {children}
    </div>
  );
}
