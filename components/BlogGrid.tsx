"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  category: string;
};

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="blog-filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`blog-filter-pill${c === active ? " active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="blog-grid">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-grid-card">
            <div className="blog-grid-thumb">
              <Image
                src={`/blog/${post.slug}/cover.png`}
                alt={post.title}
                width={4800}
                height={2520}
              />
            </div>
            <div className="blog-grid-content">
              <p className="post-tag">{post.tag}</p>
              <h2 className="blog-grid-title">{post.title}</h2>
              <p className="blog-grid-desc">{post.description}</p>
              <span className="post-list-cta">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
