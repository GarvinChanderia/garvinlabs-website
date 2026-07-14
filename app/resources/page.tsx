import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools and breakdowns for D2C operators: practical resources from the automations built at GarvinLabs.",
};

const RESOURCES = [
  {
    slug: "beauty-cosmetics",
    tag: "PDF · Beauty & Cosmetics",
    title: "7 Automations for Beauty & Cosmetics Brands",
    description:
      "Cart recovery, back-in-stock alerts, review and UGC collection, and support automation, ranked by ROI for beauty and skincare D2C brands.",
    href: "/resources/beauty-cosmetics",
    cta: "View guide →",
  },
  {
    slug: "fashion-apparel",
    tag: "PDF · Fashion & Apparel",
    title: "7 Automations for Fashion & Apparel Brands",
    description:
      "Cart recovery, size exchanges, back-in-stock alerts, and review collection, ranked by ROI for fashion and apparel D2C brands.",
    href: "/resources/fashion-apparel",
    cta: "View guide →",
  },
  {
    slug: "food-beverage",
    tag: "PDF · Food & Beverage",
    title: "7 Automations for Food & Beverage Brands",
    description:
      "Cart recovery, subscription renewals, shipping updates, and taste survey automation, ranked by ROI for food and beverage D2C brands.",
    href: "/resources/food-beverage",
    cta: "View guide →",
  },
  {
    slug: "health-nutrition-wellness",
    tag: "PDF · Health, Nutrition & Wellness",
    title: "7 Automations for Health & Wellness Brands",
    description:
      "Cart recovery, subscription renewals, review collection, and support Q&A automation, ranked by ROI for health, nutrition, and wellness D2C brands.",
    href: "/resources/health-nutrition-wellness",
    cta: "View guide →",
  },
  {
    slug: "home-furniture-decor",
    tag: "PDF · Home, Furniture & Decor",
    title: "7 Automations for Home & Furniture Brands",
    description:
      "Cart recovery, delivery scheduling, post-purchase care, and returns handling, ranked by ROI for home, furniture, and decor D2C brands.",
    href: "/resources/home-furniture-decor",
    cta: "View guide →",
  },
];

export default function Resources() {
  return (
    <main>
      <Navbar />
      <div className="container section" style={{ maxWidth: 1100 }}>
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title">Free tools and breakdowns for D2C operators.</h1>
        <p className="writing-intro">
          Practical resources pulled from the automations built and shipped here.
          Free to use, no strings attached.
        </p>
        <div className="resources-grid">
          {RESOURCES.map((r) => (
            <Link key={r.slug} href={r.href} className="resource-grid-card">
              <p className="post-tag">{r.tag}</p>
              <h2 className="post-list-title">{r.title}</h2>
              <p className="post-list-desc">{r.description}</p>
              <span className="post-list-cta">{r.cta}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
