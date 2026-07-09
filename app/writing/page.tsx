import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Writing: Garvin Chanderia",
  description:
    "Support triage systems for D2C brands. What I've built, what I've learned, and how to think about automating customer support without breaking what makes it good.",
};

const POSTS = [
  {
    slug: "why-ai-implementations-dont-stick",
    title: "Why most AI implementations don't stick",
    description:
      "The failure mode is almost always the same: the automation was designed before anyone understood how the business actually operated. Not how it was documented, how it actually ran.",
    tag: "D2C · Support Triage · Operations",
  },
];

export default function Writing() {
  return (
    <main>
      <Navbar />
      <div className="container section" style={{ maxWidth: 800 }}>
        <p className="section-eyebrow">Writing</p>
        <h1 className="section-title">Support triage systems for D2C brands.</h1>
        <p className="writing-intro">
          I built and shipped a production support triage system for a D2C operator.
          61% auto-resolution, 94%+ classification accuracy, live in their inbox. This is
          where I write about what I learned: what the operations actually look like, why
          most support automation doesn&apos;t stick, and what the architecture decisions
          are that make the difference.
        </p>
        <div className="post-list">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="post-list-card"
            >
              <p className="post-tag">{post.tag}</p>
              <h2 className="post-list-title">{post.title}</h2>
              <p className="post-list-desc">{post.description}</p>
              <span className="post-list-cta">Read →</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
