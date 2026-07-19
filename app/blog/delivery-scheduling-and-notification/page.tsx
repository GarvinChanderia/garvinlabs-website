import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "A missed delivery is a scheduling problem wearing a logistics costume";
const DESCRIPTION =
  "Bulky items need someone home to receive them, which makes delivery scheduling a phone-tag problem most brands still solve with people. What a self-service scheduling flow looks like, the tradeoffs, and the research on first-attempt failure rates.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/delivery-scheduling-and-notification" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/blog/delivery-scheduling-and-notification",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/blog/delivery-scheduling-and-notification/flowchart.svg",
        width: 920,
        height: 592,
        alt: "Delivery scheduling self-service window logic",
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
    "@id": "https://garvinlabs.com/blog/delivery-scheduling-and-notification",
  },
  image: "https://garvinlabs.com/blog/delivery-scheduling-and-notification/flowchart.svg",
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
        Bulky-item delivery scheduling breaks down when it depends on manual phone-tag
        between a courier and a customer. A self-service scheduling flow, triggered when
        an order is marked ready to ship, sends a link for the customer to pick their own
        window, with automated reminders and human escalation only for unresponsive
        cases. Up to 20% of packages fail to reach recipients on the first delivery
        attempt, per Harvard Business Review&#39;s 2023 research in Latin America and
        Singapore.
      </aside>

      <article className="post-layout">
        <header className="post-header">
          <Link href="/blog" className="post-back">← Blog</Link>
          <p className="post-tag">D2C · Ecommerce · Automation Playbook</p>
          <h1 className="post-title">{TITLE}</h1>
          <p className="post-lead">
            Someone orders a sofa, then waits for a phone call to arrange delivery. It
            comes on a weekday afternoon while they&#39;re at work. They miss it, and
            now they&#39;re rebooking a second time, for a delivery that should have
            worked the first time.
          </p>
        </header>

        <div className="post-body">
          <p>
            I went looking for a founder who&#39;d said this out loud, on record, about
            a specific brand. I checked podcast transcripts, Starter Story interviews,
            Indie Hackers threads, and forum posts from people running furniture and
            appliance DTC brands, looking for a verbatim, sourced quote about phone-tag
            delivery scheduling. I didn&#39;t find one I could verify by fetching the
            source myself, so I&#39;m not going to invent one and put a real
            person&#39;s name next to it.
          </p>
          <p>
            What I can describe instead is a pattern that shows up repeatedly in how
            operators talk about this problem, even without a single quotable line to
            point to: a founder scaling from a few dozen orders a week to a few hundred,
            watching second-attempt delivery costs climb, and realizing the actual
            failure point sits before the courier ever gets involved, in the scheduling
            step itself. Someone on the ops team is calling or emailing customers one at
            a time to find a window that works, and every step in that back-and-forth is
            a place for the order to slip: a missed call, a misheard date, a customer
            who confirms a time and then forgets it by the time the truck shows up. None
            of that is a lie, it&#39;s a composite built from how this problem gets
            described over and over in ecommerce operator circles. I&#39;m labeling it
            as such rather than dressing it up as a quote.
          </p>

          <h2>Why this pain is real even without a named source</h2>
          <p>
            Large or bulky items can&#39;t just get left at the door. A sofa, a
            refrigerator, a washing machine, these need someone home to receive them,
            sometimes to sign for them, sometimes to help carry them in. That single
            fact changes the entire delivery problem. A small parcel that misses its
            recipient gets left in a safe spot or with a neighbor. A three-seat
            sectional does not.
          </p>
          <p>
            So bulky-item delivery depends on a specific person being in a specific
            place at a specific time, which means it depends on scheduling working
            correctly before the truck ever leaves the depot. Most brands still solve
            that scheduling step with people: someone calls the customer, or the
            customer calls in, and they go back and forth until they land on a window.
            That process is slow, and worse, it&#39;s fragile. A number gets copied
            wrong. A callback doesn&#39;t happen because the ops person got pulled onto
            something else. A customer picks &quot;Tuesday afternoon&quot; verbally and
            nobody puts it anywhere the warehouse can see.
          </p>
          <p>
            Every one of those small failures turns into the same outcome: a truck shows
            up, nobody&#39;s home, and now there&#39;s a second delivery attempt to
            schedule, which costs real money in fuel and driver time, and a customer
            who&#39;s now had two bad experiences with a purchase they haven&#39;t even
            touched yet. The frustration compounds, because the customer didn&#39;t
            cause the miscommunication and still has to absorb the delay.
          </p>

          <h2>What a solution could look like</h2>
          <p>
            There isn&#39;t one obvious fix here, there&#39;s a spectrum of them, and
            it&#39;s worth being honest about what each one actually solves.
          </p>
          <p>
            The default is the manual call-and-email loop most brands already run. It
            works, in the sense that a person eventually gets a time. It doesn&#39;t
            scale, because every order needs a human doing coordination work that
            doesn&#39;t get faster as volume grows, and it&#39;s the version most
            exposed to the small errors described above.
          </p>
          <p>
            Some couriers offer their own delivery-window system built into their
            tracking or booking flow. This removes the phone tag, which is real
            progress, but the windows are often broad (a four-hour block, sometimes a
            full day) because the courier is optimizing for their own route density, not
            for the specific customer&#39;s schedule. It reduces missed deliveries
            somewhat without actually solving the precision problem.
          </p>
          <p>
            White-glove delivery services solve this by taking over scheduling
            entirely, calling the customer, confirming a tight window, sometimes even
            handling in-home placement and packaging removal. This genuinely works well.
            It also costs more per delivery, which only pencils out for higher-ticket
            items or brands with the margin to absorb it, and it puts the brand&#39;s
            delivery experience largely in a third party&#39;s hands.
          </p>
          <p>
            Then there&#39;s a fully custom, self-service scheduling flow built directly
            into the brand&#39;s own order pipeline: the customer gets a link, picks
            their own window, and the system handles confirmation and follow-up without
            anyone on the ops team touching it. This is the option I&#39;d build, and
            it&#39;s worth being specific about why.
          </p>

          <h2>The solution I&#39;d build</h2>
          <p>
            Here&#39;s how I&#39;d think about building this, at the level of what
            actually happens and in what order.
          </p>
          <p>
            The trigger is order-ready status, not order-placed. The moment fulfillment
            marks an order as ready to ship (inventory picked, packed, staged for the
            delivery leg), that status change fires a webhook. That timing matters: send
            the scheduling link too early and the customer picks a date the warehouse
            can&#39;t actually hit yet, send it too late and you&#39;ve reintroduced the
            delay you&#39;re trying to remove.
          </p>
          <p>
            That webhook triggers an automation that generates a scheduling link tied to
            that specific order and sends it by email and SMS. The link opens a simple
            interface: available delivery windows, pulled either from the courier&#39;s
            real-time slot API if one exists, or from a manually maintained calendar of
            realistic windows if it doesn&#39;t. The customer picks one. No login, no
            account creation, just an order reference and a choice.
          </p>
          <p>
            Once a window is picked, two things happen automatically. First, a
            confirmation goes out immediately, to the customer and to the internal
            fulfillment system, so the warehouse and the delivery leg both see the same
            locked-in time without anyone re-entering it by hand. Second, that confirmed
            slot gets written back into whatever system triggers the actual dispatch, so
            there&#39;s one source of truth for the appointment instead of a time living
            in someone&#39;s email thread.
          </p>
          <p>
            The part that actually removes the phone tag is the follow-up logic. If
            nobody&#39;s picked a window within roughly 24 hours of the link going out,
            a reminder fires automatically, by whichever channel got the higher response
            rate historically (usually SMS for this kind of nudge). If a second day
            passes with no response, that&#39;s when it escalates to an actual human on
            the ops team, who now has one specific overdue case to call instead of
            running scheduling for every order by default. The system handles the cases
            that don&#39;t need a person, and routes the ones that do to someone with
            the context already attached.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/delivery-scheduling-and-notification/flowchart.svg"
              alt="Flowchart of the delivery scheduling logic: order-ready trigger, a scheduling link sent by email and SMS, a 24-hour check that either confirms and locks the slot or fires a reminder, and an escalation to a person if the reminder goes unanswered by day two."
              width={920}
              height={592}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>Pros and cons, honestly</h2>
          <p>
            The upside is straightforward: customers pick their own window instead of
            playing phone tag, ops time shifts from coordinating every order to handling
            the exceptions, and there&#39;s a single confirmed record of the appointment
            instead of a note in someone&#39;s inbox.
          </p>
          <p>
            The cons are just as real, and I&#39;d rather state them plainly than gloss
            over them. This entire approach depends on the delivery carrier or 3PL
            actually exposing real-time slot availability through an API. A lot of them
            don&#39;t, especially smaller regional carriers that bulky-item brands often
            use for last-mile delivery. Without that, you&#39;re back to a manually
            maintained calendar of windows, which is better than phone tag but isn&#39;t
            the same as true real-time availability, and someone still has to keep that
            calendar current.
          </p>
          <p>
            It also doesn&#39;t fix an unreliable carrier. If the truck is still late or
            the driver still shows up outside the confirmed window, a beautifully
            scheduled appointment doesn&#39;t help, the customer still had a bad
            experience, they just had it after confirming a time instead of guessing
            one. And it doesn&#39;t touch the underlying last-mile logistics problems,
            route density, driver capacity, depot location, that cause a meaningful
            share of failed attempts in the first place. Scheduling and routing are
            solving different halves of the same failure, and building the scheduling
            half well doesn&#39;t make the routing half go away.
          </p>

          <h2>How it gets implemented</h2>
          <p>
            At a system level, this is three connected pieces, not one big build. An
            order-ready trigger, usually a webhook from the order management or
            fulfillment system, kicks off the flow. A slot-availability layer sits
            underneath it: real-time via the carrier&#39;s API where that exists, a
            manually maintained fallback calendar where it doesn&#39;t, with a flag
            somewhere in the system so the team knows which mode any given order is
            running in. And a confirmation and reminder layer handles the messaging:
            immediate confirmation on booking, a reminder at the 24-hour mark if no
            window is picked, and an escalation to a person after that.
          </p>
          <p>
            The fallback calendar matters more than it might sound like. Most
            bulky-item brands, especially ones running through regional or contracted
            couriers, won&#39;t have a clean API to plug into on day one. Building the
            manual-window version first, and treating the API integration as an upgrade
            path rather than a prerequisite, is usually the more honest way to sequence
            this.
          </p>

          <h2>What this actually costs, and what&#39;s actually been shown to help</h2>
          <p>
            The number worth grounding this in comes from Harvard Business Review&#39;s
            2023 research: up to 20% of packages fail to reach recipients on the first
            delivery attempt. That figure is drawn from delivery data in Latin America
            and Singapore, not a global industry census, so I&#39;m not calling it an
            industry-wide number, it&#39;s a documented failure rate in those specific
            markets.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/delivery-scheduling-and-notification/first-attempt-stat.svg"
              alt="First-attempt delivery failure rate: up to 20% of packages, per Harvard Business Review's 2023 research in Latin America and Singapore."
              width={380}
              height={220}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <p>
            The research itself points to smarter route planning as the fix, not
            customer-facing scheduling tools. I haven&#39;t found data that proves a
            self-service scheduling link reduces that specific failure rate, so I
            won&#39;t claim it does. What I&#39;ll say instead is that the two
            approaches attack the same failure from different ends: better routing gets
            the truck to the right place at the right time, and a recipient who picked
            their own window is more likely to actually be home when it arrives.
            They&#39;re complementary, not substitutes, and treating either one as the
            whole fix undersells the problem.
          </p>
          <p>
            This pattern is documented in home goods specifically, where bulky items
            make phone-tag scheduling especially costly, but the same logic holds
            anywhere a delivery needs a specific window and a person present to receive
            it: furniture, appliances, anything too large to leave at the door.
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
