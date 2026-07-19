import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "The subscription that silently ends because a card expired";
const DESCRIPTION =
  "75% of customers who lose a subscription to a failed payment never sign back up, per Butter Payments founder Vijay Menon. What a pre-emptive expiry-flagging and retry-sequence automation looks like, and the D2C-specific churn data behind it.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/subscription-renewal-and-payment-recovery" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/blog/subscription-renewal-and-payment-recovery",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/blog/subscription-renewal-and-payment-recovery/cover.png",
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
  datePublished: "2026-07-16",
  dateModified: "2026-07-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/blog/subscription-renewal-and-payment-recovery",
  },
  image: "https://garvinlabs.com/blog/subscription-renewal-and-payment-recovery/cover.png",
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
        A payment-recovery automation pulls card expiry data from the payment processor on a
        schedule, flags anything expiring in 30 to 45 days, and sends a low-urgency
        pre-emptive reminder before a charge ever fails. If a charge fails anyway, a defined
        retry sequence runs (retry, friendlier reminder, final notice) instead of a single
        silent decline, and an ops-facing notification keeps fulfillment planning off what
        actually charged. Vijay Menon, founder of Butter Payments, says 75% of customers who
        lose a subscription to a failed payment never sign back up. Recharge&#39;s D2C
        merchant panel puts involuntary churn at 42% of subscription cancellations for D2C
        brands, versus a 26% B2C benchmark from Recurly.
      </aside>

      <figure className="post-hero">
        <Image
          src="/blog/subscription-renewal-and-payment-recovery/cover.png"
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
        </header>

        <div className="post-body">
          <blockquote>
            <p>
              A supplement or coffee subscription is set to renew on a card that expired
              last month. Nobody flags it. The shipment just doesn&#39;t happen, and by the
              time the customer notices, they&#39;ve already run out and bought a one-off
              replacement from somewhere else. They never technically canceled. The
              subscription just quietly stopped.
            </p>
          </blockquote>

          <h2>A founder&#39;s story</h2>
          <p>
            The clearest voice I found on this problem, after going through podcast
            transcripts and interviews, doesn&#39;t run a coffee or supplement subscription
            brand. It&#39;s Vijay Menon, founder and CEO of Butter Payments, a company built
            entirely around the fact that failed payments are not usually what they look
            like.
          </p>
          <p>
            On the Subscription Stories podcast, hosted by Robbie Kellman Baxter, Menon put
            a number on the part of this that&#39;s easy to miss: what happens after the
            failure, not the failure itself.
          </p>
          <p>
            &quot;If a user ultimately gets involuntary churn from a service, in 75% of
            cases they never sign back up,&quot; he said. Earlier in the same conversation,
            he made the case for why that&#39;s the wrong outcome for almost everyone
            involved: &quot;In 70% of these cases, there is no fraud, so the company is
            literally turning away excellent customers.&quot;
          </p>
          <p>
            Read that twice. Three out of four customers who lose their subscription to a
            failed card, not a decision to leave, simply never come back. Not because they
            didn&#39;t want the product. Because by the time anyone noticed, the moment to
            fix it had already passed, and going through a support flow to restart
            something they never meant to stop isn&#39;t worth the friction to most people.
            They just buy the coffee somewhere else next time.
          </p>
          <p>
            Source: Robbie K Baxter, &quot;Everything You Wanted to Know About Involuntary
            Churn,&quot; Subscription Stories podcast transcript, published on Medium.{" "}
            <a
              href="https://robbiebax.medium.com/everything-you-wanted-to-know-about-involuntary-churn-fe948feda1ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              robbiebax.medium.com/everything-you-wanted-to-know-about-involuntary-churn
            </a>
          </p>
          <p>
            Menon&#39;s world is B2B and B2C subscription software more broadly, not
            specifically coffee bags and supplement pouches. But the mechanism he&#39;s
            describing doesn&#39;t care what&#39;s in the box. A declined charge is a
            declined charge whether it&#39;s renewing a SaaS seat or a bag of beans.
          </p>

          <h2>Elaborating the pain</h2>
          <p>
            An intentional cancellation is a known event. The customer clicks cancel, the
            brand sees it, and there&#39;s a chance to ask why, offer a pause, or just let
            them go cleanly. A failed payment is not that. It&#39;s a silent event that
            looks, from the brand&#39;s side, exactly like nothing happening at all.
          </p>
          <p>
            That&#39;s the part worth sitting with: the brand doesn&#39;t even know it
            happened. There&#39;s no cancellation flag, no exit survey, no signal in the
            dashboard that says &quot;this customer is now gone.&quot; The subscription
            just stops renewing, and unless someone is specifically watching for failed
            charges, the first anyone hears about it is a support ticket asking where the
            shipment is, weeks after the customer has already replaced the habit with
            something else.
          </p>
          <p>
            Relying on the payment processor to handle this alone misses the window that
            matters most: before the charge fails. Most processors will retry a declined
            card a few times over a few days, on their own schedule, with no visibility into
            whether the retry actually worked or whether the customer noticed. That&#39;s
            useful, but it&#39;s reactive. It does nothing for the much larger and more
            preventable category: cards that are going to expire on a known date, sitting
            right there in the payment processor&#39;s own data, before a single charge
            attempt has failed.
          </p>
          <p>
            There&#39;s a fulfillment-side version of this same confusion too. Ops teams
            plan pick, pack, and ship volume off what&#39;s expected to renew. When charges
            fail silently and nobody adjusts the plan, you get shipments prepped for orders
            that were never going to happen, or worse, a customer who updates their card a
            day late and gets skipped for that week&#39;s batch through no fault of their
            own. The payment problem and the fulfillment problem are the same root cause
            wearing two different hats.
          </p>

          <h2>What a solution could look like</h2>
          <p>
            There&#39;s a real range of ways brands handle this today, and it&#39;s worth
            being honest about what each one actually solves.
          </p>
          <p>
            Relying entirely on the payment processor&#39;s built-in retry is the default
            because it&#39;s already there, no setup required. It catches some of the
            failures, but the retry cadence is usually blunt (a fixed schedule, not tuned to
            the brand or the customer), and it&#39;s reactive by definition: it only fires
            after the charge has already failed once.
          </p>
          <p>
            A subscription-management platform with dunning built in (Recharge, Bold, and
            similar tools in the Shopify subscription ecosystem) is a meaningful step up.
            These platforms watch for expiring cards, send templated reminder emails, and
            run configurable retry sequences on decline. What they don&#39;t do well is
            anything outside their own rails: if the reminder needs to reference the
            customer&#39;s actual order history, tie into a support system, or trigger an
            ops-side notification about what&#39;s shipping that week, most of that either
            isn&#39;t there or requires stitching in more tools.
          </p>
          <p>
            A manual process, someone on the team periodically checking the failed-charges
            report, works at small volume and basically nowhere else. It&#39;s the first
            thing to get dropped when the team is busy, which is exactly when the
            failed-payment backlog is growing fastest.
          </p>
          <p>
            A fully custom automated sequence, expiring cards flagged before the charge
            attempt, a friendly pre-emptive reminder, a real retry sequence on failure, an
            ops notification tied to the same data, is the only option that closes the loop
            end to end. It&#39;s also the only one that requires actually building something
            instead of turning on a feature.
          </p>

          <h2>The solution I&#39;d build</h2>
          <p>Here&#39;s how I&#39;d build this.</p>
          <p>
            The first piece is a data pull, not a reminder system at all. Most payment
            processors (Stripe, Braintree, whatever the subscription platform sits on top
            of) expose card expiry data per customer. That data sits there unused in most
            setups. Pull it on a schedule, flag anything expiring in the next 30 to 45 days,
            and now you have a list of renewals that are going to fail before any of them
            actually have.
          </p>
          <p>
            The second piece is the reminder itself, and the tone matters more than it
            sounds like it should. This isn&#39;t a payment-failed email, because nothing
            has failed yet. It&#39;s a heads-up: your card on file expires this month,
            here&#39;s a link to update it, no urgency language, no dark patterns. Sent with
            enough runway that updating it is a two-minute task, not a scramble.
          </p>
          <p>
            The third piece is what happens if a charge fails anyway, because prevention
            won&#39;t catch everything. Instead of one processor-default retry and then
            silence, a defined sequence: retry attempt, a friendlier follow-up reminder
            timed to when retries actually happen, and a final notice before the
            subscription is treated as lapsed rather than just quietly stopping. Each step
            in that sequence is a chance for the customer to fix it before they&#39;ve
            mentally moved on.
          </p>
          <p>
            The fourth piece is the one most builds skip: an ops-facing notification.
            Whoever plans fulfillment for the week should see, in one place, which renewals
            are confirmed, which are pending a retry, and which just lapsed. That&#39;s the
            difference between a shipment plan built on hope and one built on what&#39;s
            actually going to charge.
          </p>
          <p>
            None of these four pieces is complicated in isolation. The reason it doesn&#39;t
            already exist in most subscription operations is that it requires connecting
            payment data, a messaging layer, and fulfillment planning, three things that
            usually live in three different tools owned by nobody in particular.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/subscription-renewal-and-payment-recovery/flowchart.svg"
              alt="Flowchart of the payment recovery logic: a daily expiry data pull, cards flagged 30-45 days out, a pre-emptive reminder, a charge-attempt check that either confirms the renewal or enters a retry sequence, and an ops notification if the final retry still fails."
              width={920}
              height={656}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>Pros and cons</h2>
          <p>
            The upside is straightforward: fewer customers lost to a mechanism that had
            nothing to do with them wanting to leave, and a fulfillment team that&#39;s
            planning off real data instead of assumptions.
          </p>
          <p>The costs are worth naming honestly, because they&#39;re real.</p>
          <p>
            Too many retry emails start to feel like harassment, not help. A sequence that
            fires every day for two weeks reads as spam regardless of how legitimate the
            underlying problem is. The cadence has to be tight enough to catch the failure
            and sparse enough to not annoy someone.
          </p>
          <p>
            This doesn&#39;t fix a customer who actually wants to cancel. Retry logic and
            reminder sequences are built for the accidental case. If someone&#39;s card
            fails because they meant to let the subscription lapse and just didn&#39;t
            bother formally canceling, retrying their payment is the wrong move, arguably a
            bad-faith one. A system like this needs a way to tell the difference, or at
            minimum, an easy and honest cancel path sitting right next to the &quot;update
            your card&quot; link.
          </p>
          <p>
            It depends entirely on accurate expiry data from the payment processor. If that
            data is stale, incomplete, or the processor doesn&#39;t expose it cleanly, the
            pre-emptive half of this doesn&#39;t work, and you&#39;re back to reactive retry
            only.
          </p>
          <p>
            There&#39;s a real risk of duplicate fulfillment if the timing logic has a bug.
            If a customer updates their card and a retry also succeeds around the same
            window, and the two events aren&#39;t reconciled against each other, you can
            end up shipping the same order twice. That&#39;s the kind of bug that shows up
            the first time a customer&#39;s timing happens to overlap with a scheduled
            retry, not a theoretical edge case.
          </p>

          <h2>How it gets implemented</h2>
          <p>
            The technical shape of this is a few connected pieces, not one big system.
          </p>
          <p>
            A data source: the payment processor&#39;s expiry and charge-status data, pulled
            on a schedule (daily is usually enough) rather than waited on passively.
          </p>
          <p>
            A pre-emptive reminder trigger: anything expiring inside a defined window gets a
            message queued, with the actual send timed far enough ahead that fixing it
            isn&#39;t a fire drill.
          </p>
          <p>
            A retry-sequence state machine: a failed charge moves through defined states
            (retry pending, retry succeeded, retry failed, escalated to final notice), each
            with its own message and its own timing, rather than one generic &quot;payment
            failed&quot; email repeated.
          </p>
          <p>
            A webhook or scheduled check back into the payment processor to confirm which
            retries actually succeeded, so the system isn&#39;t reminding someone about a
            card they already fixed.
          </p>
          <p>
            An ops notification layer, feeding the same underlying data into whatever the
            fulfillment team already looks at, so what&#39;s shipping this week reflects
            what actually charged, not what was originally scheduled to.
          </p>

          <h2>KPIs: the cost of the pain, and the cited improvement</h2>
          <p>
            The most cited number here comes from software subscriptions, not physical
            goods, and it&#39;s worth keeping that distinction intact rather than blurring
            it for a cleaner story. Baremetrics&#39; 2026 dunning management research puts
            industry-wide monthly recurring revenue lost to failed payments at 9%, most of
            it recoverable with a proper retry-and-reminder sequence instead of a single
            silent decline. That figure comes from SaaS subscription data. The mechanism
            transfers to a coffee or supplement subscription (a card that fails silently
            costs revenue regardless of what&#39;s renewing), but the number itself has a
            different origin, and I&#39;d rather say that plainly than let it pass as
            directly applicable.
          </p>
          <p>
            There is a more D2C-relevant data point worth adding. Recharge&#39;s
            direct-to-consumer merchant panel, cited in Eightx&#39;s 2026 DTC subscription
            churn index, puts involuntary churn (failed or expired cards, not intentional
            cancellations) at 42% of total subscription cancellations for D2C brands,
            compared with a narrower 26% in Recurly&#39;s broader B2C benchmark. Both are
            estimates built from merchant-panel data rather than a single controlled study,
            but the direction agrees with everything else here: a meaningful share, in some
            panels closer to half, of what looks like churn in a subscription business
            isn&#39;t a customer leaving. It&#39;s a payment that failed quietly and nobody
            caught in time.
          </p>
          <p>
            And back to Menon&#39;s number, the one that should sit above all of this when
            deciding whether it&#39;s worth building: 75% of customers who lose a
            subscription to a failed payment never sign back up. Whatever the recovery rate
            ends up being once retries and reminders are in place, the alternative, doing
            nothing, means treating three out of four accidental losses as permanent.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/subscription-renewal-and-payment-recovery/benchmark-comparison.svg"
              alt="Involuntary churn: 75% of customers who lose a subscription to a failed payment never sign back up (Menon, Butter Payments), and involuntary churn runs 42% of D2C cancellations versus a 26% B2C benchmark."
              width={700}
              height={340}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
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
