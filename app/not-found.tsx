import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | GarvinLabs",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div
        className="container section"
        style={{ maxWidth: 640, textAlign: "center", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <p className="section-eyebrow">404</p>
        <h1 className="section-title">This page doesn&apos;t exist.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The link might be outdated, or the page moved. Try the homepage or one of the builds.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
          <Link href="/demos" className="btn-secondary">
            See the builds
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
