import type { Metadata } from "next";
import Image from "next/image";
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
  {
    slug: "back-in-stock-alerts",
    title: "A waitlist that never hears back isn't a waitlist",
    description:
      "A batch restock email misses the customers who mattered most: the ones who wanted one specific variant. What a delivery-triggered, variant-level alert looks like, and the one sourced number behind it.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "bulk-order-and-b2b-lead-alert",
    title: "The wholesale buyer who waited two days for nobody to notice",
    description:
      "A fifty-chair order lands through the normal consumer checkout and sits in the queue, indistinguishable from every single-item purchase. What real-time order-size detection and routing looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "delivery-scheduling-and-notification",
    title: "A missed delivery is a scheduling problem wearing a logistics costume",
    description:
      "Bulky items need someone home to receive them, which makes delivery scheduling a phone-tag problem most brands still solve with people. What a self-service scheduling flow looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "instant-customer-support",
    title: "Instant answers for the questions you've already answered a thousand times",
    description:
      "One founder's ticket audit found 61% of his support inbox was questions already answered in the FAQ. What a grounded, confidence-scored auto-reply system looks like, and its safety carve-outs.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "low-inventory-and-expiry-alerts",
    title: "The stockout a customer notices before you do",
    description:
      "Periodic inventory checks catch a stockout after it's already cost you a customer. What continuous, per-SKU threshold monitoring with a parallel expiry clock looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "post-purchase-cross-sell-recommendations",
    title: "The pairing your customer never found out you sold",
    description:
      "A curated pairing table matched to the order that just shipped beats generic 'you might also like' email, because it's tied to what the customer actually bought.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "post-purchase-review-and-ugc-collection",
    title: "The product page loses the sale before the customer reads a word of copy",
    description:
      "A product page converts 52.2% better once it has even one real review. What a delivery-triggered, category-aware review and UGC request sequence looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "quiz-based-product-recommendations",
    title: "The quiz that promised a personal plan and then went silent",
    description:
      "A quiz results page promises a personal plan, then the follow-up email is the same generic send everyone gets. What a completion-triggered, answer-matched system looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "returns-and-exchange-automation",
    title: "A slow return is how you lose a customer you already won",
    description:
      "\"Our returns process was all manual,\" says a footwear brand's ops director, describing phone-and-spreadsheet chaos. What a policy-check-plus-label automation looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "shipping-and-tracking-updates",
    title: "The tracking link you could have sent automatically",
    description:
      "WISMO tickets come from silence, not slow shipping: a webhook-triggered system that captures the tracking number at label creation and flags stalls before the customer notices.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "social-content-scheduling",
    title: "Going quiet for three weeks costs more than a bad post",
    description:
      "Content gets made in bursts because it's rarely anyone's actual job, and the queue empties the moment something else demands attention. What a drafting-plus-review pipeline looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "subscription-box-preview-announcements",
    title: "A surprise box is only fun until it isn't your taste",
    description:
      "Subscription-box churn from a mismatched month never generates a ticket, so it never generates a signal either. What a charge-date-anchored teaser-and-skip cadence looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "subscription-renewal-and-payment-recovery",
    title: "The subscription that silently ends because a card expired",
    description:
      "75% of customers who lose a subscription to a failed payment never sign back up, per Butter Payments founder Vijay Menon. What a pre-emptive recovery automation looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "vip-customer-recognition",
    title: "Your best customers can tell when you haven't noticed them",
    description:
      "Most brands have no system for knowing who their best customers are, just a hunch and a stale spreadsheet. What a threshold-triggered recognition automation looks like.",
    tag: "D2C · Ecommerce · Automation Playbook",
  },
  {
    slug: "wellness-tips-newsletter",
    title: "The newsletter that promised weekly and delivered quarterly",
    description:
      "An inconsistent newsletter trains subscribers to stop opening it entirely. What a content-source-library-plus-review pipeline for wellness brands looks like.",
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
      </div>
      <Footer />
    </main>
  );
}
