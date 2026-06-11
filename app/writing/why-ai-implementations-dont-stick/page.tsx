import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why most AI implementations don't stick: Garvin Chanderia",
  description:
    "The failure mode is almost always the same: the AI layer was designed before anyone understood how the business actually operated. An analysis of Agentic Decision Layers vs Documented Processes.",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why most AI implementations don't stick",
  "author": {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    "name": "Garvin Chanderia",
    "url": "https://garvinlabs.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GarvinLabs"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/writing/why-ai-implementations-dont-stick"
  }
};

export default function Post() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <article className="post-layout">
        <header className="post-header">
          <Link href="/writing" className="post-back">← Writing</Link>
          <p className="post-tag">D2C · AI Support Triage · Operations</p>
          <h1 className="post-title">Why most AI implementations don&apos;t stick</h1>
          <p className="post-lead">
            The pattern shows up in almost every post-mortem.
          </p>
        </header>

        <div className="post-body">
          <p>
            A team picks an AI tool. They hook it up to their data. It works in the demo,
            classifies tickets correctly, generates summaries, catches the anomalies they were
            looking for. They ship it.
          </p>
          <p>
            Three months later, it&apos;s either turned off or running in a corner that nobody trusts.
          </p>
          <p>
            The technology worked. The implementation didn&apos;t.
          </p>
          <p>
            If your support team processes 100–300 emails a day, you&apos;ve probably had the
            conversation: &ldquo;We need to hire someone, or find a better way.&rdquo; Most
            teams that go looking for AI find a tool. What actually matters happens before
            the tool.
          </p>

          <h2>The diagnosis everyone gets wrong</h2>
          <p>
            The default explanation is adoption. &ldquo;People didn&apos;t buy in.&rdquo; &ldquo;The team
            wasn&apos;t ready.&rdquo; &ldquo;Change management failed.&rdquo;
          </p>
          <p>
            That&apos;s not usually wrong, but it&apos;s downstream of something else.
          </p>
          <p>
            When I map what actually happened in these projects, the failure almost always traces
            back to one moment: when someone decided what to automate before they understood how
            the process actually ran.
          </p>
          <p>
            Not how the process was <em>supposed</em> to run. How it actually ran.
          </p>
          <p>Those are different. Sometimes dramatically.</p>

          <h2>What &ldquo;how it actually runs&rdquo; means</h2>
          <p>
            A support team I worked with processed about 200 tickets a day. The stated process
            was: read ticket → classify → respond or escalate.
          </p>
          <p>
            The actual process: read ticket → check if it&apos;s from a known complainer → check
            if the order was placed in the last 7 days → check if the issue is also appearing in
            the Discord community (which meant it was systemic) → <em>then</em> classify.
          </p>
          <p>
            Four invisible decision points that didn&apos;t exist in any documentation. The team
            had developed them organically over 18 months because the documented process
            didn&apos;t work for their specific customer base.
          </p>
          <p>
            An AI system trained on the stated process would have auto-responded to half the
            systemic issues as individual complaints, at scale, with consistency.
          </p>
          <p>The AI would have made the problem <em>faster</em>, not solved it.</p>

          <h2>The architecture problem</h2>
          <p>
            Enterprise architecture is the discipline of understanding how systems connect:
            how information flows, where decisions actually get made, what the dependencies are
            between processes that appear separate.
          </p>
          <p>
            Applied to AI implementation, it means answering a specific set of questions before
            touching any tooling:
          </p>
          <ul>
            <li>What are the actual inputs to this process, in the order they&apos;re evaluated?</li>
            <li>Where do humans add judgment that isn&apos;t documented?</li>
            <li>
              What are the failure modes of the current process, and which ones does AI need
              to handle better vs. avoid entirely?
            </li>
            <li>
              What does the process touch downstream, and what breaks if it behaves differently?
            </li>
          </ul>
          <p>
            This isn&apos;t a discovery phase that you run once and file. It&apos;s the architecture
            of the automation. Get it wrong, and the AI is optimising the wrong thing, sometimes
            in ways that are hard to notice until the damage compounds.
          </p>

          <h2>What this looks like in practice</h2>
          <p>
            The support triage system I built for a D2C clothing brand resolved 61% of tickets
            automatically. The number that mattered to me wasn&apos;t the 61%. It was the taxonomy.
          </p>
          <p>
            Before writing a single line of automation, I built a complete map of every ticket
            type they received over six months: what the ticket said, what context the team needed
            to respond, what the response actually was, and where the edge cases were.
          </p>
          <p>
            That map had 12 categories. The team had been informally using 4.
          </p>
          <p>
            The 8 additional categories (small volume, high stakes, inconsistently handled)
            were where the human judgment lived. Half of the failures in their existing process
            were in those 8 categories. The AI needed to handle the 4 standard categories well
            and route the 8 nuanced ones to humans with context already attached.
          </p>
          <p>
            94%+ classification accuracy came from mapping the problem space first. That
            sequencing (operations architecture before automation design) is what makes AI
            implementations stick.
          </p>

          <h2>The failure mode you can prevent</h2>
          <p>
            Most teams approach AI implementation like a software project: define requirements,
            pick tools, build, ship, iterate.
          </p>
          <p>
            The missing step is before the requirements: understand the operational reality of
            what you&apos;re trying to automate. That reality is never fully documented. It lives
            in the team&apos;s working knowledge, in the exceptions that got silently handled, in
            the informal rules that developed because the formal ones didn&apos;t cover enough.
          </p>
          <p>
            The AI needs to encode that knowledge, not the documented version of it.
          </p>
          <p>
            That&apos;s the architecture layer most AI projects skip. And it&apos;s usually the
            reason they don&apos;t stick.
          </p>
        </div>

        <footer className="post-footer">
          <p>
            I write about building AI support systems for D2C operators: what the operations
            actually look like and what makes the difference between something that sticks and
            something that doesn&apos;t. Most builds are live in 2–3 weeks. If you&apos;re working
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
