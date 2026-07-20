import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "A slow return is how you lose a customer you already won";
const DESCRIPTION =
  "\"Our returns process was all manual,\" says a footwear brand's ops director, describing phone-and-spreadsheet chaos. What a policy-check-plus-label automation looks like, the fraud and judgment tradeoffs, and the 50% processing-time cut AfterShip's research cites.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/returns-and-exchange-automation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/blog/returns-and-exchange-automation",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/blog/returns-and-exchange-automation/cover.png",
        width: 4800,
        height: 2520,
        alt: TITLE,
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
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/blog/returns-and-exchange-automation",
  },
  image: "https://garvinlabs.com/blog/returns-and-exchange-automation/cover.png",
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
        A returns automation grounds every decision in the actual order record (purchase
        date, price paid, promotion flags, return history) before deciding anything. Requests
        that clear the policy check (inside the window, full price, first return this
        quarter) get an automatic label or replacement the same day. Damage claims route
        high-value or unclear cases to a person and auto-approve low-value, obvious ones.
        Stock updates on physical scan-back, not on approval. Anything the rules do not
        clearly cover escalates to a person with the order context attached. AfterShip&#39;s
        research, compiled by Opensend, found automating the approval-and-label steps cuts
        returns processing time by 50%.
      </aside>

      <figure className="post-hero">
        <Image
          src="/blog/returns-and-exchange-automation/cover.png"
          alt={TITLE}
          width={4800}
          height={2520}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </figure>

      <article className="post-layout">
        <header className="post-header">
          <Link href="/blog" className="post-back">← Blog</Link>
          <p className="post-tag">D2C · Ecommerce · Automation Playbook</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-byline">
            <Link href="/about">Garvin Chanderia</Link> — Enterprise Architecture Consultant, builder of GarvinLabs automations
          </p>
          <p className="post-lead">
            &quot;Our returns process was all manual.&quot; That&#39;s Nikolas Callas,
            Director of Operations at the footwear brand Marc Nolan, describing what returns
            looked like before they automated the process.
          </p>
        </header>

        <div className="post-body">
          <h2>&quot;Our returns process was all manual&quot;</h2>
          <p>
            That&#39;s Nikolas Callas, Director of Operations at the footwear brand Marc
            Nolan, describing what returns looked like before they automated the process:
          </p>
          <blockquote>
            <p>
              &quot;Our returns process was all manual. In the beginning, we were
              communicating with customers about their returns via phone, email, text, or
              through social channels. We also had to manually create labels and send them
              through each of these channels.&quot;
            </p>
          </blockquote>
          <p>
            There was no tracking, no analytics, just spreadsheets. Callas put the result
            plainly: &quot;We were working in the dark with our customers, hoping they
            received the shoes that they wanted in exchange or got their money back on time.
            It was very rough.&quot; (Source:{" "}
            <a
              href="https://www.aftership.com/customers/marc-nolan"
              target="_blank"
              rel="noopener noreferrer"
            >
              AfterShip&#39;s Marc Nolan customer story
            </a>
            , archived{" "}
            <a
              href="http://web.archive.org/web/20260217082600/https://www.aftership.com/customers/marc-nolan"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .)
          </p>
          <p>
            I&#39;m quoting an operations lead, not a founder, because that&#39;s the
            verified quote I could find, and it&#39;s a better data point than a
            founder&#39;s paraphrase of the same problem: whoever owns the process day to day
            usually describes it more precisely than whoever owns the P&amp;L. What Callas
            describes matches a pattern I&#39;ve seen repeated, unattributed, across founder
            interviews and forum threads on returns handling, but I haven&#39;t verified a
            second sourced account naming numbers the way Callas did, so treat it as a
            directional pattern rather than an independently confirmed one: a return process
            built on people checking things by hand, across too many channels, with no
            record of what happened until someone goes looking for it.
          </p>

          <h2>Why every return depends on someone getting it right</h2>
          <p>
            A return request is really several decisions, stacked. Is the order inside the
            return window? Was the item purchased at full price or a final-sale promotion
            that excludes returns? Is this a first return from this customer or the fifth
            this month? Does the SKU qualify for exchange, refund, or store credit only?
            None of that is hard to check individually. It&#39;s hard to check consistently,
            at volume, by a person who&#39;s also answering five other tickets that hour.
          </p>
          <p>
            Damage claims are the same problem with more steps bolted on. A customer has to
            describe what&#39;s wrong, usually attach photos, and then wait for someone to
            actually look at them; furniture and other bulky goods make this worse because
            the item is expensive enough that nobody wants to approve a replacement on a
            rushed read of two blurry pictures. That review sits in a queue. Then it needs a
            decision: full replacement, partial refund, request better photos. Then, often,
            a follow-up call because the customer wants to know what&#39;s happening and the
            honest answer is &quot;still waiting on someone to look at it.&quot;
          </p>
          <p>
            Here&#39;s the part that&#39;s easy to miss: the sale already happened. The
            company already spent money to acquire this customer and already delivered a
            product. A slow, opaque return process doesn&#39;t just cost the (usually much
            smaller) cost of the return itself, it puts the entire relationship at risk on
            top of it. Callas&#39;s line about &quot;working in the dark&quot; is the tell:
            when a company can&#39;t see its own return pipeline, it can&#39;t reassure a
            customer who&#39;s asking a completely reasonable question: where&#39;s my
            exchange?
          </p>

          <h2>What a solution could look like</h2>
          <p>
            There&#39;s a real range of options here, and none of them is free of tradeoffs.
          </p>
          <p>
            A returns-management SaaS platform (Loop, AfterShip Returns, Return Prime, and
            others in that category) gives you a self-serve portal, automatic label
            generation, and policy rules configured through a dashboard. This solves the
            &quot;all manual, all on spreadsheets&quot; problem well, fast to set up, and
            it&#39;s the right call for a lot of brands. The tradeoff is that you&#39;re
            bounded by whatever logic the platform&#39;s rules engine supports. Anything
            genuinely custom to your business (a loyalty-tier exception, a bundle-specific
            rule, a warehouse-specific routing decision) either doesn&#39;t fit cleanly or
            needs a workaround.
          </p>
          <p>
            A manual, email-based process is what most brands start with and what Marc Nolan
            describes above. It&#39;s cheap to run at low volume and it&#39;s the first
            thing that breaks as volume grows, because it depends entirely on a person being
            available, paying attention, and applying the policy the same way every time.
          </p>
          <p>
            A rigid, no-exceptions auto-approval bot is the opposite failure mode. It&#39;s
            fast and it feels automated, but if it can&#39;t tell the difference between a
            legitimate size exchange and a customer who&#39;s returned twelve items this
            quarter, it either approves things it shouldn&#39;t or gets so conservative it
            stops being useful. Speed without judgment just moves the risk somewhere else.
          </p>
          <p>
            A custom policy-check-plus-label automation, with a person in the loop only for
            ambiguous cases, is the approach that actually holds up: fast on the cases that
            are genuinely simple, and honest about which cases aren&#39;t.
          </p>

          <h2>The system I&#39;d build</h2>
          <p>
            Here&#39;s how I&#39;d actually build this, for a brand whose order and
            inventory data lives somewhere queryable (Shopify, a WMS, whatever the source of
            truth is).
          </p>
          <p>
            The request comes in through a form or a support channel and the first thing the
            system does is pull the order: purchase date, price paid, promotion flags, SKU,
            and the customer&#39;s return history. This is the same principle I use in
            support automation generally: ground every decision in the actual data before
            anything acts on it, not on what the policy usually says.
          </p>
          <p>
            From there, a policy-check step runs the request against the brand&#39;s actual
            rules. Inside the window, full price, first return this quarter, standard SKU?
            That&#39;s a straightforward approval. The label or replacement order generates
            automatically and goes out same day, no queue, no person needed to notice the
            request and act on it.
          </p>
          <p>
            Damage claims get one more step: the photos still need a look, but instead of a
            queue that someone works through in batches, the system flags high-value items
            and unclear photos for priority human review, and auto-approves the cases where
            the damage is obvious and the item value is low enough that a fast replacement
            is cheaper than a review cycle. That threshold is a business decision, not a
            technical one, and it&#39;s worth setting deliberately rather than defaulting to
            &quot;review everything.&quot;
          </p>
          <p>
            Stock updates happen on scan-back, not on approval. The moment the returned item
            is physically scanned into the warehouse, inventory reflects it. This matters
            more than it sounds: approving a return doesn&#39;t mean the item is back, and
            treating those as the same event is how brands oversell stock that&#39;s still
            in transit.
          </p>
          <p>
            Everything that doesn&#39;t clear the policy check cleanly (return outside the
            window, repeat-return pattern, high-value damage claim, anything the rules
            don&#39;t explicitly cover) routes to a person, with the order history and the
            reason it got flagged attached. Same principle as the confidence gate in a
            support-triage system: the automation&#39;s job is to handle the clear cases
            fast and be honest about what it&#39;s not sure of, not to handle everything.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/returns-and-exchange-automation/flowchart.svg"
              alt="Flowchart of the returns automation logic: a request pulls the order record, a policy check on window, price, and return history, an auto-approve path that generates a label or replacement the same day, an escalation path with order context attached, and stock updating on physical scan-back rather than on approval."
              width={920}
              height={656}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>What this doesn&#39;t fix</h2>
          <p>
            This is where I&#39;d push back on my own pitch, because the failure modes are
            real.
          </p>
          <p>
            Return fraud is the sharpest one. If the policy check is tuned too permissively,
            especially on repeat-return patterns, automating the approval step just
            automates the abuse too, faster than a human ever could. The rules need to
            actually catch the behavior that matters (return frequency, wardrobing
            patterns, mismatched serials on high-value items), not just check the return
            window.
          </p>
          <p>
            Damage claims often need real human judgment that a rules engine can&#39;t
            replace. A photo of a scratched table leg might be a shipping-damage claim or it
            might not be; the auto-approve threshold has to stay conservative enough that
            it&#39;s not quietly approving disputes it shouldn&#39;t.
          </p>
          <p>
            The whole system depends on clean order and inventory data. If SKUs are
            mismapped, if the WMS lags behind what&#39;s actually on the shelf, or if
            promotion flags aren&#39;t tracked consistently, the policy check inherits every
            one of those gaps and makes wrong decisions faster than a person would have.
          </p>
          <p>
            And none of this touches the underlying reason returns are happening in the
            first place. If a product runs small, or a piece of furniture keeps arriving
            damaged because of packaging, automating the return process makes the return
            faster, it doesn&#39;t make the return unnecessary. A brand with an unusually
            high return rate has a product or fulfilment problem to fix, and a faster
            returns process can quietly mask that instead of surfacing it.
          </p>

          <h2>How this actually gets built</h2>
          <p>
            The shape, in practice: an intake layer that captures the request and pulls the
            order record; a policy-check layer that runs the eligibility rules against that
            data and outputs approve, deny, or escalate; a fulfilment layer that generates
            the label or replacement order for anything approved; a stock-update trigger
            tied to the physical scan-back event, not the approval event; and an escalation
            queue that carries the flagged reason along with the order context, so whoever
            reviews it isn&#39;t starting from zero.
          </p>
          <p>
            The policy-check logic is worth building as its own layer rather than burying it
            inside whatever tool handles labels, because the rules change more often than
            the label-generation mechanics do (a new promotion, a new exception, a seasonal
            policy adjustment), and you want to be able to update the rules without touching
            the parts of the system that are working fine.
          </p>

          <h2>The cost of the pain, and the cited improvement</h2>
          <p>
            The clearest number I can point to on this: automating the approval-and-label
            steps of returns processing cuts processing time by 50%, per AfterShip&#39;s
            research, compiled in Opensend&#39;s return-processing statistics roundup.
            AfterShip did the underlying research; Opensend compiled it into their
            statistics roundup. Worth keeping that distinction straight, since it&#39;s easy
            to credit the wrong party.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/returns-and-exchange-automation/benchmark-comparison.svg"
              alt="Returns processing time: cut by 50% when the approval and label steps are automated, per AfterShip's research, compiled by Opensend."
              width={380}
              height={340}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <p>
            The pattern shows up in both directions I described above: fashion and apparel
            brands dealing with size exchanges, and home goods brands handling damage
            claims on furniture. The trigger is different (wrong size versus damaged in
            transit), but the fix is the same shape: automate the policy check and the
            label, keep a person in the loop only for the cases that genuinely need
            judgment.
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
