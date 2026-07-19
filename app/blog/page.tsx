import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog: Garvin Chanderia",
  description:
    "Automation playbooks for D2C operators: what breaks in manual operations, what a build actually looks like, and the sourced numbers behind the case for automating it.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog: Garvin Chanderia",
    description:
      "Automation playbooks for D2C operators: what breaks in manual operations, what a build actually looks like, and the sourced numbers behind the case for automating it.",
    url: "https://garvinlabs.com/blog",
    siteName: "GarvinLabs",
    type: "website",
  },
};

const POSTS = [
  {
    slug: "abandoned-cart-recovery",
    title: "Abandoned cart recovery: the automation almost everyone already half has",
    description:
      "70.22% of online carts get abandoned (Baymard). Most brands already have a default recovery flow running, untouched, tuned for nobody in particular. Here's the gap between that and a well-built one.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://garvinlabs.com/blog/#blog",
  name: "GarvinLabs Blog",
  url: "https://garvinlabs.com/blog",
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  blogPost: POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://garvinlabs.com/blog/${post.slug}`,
  })),
};

export default function Blog() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <div className="container section" style={{ maxWidth: 1100 }}>
        <p className="section-eyebrow">Blog</p>
        <h1 className="section-title">Automation playbooks for D2C operators.</h1>
        <p className="writing-intro">
          What the manual version of a process actually costs, what a real build looks
          like end to end, and the sourced numbers behind the case for automating it.
          Category by category, starting with the one almost every brand already half has.
        </p>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-grid-card"
            >
              <p className="post-tag">{post.tag}</p>
              <h2 className="blog-grid-title">{post.title}</h2>
              <p className="blog-grid-desc">{post.description}</p>
              <span className="post-list-cta">Read →</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
