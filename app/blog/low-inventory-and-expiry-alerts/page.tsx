import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "The stockout a customer notices before you do";
const DESCRIPTION =
  "Periodic inventory checks catch a stockout after it's already cost you a customer. What continuous, per-SKU threshold monitoring with a parallel expiry clock looks like, the failure modes, and the $1.2 trillion global stockout cost behind it.";

export const metadata: Metadata = {
  title: `${TITLE}: Garvin Chanderia`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/low-inventory-and-expiry-alerts" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/blog/low-inventory-and-expiry-alerts",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/blog/low-inventory-and-expiry-alerts/cover.png",
        width: 4800,
        height: 2520,
        alt: "The stockout a customer notices before you do",
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
    "@id": "https://garvinlabs.com/blog/low-inventory-and-expiry-alerts",
  },
  image: "https://garvinlabs.com/blog/low-inventory-and-expiry-alerts/cover.png",
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
        A low-inventory and expiry alert system checks stock levels continuously rather
        than on a periodic schedule, so a SKU crossing its sell-through threshold
        triggers a same-day alert and an auto-generated draft reorder instead of
        surfacing days or weeks later. Each SKU gets its own threshold based on recent
        sell-through rate, not one flat number across the catalog, so fast-movers get
        flagged early enough to reorder in time. A separate, parallel check tracks
        expiry or best-by dates on each batch, since a product can have plenty of units
        left but still be close to unsellable. Aislestock&#39;s 2026 research puts the
        cost of stockouts at $1.2 trillion lost across global retail every year, with up
        to 55% of shoppers permanently switching to a competitor after repeated
        stockouts.
      </aside>

      <figure className="post-hero">
        <Image
          src="/blog/low-inventory-and-expiry-alerts/cover.png"
          alt="The stockout a customer notices before you do"
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
            Someone goes to reorder their usual serum, or their usual multivitamin, and
            it&#39;s out of stock with no restock date listed. They check back a week
            later, still nothing, and quietly switch to a different brand&#39;s version
            instead. No complaint, no support ticket. Just gone.
          </p>
        </header>

        <div className="post-body">
          <p>
            The most expensive stockouts are rarely the dramatic ones. They&#39;re the
            quiet reorders that never happen because nobody caught the gap in time.
          </p>

          <h2>A founder&#39;s story</h2>
          <p>
            Most of what gets written about stockouts comes from analysts, not from the
            people who actually ran out of product. So it&#39;s worth reading what a
            founder said about it directly.
          </p>
          <p>
            Emre Doganer, who built a posture-correction device brand called Straight
            under his company Kodgem, wrote a post on Indie Hackers in May 2025 titled
            &quot;$1M Revenue, $0 Profit: Our D2C Reality Check.&quot; In it, he lays out
            what he calls &quot;Inventory Planning Disasters&quot;:
          </p>
          <p>
            &quot;Our limited capital meant we could only produce 1,000 units at a time.
            But here&#39;s the kicker, each subsequent production run cost MORE per
            unit, not less. Small batch productions meant higher per-unit costs.
            We&#39;d run out of stock during peak demand periods. Emergency productions
            came at higher costs to meet demand. No economies of scale because we
            couldn&#39;t afford larger runs. Storage costs ate into margins when we did
            overestimate demand. And we had to throw away expired or damaged inventory
            multiple times. The cycle was vicious: make 1,000 units, sell them, need
            2,000, can only afford 1,200, pay higher per-unit costs, repeat.&quot;
          </p>
          <p>
            (Source:{" "}
            <a
              href="https://www.indiehackers.com/post/1m-revenue-0-profit-our-d2c-reality-check-66e1d61d28"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indie Hackers, &quot;$1M Revenue, $0 Profit: Our D2C Reality Check&quot;
            </a>
            , May 26, 2025.)
          </p>
          <p>
            What stands out is that Doganer&#39;s team was hit by both halves of the
            same problem: running out of fast-moving stock at the worst possible time,
            and separately, throwing away inventory that expired or got damaged before
            it sold. Different failure modes, same root cause: nobody had a system
            watching stock levels and shelf life closely enough to act before the
            damage was done.
          </p>

          <h2>Elaborating the pain</h2>
          <p>
            The reason this keeps happening isn&#39;t that founders don&#39;t care
            about inventory. It&#39;s that most inventory checking is periodic, and
            demand isn&#39;t.
          </p>
          <p>
            A team checks stock levels once a day, or once a week, or whenever someone
            happens to open the admin dashboard. Between checks, sales keep happening.
            A product that had 40 units on hand yesterday can be at zero today if a
            post goes semi-viral, an influencer mentions it, or a restock email goes
            out. The gap between &quot;running low&quot; and &quot;actually gone&quot;
            can close in hours, and a periodic check only catches it after the fact,
            usually when a customer already tried to buy and couldn&#39;t.
          </p>
          <p>
            Fast-movers get hit hardest because they&#39;re exactly the products where
            the gap between checks matters most. A slow-selling SKU can sit at low
            stock for weeks without anyone noticing. A fast-selling one can go from
            healthy to sold out inside a single day, and that&#39;s usually the SKU
            driving the most repeat revenue, which makes the miss more expensive than
            an ordinary stockout.
          </p>
          <p>
            Shelf life adds a second version of the same problem, quieter but just as
            costly. A product isn&#39;t just &quot;in stock&quot; or &quot;out of
            stock,&quot; it&#39;s also somewhere on a clock toward its expiry date. If
            nobody is watching that clock, a batch can go from sellable to unsellable
            without any single moment where it looked urgent. Nobody decided to lose
            that inventory. It just aged out while attention was elsewhere. That&#39;s
            the mechanism behind Doganer&#39;s line about throwing away expired or
            damaged inventory multiple times: not one bad decision, but the absence of
            a system that would have flagged it in time to run a clearance push before
            the deadline passed.
          </p>

          <h2>What a solution could look like</h2>
          <p>
            There&#39;s a real range of ways teams try to solve this, and it&#39;s
            worth being honest about what each one actually covers.
          </p>
          <p>
            Spreadsheet spot-checks are cheap to start, and for a very small catalog
            they can work for a while. The problem is they depend entirely on someone
            remembering to open the file, and they degrade fast as SKU count grows.
            There&#39;s no concept of urgency either: a spreadsheet doesn&#39;t page
            anyone when a threshold is crossed, it just sits there being slightly out
            of date.
          </p>
          <p>
            Native platform low-stock notices (Shopify and most others have some
            version) are a step up, but the threshold is usually coarse, often a
            single fixed number across the whole catalog. That doesn&#39;t distinguish
            a slow-moving SKU sitting at 5 units for months from a fast-mover about to
            sell through its last 5 units by evening. It also generally has nothing to
            say about expiry dates, since that&#39;s not data the platform tracks
            natively.
          </p>
          <p>
            Dedicated inventory-management SaaS genuinely solves more of the problem:
            multi-location tracking, demand forecasting, sometimes reorder-point
            calculations. The tradeoff is that these tools are built for the average
            case, so it&#39;s common to end up paying for forecasting features that go
            unused, or configuring around a data model that doesn&#39;t match how a
            specific brand actually tracks batches and expiry, if it covers expiry at
            all.
          </p>
          <p>
            Hiring an ops person to watch it works, and for a brand with the volume to
            justify a hire, it&#39;s a reasonable answer. But it&#39;s a recurring cost
            for a job that&#39;s fundamentally about checking numbers against
            thresholds and flagging when they cross, which doesn&#39;t need a person
            doing it manually forever.
          </p>
          <p>
            A fully custom, continuous-monitoring automation is the option that
            actually closes the gap between &quot;running low&quot; and &quot;someone
            finds out,&quot; because it isn&#39;t checking periodically or waiting for
            a person to look. It&#39;s also the option that takes the most work to set
            up correctly, since it has to be built around the actual data source and
            the actual thresholds that matter for a specific catalog. That&#39;s the
            version I&#39;d build.
          </p>

          <h2>The solution I&#39;d build</h2>
          <p>
            Here&#39;s how I&#39;d build this: every SKU gets its own threshold,
            checked continuously rather than on a schedule someone has to remember to
            run.
          </p>
          <p>
            The system pulls stock levels directly from wherever inventory actually
            lives, the ecommerce platform&#39;s inventory API, or a POS system if the
            brand sells offline too. Each SKU gets a threshold based on its own
            sell-through rate, not one flat number for the whole catalog. A slow-mover
            might get flagged at 10 units left. A fast-mover with a two-day
            sell-through might get flagged at 30, because that many units can
            disappear fast enough that waiting for single digits means it&#39;s
            already too late to reorder in time.
          </p>
          <p>
            When a SKU crosses its threshold, two things happen automatically. A draft
            reorder gets generated, quantity based on recent sell-through and lead
            time, vendor details pre-filled from what&#39;s already on file, so nobody
            has to dig up the supplier&#39;s contact under time pressure. And a
            notification goes out the same day, not batched into a weekly digest, so
            there&#39;s actual runway to act before the SKU sells through completely.
          </p>
          <p>
            Where shelf life matters, a second, parallel check runs against expiry or
            best-by dates on each batch. It&#39;s its own clock, separate from
            stock-level logic: a product might have plenty of units left but be 30
            days from expiry, which is a different kind of urgent than &quot;about to
            sell out.&quot; That triggers its own alert, early enough to run a
            clearance push or a bundle offer instead of writing the batch off as a
            loss after the date has passed. This is the piece most brands don&#39;t
            have any system watching at all, they have eyes on stock level and nothing
            on the second clock running underneath it.
          </p>
          <p>
            Both checks log to one place, so a team looking at the day&#39;s flags
            sees stock-level and expiry issues side by side, not two systems that
            never talk to each other.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/low-inventory-and-expiry-alerts/flowchart.svg"
              alt="Flowchart of the two parallel monitoring clocks: continuous stock-level polling against a per-SKU sell-through threshold, and a separate batch-level expiry clock, both feeding a shared log so stock-level and expiry flags are reviewed together."
              width={920}
              height={592}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>Pros and cons</h2>
          <p>
            I&#39;d rather lay out the real tradeoffs than pretend this is a clean win.
          </p>
          <p>
            What it actually solves: the lag between &quot;running low&quot; and
            &quot;someone finds out&quot; closes from days or weeks down to same-day,
            for every SKU, without depending on a person remembering to check. The
            reorder draft removes a chunk of manual work at the exact moment
            someone&#39;s least likely to have time for it. And for perishable
            categories, it adds a layer of visibility most brands don&#39;t have: a
            second clock running next to the stock-level one.
          </p>
          <p>What it doesn&#39;t solve, and where it can go wrong:</p>
          <ul>
            <li>
              It&#39;s only as good as the inventory data feeding it. If the
              platform&#39;s stock counts are wrong or out of sync with a
              warehouse&#39;s actual shelves, the system will confidently alert on bad
              numbers. Garbage in, garbage out applies here as much as anywhere.
            </li>
            <li>
              Thresholds take iteration to get right. Set them too conservatively and
              the team gets alerted on SKUs that were never actually at risk, which
              trains people to ignore the alerts. Set them too loosely and it misses
              the fast-movers it was built to catch.
            </li>
            <li>
              It doesn&#39;t fix a broken supply chain. If a vendor has a six-week lead
              time and sell-through is faster than that, an earlier alert helps, but it
              doesn&#39;t manufacture inventory that isn&#39;t coming. It tells you
              sooner. It doesn&#39;t make the truck arrive sooner.
            </li>
            <li>
              Alert fatigue is a real risk, not a hypothetical one. A system that fires
              too often on the wrong things gets muted, and a muted alert system is
              worse than no system, because it creates false confidence that
              something&#39;s watching when nothing is.
            </li>
            <li>
              It adds a dependency: threshold reviews as sell-through patterns shift,
              checking the data connection stays live, someone owning it so it
              doesn&#39;t quietly stop working unnoticed.
            </li>
          </ul>

          <h2>How it gets implemented</h2>
          <p>
            The data source has to be the actual system of record for stock, whatever
            platform or POS holds the real numbers, pulled via API rather than
            re-entered anywhere. Re-entry is where these systems usually break down in
            practice, adding a manual step back into a system meant to remove one.
          </p>
          <p>
            Monitoring cadence should be as close to continuous as the data source
            allows, polling on a short interval rather than once a day, since the point
            is catching the gap between checks that a periodic process can&#39;t
            close.
          </p>
          <p>
            Threshold logic runs per SKU, calculated from recent sell-through rate and
            supplier lead time rather than one flat number applied across a catalog
            with both fast-movers and slow ones in it. Where expiry matters,
            that&#39;s a separate rule set: days-to-expiry thresholds tied to batch or
            lot data, checked independently of the stock-level logic, because a SKU
            can be fine on one axis and urgent on the other.
          </p>
          <p>
            Draft-reorder generation pulls the last known vendor, unit cost, and lead
            time for a SKU, calculates a suggested quantity from recent velocity, and
            holds it as a draft rather than auto-sending a purchase order. A person
            still approves it, the system just removes the blank-page problem of
            starting a reorder from scratch under time pressure.
          </p>
          <p>
            Notification routing goes to wherever the team actually looks first, not a
            channel that gets checked once a week. Same-day delivery matters more than
            the specific channel, and stock-level versus expiry alerts probably
            deserve different urgency framing so neither gets treated as background
            noise.
          </p>

          <h2>KPIs: the cost of the pain, and the cited improvement</h2>
          <p>
            The clearest number on what this problem costs comes from
            Aislestock&#39;s 2026 retail stock management research: $1.2 trillion is
            lost to stockouts across global retail every year, and up to 55% of
            shoppers permanently switch to a competitor after repeated stockouts.
            That&#39;s an industry-wide figure, not specific to any one brand, and it
            should be read that way.
          </p>

          <figure className="post-figure">
            <Image
              src="/blog/low-inventory-and-expiry-alerts/stockout-cost-stats.svg"
              alt="The cost of stockouts: $1.2 trillion lost across global retail every year, and up to 55% of shoppers permanently switch to a competitor after repeated stockouts, per Aislestock's 2026 research."
              width={700}
              height={230}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <p>
            But the mechanism that prevents it doesn&#39;t care about scale: a
            threshold check that fires before a human notices costs roughly the same
            to run whether a brand carries 50 SKUs or 50,000.
          </p>
          <p>
            Where this shows up in practice is documented most clearly in beauty and
            cosmetics, where reorder alerts on fast-moving skincare are common, and in
            health, nutrition, and wellness, where the expiry dimension matters as
            much as the stock-level one, and where Doganer&#39;s own account of
            throwing away expired inventory multiple times fits the pattern directly.
            The same two-layer problem, stock level and shelf life, almost certainly
            extends to food and beverage and any other category carrying perishable
            inventory, even though that vertical isn&#39;t part of the research cited
            here. Most brands only have eyes on the stock-level layer. The expiry one
            runs quietly underneath, uncounted, until a batch is already a write-off.
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
