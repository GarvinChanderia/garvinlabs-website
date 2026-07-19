import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "A waitlist that never hears back isn't a waitlist";
const DESCRIPTION =
  "A batch restock email misses the customers who mattered most: the ones who wanted one specific variant. What a delivery-triggered, variant-level back-in-stock alert looks like, the failure modes, and the one sourced number behind it.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/back-in-stock-alerts" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/blog/back-in-stock-alerts",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/blog/back-in-stock-alerts/flowchart.svg",
        width: 920,
        height: 866,
        alt: "Back-in-stock alert variant-level match and notify logic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    name: "Garvin Chanderia",
    url: "https://garvinlabs.com",
  },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-07-16",
  dateModified: "2026-07-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/blog/back-in-stock-alerts",
  },
  image: "https://garvinlabs.com/blog/back-in-stock-alerts/flowchart.svg",
};

export default function Post() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />

      <aside aria-label="Quick answer" style={{ display: "none" }}>
        A back-in-stock alert works best when it is variant-specific and delivery-triggered:
        watching inventory at the SKU level, matching against a waitlist captured at the same
        level of specificity, and sending the moment a restock event fires rather than on a
        batch schedule. The most-cited number in this space is a 22.45% conversion rate on
        back-in-stock alert emails, from a 2011 MarketingSherpa case study of a single
        retailer, BirkenstockCentral.com.
      </aside>

      <article className="post-layout">
        <header className="post-header">
          <Link href="/blog" className="post-back">← Blog</Link>
          <p className="post-tag">D2C · Ecommerce · Automation Playbook</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-lead">
            A bestseller shade or size sells out. Weeks pass. It comes back, and the
            customers who signed up specifically for that variant get the same generic
            email as everyone else, if they get one at all.
          </p>
        </header>

        <div className="post-body">
          <h2>A founder&#39;s story</h2>
          <p>
            I went looking for a specific kind of quote: a founder, on the record,
            describing the moment they realized a customer had walked to a competitor
            because a waitlist never converted into an actual notification. I searched
            podcast transcripts (Shopify Masters, DTC Pod), Starter Story and Indie
            Hackers interviews, founder blog post-mortems, and ecommerce forum threads. I
            did not find one clean, verbatim quote that matches this exact story
            attributed to a named person I could verify.
          </p>
          <p>
            What I did find, from a real and checkable source, is a founder talking about
            a closely related version of the same problem: the gap between &quot;we told
            the customer something&quot; and &quot;we told the customer something in the
            way that matched how badly they wanted it.&quot; Christian Nørbjerg Enger,
            co-founder and CPO at Segmento, put it this way in a Klaviyo case study:
            &quot;Using email only for a high-demand restock can be a subtle insult to the
            customer&#39;s intent.&quot; He continues: &quot;It communicates,
            &#39;Get to this whenever you have time.&#39; We implemented SMS to match the
            physiological urgency of &#39;I don&#39;t want to miss this again,&#39; which
            aligns better with the customer&#39;s desire.&quot; That&#39;s a real, sourced
            quote about restock communication, not a fabricated one, though it&#39;s
            about channel and urgency rather than the specific &quot;you never told
            me&quot; failure I was originally looking for.
          </p>
          <p>
            So here&#39;s the honest version: a pattern that shows up repeatedly across
            founder interviews and DTC operator threads, not attributed to any single
            named person, because I won&#39;t put words in someone&#39;s mouth that I
            can&#39;t verify they said. A bestseller shade or size sells out. A waitlist
            form catches the interested customers, dozens or hundreds of them. Weeks
            pass. The item comes back, and what actually happens next is either nothing
            (nobody remembers to email the waitlist), or a generic restock announcement
            goes to the whole marketing list, not just the people who asked. The
            customers who signed up specifically for that variant get the same email as
            everyone else, if they get one at all, often after they&#39;ve already
            bought the equivalent item somewhere that did notify them. The founder finds
            out only when a customer support ticket or a comment says some version of
            &quot;I signed up for this months ago and never heard anything.&quot;
            That&#39;s the story. It&#39;s common enough that it didn&#39;t need one
            dramatic quote to be true, but I&#39;d rather say that plainly than invent
            one to make the opening punchier.
          </p>

          <h2>Elaborating the pain</h2>
          <p>
            The batch restock email is the default because it&#39;s the easy thing to
            build: a segment, a campaign, a send. But it fails the customers who mattered
            most in a specific way.
          </p>
          <p>
            A waitlist for a sold-out item is really several audiences bundled together,
            split by exactly which variant someone wanted. Someone who joined a waitlist
            for a size 8 in black doesn&#39;t care that size 6 in white is back. A batch
            email announcing &quot;it&#39;s back!&quot; to the full waitlist, without
            checking which variant actually restocked, either gets ignored by everyone
            who wanted the wrong variant, or worse, sends them to a product page where
            their size still shows sold out. That&#39;s a broken promise delivered as a
            marketing win.
          </p>
          <p>
            Timing compounds it. Batch sends usually go out on a schedule (end of day,
            next morning, whenever someone remembers to build the campaign), not the
            moment stock actually updates. For anything with real demand, that delay is
            the whole game. The customers who cared enough to join a waitlist are, by
            definition, more likely to be watching elsewhere too. A same-day competitor
            restock, a similar item from another brand, an impulse purchase that fills
            the same need: all of it happens in the gap between &quot;back in
            stock&quot; and &quot;customer told.&quot;
          </p>
          <p>
            And a waitlist without an automated trigger is often just a form that
            dead-ends. It captures intent (an email address, sometimes a size or shade
            preference) but doesn&#39;t connect that capture to inventory in any live
            way. Someone has to remember the list exists, remember which variant
            restocked, and manually match the two. In a lot of smaller operations, that
            manual step just doesn&#39;t happen reliably, especially for a mid-tier SKU
            that isn&#39;t the obvious hero product getting all the attention.
          </p>

          <h2>What a solution could look like (the general landscape)</h2>
          <p>
            There isn&#39;t one right way to solve this, and it&#39;s worth being honest
            about what each common option actually does and doesn&#39;t solve.
          </p>
          <p>
            A native platform waitlist widget, the kind bundled into a theme or a basic
            Shopify app, usually just captures an email against a product page. Some of
            these are variant-aware, most aren&#39;t. When stock comes back, they
            typically fire a single templated email to everyone on that product&#39;s
            list, without distinguishing which specific variant restocked. It solves
            &quot;capture interest&quot; and mostly fails at &quot;notify the right
            subset of people at the right moment.&quot;
          </p>
          <p>
            A dedicated back-in-stock app (Back in Stock, Swym, and similar tools) is a
            real step up. These are usually built to be variant-aware and can trigger
            sends automatically when inventory changes, which solves the
            manual-forgetting problem. What they don&#39;t solve on their own: they&#39;re
            still bound by the platform&#39;s inventory update frequency, they add
            another subscription and another data source to reconcile, and the send
            quality (is it going by email, SMS, both, and is the copy actually good)
            varies a lot between vendors.
          </p>
          <p>
            A manual &quot;email the list when it&#39;s back&quot; process is what a lot
            of smaller brands actually run, whether or not they&#39;d call it a process.
            Someone notices stock is back, pulls a list, sends a campaign. It&#39;s cheap
            and requires no new tooling. It&#39;s also the slowest option and the most
            variant-blind, because pulling &quot;everyone who wanted this exact
            size&quot; out of a spreadsheet or a basic app is tedious enough that people
            often just send to everyone who wanted the product at all.
          </p>
          <p>
            A fully custom, variant-specific triggered alert is the most work to build
            and the most precise result. It watches inventory at the variant level,
            matches against a waitlist stored with variant-level detail, and fires the
            moment the match is true, not on a batch schedule. It&#39;s not the right
            investment for every brand. For a store with one or two SKUs and low variant
            complexity, a decent back-in-stock app is probably enough. It starts to
            matter more the more variants a catalog has and the more those variants
            genuinely don&#39;t substitute for each other in a customer&#39;s mind (a
            shade, a fragrance, a size that either fits or doesn&#39;t).
          </p>

          <h2>The solution I&#39;d build</h2>
          <p>
            Here&#39;s how I&#39;d actually build this, if I were solving it as a system
            rather than picking an app off a marketplace.
          </p>
          <p>
            The core idea is simple: don&#39;t treat &quot;back in stock&quot; as a
            product-level event. Treat it as a variant-level event, and match it against
            a waitlist that was captured at the same level of specificity.
          </p>
          <p>
            Start with capture. The waitlist form on a sold-out product page needs to
            record the exact variant, not just &quot;interested in this product.&quot;
            If someone lands on a page for a shirt in six sizes and only size medium is
            sold out, the form needs to know that&#39;s the one they&#39;re waiting for,
            not silently default to &quot;notify me about this product&quot; and lose
            the size.
          </p>
          <p>
            Next, watch inventory at the variant level, not the product level. Most
            platforms expose inventory via webhook or a polling API down to the SKU. The
            system needs to listen for the specific transition that matters: a variant
            going from zero (or below a threshold, if you want to catch &quot;restocked
            but limited&quot;) to available. That&#39;s the trigger, and it needs to
            fire close to real time, not on whatever cadence a batch job happens to run.
          </p>
          <p>
            Then match. When a variant restocks, the system queries the waitlist for
            everyone who asked about that exact variant, not the product family. This is
            the step that&#39;s easy to get lazy about, because it&#39;s tempting to
            just say &quot;someone wanted this product, they&#39;re probably fine with
            any version of it.&quot; They&#39;re often not, and treating a shade or size
            waitlist as interchangeable is exactly the failure this whole system exists
            to fix.
          </p>
          <p>
            Finally, send, immediately, with a direct link to the exact variant (not the
            product page, the actual buyable variant), and ideally through the channel
            most likely to get seen fast. Email is fine for most cases. For something
            genuinely high-demand, matching Christian Nørbjerg Enger&#39;s point above, a
            faster channel like SMS closes the gap between &quot;back&quot; and
            &quot;bought&quot; further, at the cost of needing explicit opt-in and being
            more expensive per send.
          </p>
          <p>
            One more piece worth building in from the start: a short window (minutes,
            not hours) where the system checks it isn&#39;t about to notify more people
            than there&#39;s stock for. That&#39;s a real failure mode, not a minor edge
            case, and it leads into the next section.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/back-in-stock-alerts/flowchart.svg"
              alt="Flowchart of the back-in-stock alert logic: variant-level waitlist capture, continuous inventory watch, a restock check, a match against the exact variant's waitlist, a stampede check that throttles oversubscribed restocks, then an immediate send with a direct link to the variant."
              width={920}
              height={866}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>Pros and cons</h2>
          <p>
            The upside is real: this reaches the customers who are most likely to buy,
            at the moment they&#39;re most likely to buy, with the exact thing they
            asked for. That&#39;s a genuinely different audience than a marketing blast,
            and it behaves differently.
          </p>
          <p>
            The downsides deserve equal space, because a system like this can create new
            problems while solving the old one.
          </p>
          <p>
            It depends entirely on accurate variant-level inventory data. If a
            platform&#39;s inventory count lags reality, or a warehouse system updates
            on its own schedule, the system will confidently notify people about stock
            that isn&#39;t actually there yet, or miss a restock because the count
            didn&#39;t update. Garbage inventory data in, garbage notifications out, and
            this is a system where a wrong notification is worse than no notification.
          </p>
          <p>
            There&#39;s a real risk of a flash-sale stampede. If forty people were
            waiting on a variant and only twelve units came back, an instant,
            simultaneous notification to all forty creates its own bad experience: a
            wave of disappointed customers who got the email and still couldn&#39;t buy.
            That&#39;s arguably better than silence, since at least they know, but
            it&#39;s not free of downside, and it&#39;s worth deciding up front whether
            to throttle sends, cap the notified group, or just accept the scramble as
            the tradeoff for speed.
          </p>
          <p>
            It doesn&#39;t fix a supply chain that genuinely can&#39;t keep the item in
            stock. If the underlying problem is that a popular SKU sells out every
            restock within hours no matter how it&#39;s communicated, no notification
            system solves that. It solves the communication gap, not the inventory gap,
            and it&#39;s worth being clear with yourself about which one you actually
            have.
          </p>
          <p>
            And opt-in list quality varies a lot. Some waitlist signups are genuine,
            specific intent. Others are casual &quot;sure, notify me&quot; clicks from
            someone who&#39;s since forgotten the product exists. Conversion on any
            restock alert, however well built, is going to reflect that mix, not a
            uniform, highly-motivated audience.
          </p>

          <h2>How it gets implemented</h2>
          <p>
            The practical shape of this, independent of any specific vendor, has four
            parts.
          </p>
          <p>
            Waitlist capture sits on the product page itself, tied to the specific
            variant selector, not a separate generic form. It needs to store product ID,
            variant ID, and a contact method (email, phone, or both depending on the
            channel strategy).
          </p>
          <p>
            Variant-level stock watching connects to the platform&#39;s inventory
            events, typically a webhook that fires on stock level changes, sometimes
            supplemented by polling if the webhook coverage is incomplete for a given
            platform or app combination. This is the piece most sensitive to platform
            quirks: some platforms fire inventory webhooks reliably at the SKU level,
            others require extra configuration or a different endpoint to get that
            granularity.
          </p>
          <p>
            Match-and-trigger logic is the part that turns a raw inventory event into a
            filtered, specific list of who to notify. It queries the waitlist store for
            exact variant matches, applies any throttling or capping logic decided on
            for the stampede scenario, and hands off to the send layer.
          </p>
          <p>
            The send channel is usually email at minimum, with SMS as an option for
            higher-intent or higher-demand items where the opt-in exists and the urgency
            justifies the cost. Either way, the message needs a direct link to the
            specific variant, not the general product page, so the customer lands
            exactly where they need to be to buy, not back at a page that still shows
            their size as sold out.
          </p>

          <h2>KPIs: the cost of the pain, and the cited improvement</h2>
          <p>
            The most-cited number in this space traces back to a 2011 MarketingSherpa
            case study of a single retailer, BirkenstockCentral.com: a 22.45% conversion
            rate on back-in-stock alert emails. That&#39;s one company&#39;s result from
            one program, not an industry-wide benchmark, and it gets repeated often
            enough in marketing blog posts that it&#39;s worth restating the caveat
            every time: treat the number as illustrative of what a highly-intentioned,
            already-opted-in audience can do, not as a number any brand should expect to
            hit by default.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/back-in-stock-alerts/conversion-stat.svg"
              alt="Back-in-stock alert conversion rate: 22.45%, from a 2011 MarketingSherpa case study of a single retailer, BirkenstockCentral.com."
              width={380}
              height={220}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <p>
            I looked for additional, independently verifiable statistics to add
            alongside it. Several vendor sites (back-in-stock app providers, in
            particular) publish conversion and click-through figures for their own
            back-in-stock alerts, but without disclosed methodology, meaning it&#39;s
            not clear whether those numbers come from a single customer, an average
            across their book, or a marketing claim without underlying data. I&#39;m not
            including those here, because a number without a traceable source is
            exactly the kind of stat this article is arguing against citing.
          </p>
          <p>
            What&#39;s verifiable and worth keeping in view instead is the logic, not a
            second percentage: a back-in-stock alert reaches a list that already told
            you, explicitly, that it wants this specific thing. That&#39;s a
            fundamentally different audience than a cold send or a generic newsletter
            blast, which is most of why the one verified case study number is as high as
            it is, and why the underlying mechanism (variant-specific, immediate,
            targeted) is worth building correctly even without a second citation to
            lean on.
          </p>
        </div>

        <footer className="post-footer">
          <p>
            I write about building automation systems for D2C operators: what the
            operations actually look like and what makes the difference between
            something that sticks and something that doesn&#39;t. If you&#39;re working
            through something similar and want to think it through,{" "}
            <a
              href="https://linkedin.com/in/garvinchanderia"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn is open
            </a>
            .
          </p>
        </footer>
      </article>
      <Footer />
    </main>
  );
}
