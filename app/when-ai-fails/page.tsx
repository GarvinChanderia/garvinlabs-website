import type { Metadata } from "next";
import Image from "next/image";
import { Tweet } from "react-tweet";
import "react-tweet/theme.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TITLE = "When AI fails: three real incidents and the guardrail framework that would have caught them";
const DESCRIPTION =
  "Chevrolet, Air Canada, and DPD all had AI go publicly wrong, for three different reasons. A three-question framework (reversibility, stakes, verifiability) for deciding where AI should run unsupervised in a business, and where it shouldn't.";

export const metadata: Metadata = {
  title: `${TITLE} | GarvinLabs`,
  description: DESCRIPTION,
  alternates: { canonical: "https://garvinlabs.com/when-ai-fails" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://garvinlabs.com/when-ai-fails",
    siteName: "GarvinLabs",
    type: "article",
    images: [
      {
        url: "/when-ai-fails/cover.png",
        width: 1536,
        height: 1024,
        alt: "A boardroom lit in green with an elephant standing at the head of the table, while four people in a meeting look anywhere but at it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/when-ai-fails/cover.png"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    "@id": "https://garvinlabs.com/#garvin",
    name: "Garvin Chanderia",
    url: "https://garvinlabs.com",
  },
  publisher: { "@id": "https://garvinlabs.com/#organization" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://garvinlabs.com/when-ai-fails",
  },
  image: "https://garvinlabs.com/when-ai-fails/cover.png",
};

export default function WhenAIFails() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />

      {/* AEO wedge: raw-HTML answer for crawlers that don't render CSS */}
      <aside aria-label="Quick answer" style={{ display: "none" }}>
        <strong>Why do AI chatbots fail publicly, and how can a business avoid it?</strong>
        <p>
          Three documented incidents show three different causes. Chevrolet&#39;s dealership
          chatbot was prompt-injected into agreeing to sell a $76,000 Tahoe for $1 in November
          2023, because nobody had defined a boundary on what it was authorized to promise. Air
          Canada was found liable by the BC Civil Resolution Tribunal in February 2024 after its
          chatbot invented a bereavement-fare refund policy, because no human verification step
          existed between the bot&#39;s claim and the business being on the hook for it. DPD&#39;s
          delivery chatbot was talked into swearing at a customer and writing a poem calling its
          own employer useless in January 2024, because it had no boundary on tone or topic. A
          three-question framework, reversibility, stakes, and verifiability, sorts any
          AI-assisted task into where it can run unsupervised, where it needs human approval
          before going out, and where it shouldn&#39;t make the call at all.
        </p>
      </aside>

      <article className="post-layout">
        <figure className="post-figure">
          <Image
            src="/when-ai-fails/cover.png"
            alt="A boardroom lit in green with an elephant standing at the head of the table, while four people in a meeting look anywhere but at it."
            width={1536}
            height={1024}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>

        <header className="post-header">
          <p className="post-tag">AI guardrails · D2C automation</p>
          <h1 className="post-title">When AI fails</h1>
          <p className="post-lead">
            Three real incidents, three different reasons they happened, and the questions that
            would have caught each one before launch.
          </p>
        </header>

        <div className="post-body">
          <p>
            Let&#39;s address the elephant in the room. You&#39;ve seen the screenshots. A
            dealership chatbot &quot;selling&quot; a truck for a dollar. An airline held liable
            for a refund policy its own bot invented. A delivery company&#39;s bot swearing at a
            customer and writing a poem about how bad its employer is.
          </p>
          <p>
            Most founders land in one of two places after seeing that. Either AI stays out of
            anything customer-facing, or it gets bolted on somewhere and everyone hopes for the
            best. Neither is a decision. Both are a reaction to being scared of a story, not a
            read on your own risk.
          </p>
          <p>
            The three incidents below aren&#39;t the same mistake wearing different logos. Each
            one failed for a different reason. That&#39;s the part worth slowing down on.
          </p>

          <h2>Three failures, three different causes</h2>
          <p>
            <strong>Chevrolet, November 2023.</strong>{" "}A customer prompt-injected a
            dealership&#39;s chatbot into agreeing to sell a $76,000 Tahoe for $1, with language
            claiming the offer was binding. The dealership never honored it. The screenshot still
            hit 20 million views before anyone noticed. (
            <a href="https://incidentdatabase.ai/cite/622/" target="_blank" rel="noopener noreferrer">
              AI Incident Database, #622
            </a>
            )
          </p>
          <div className="tweet-embed dark">
            <Tweet id="1736533308849443121" />
          </div>
          <p>
            What broke: the bot had no boundary on what it was authorized to promise. Nobody had
            defined what it could commit to on the business&#39;s behalf, so it committed to
            anything.
          </p>
          <p>
            <strong>Air Canada, February 2024.</strong>{" "}A customer asked the airline&#39;s
            chatbot about bereavement fares. The bot invented a refund window that didn&#39;t
            exist in Air Canada&#39;s actual policy. Air Canada argued in front of a tribunal that
            the chatbot was responsible for its own words. The tribunal disagreed and ordered the
            airline to pay. (
            <a
              href="https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moffatt v. Air Canada, 2024 BCCRT 149, CanLII
            </a>
            )
          </p>
          <p>
            What broke: no verification step between &quot;the bot said it&quot; and &quot;the
            business is now on the hook for it.&quot; The bot&#39;s output became a commitment
            with zero human checkpoint in between.
          </p>
          <p>
            <strong>DPD, January 2024.</strong>{" "}A frustrated customer talked the delivery
            firm&#39;s support bot into swearing at him and writing a poem calling its own
            employer useless. It went viral. The bot was offline within a day. (
            <a
              href="https://www.scmp.com/tech/tech-trends/article/3249284/uk-delivery-firm-dpd-suspends-ai-chat-function-after-bot-swears-customer-and-writes-poem-disparaging"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCMP coverage
            </a>
            )
          </p>
          <div className="tweet-embed dark">
            <Tweet id="1748034519104450874" />
          </div>
          <p>
            What broke: no boundary on tone or topic. The bot would follow any instruction a user
            gave it, including instructions to attack the company running it.
          </p>
          <p>
            Three different gaps: authority, verification, scope. In all three, the problem
            wasn&#39;t a bad model. It was that nobody had decided where the AI&#39;s judgment
            should stop and a person&#39;s should start.
          </p>

          <figure className="post-figure">
            <Image
              src="/when-ai-fails/incident-comparison.svg"
              alt="Three incidents, three different failure types: Chevrolet (authority), Air Canada (verification), and DPD (scope), each with its date and outcome."
              width={900}
              height={330}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>The three questions</h2>
          <p>
            Before any task gets handed to AI without a human checking it, three questions:
          </p>
          <p>
            <strong>Reversibility.</strong>{" "}If the output is wrong, can it be undone cheaply, or
            is it money already sent, a promise already made, a statement already public?
          </p>
          <p>
            <strong>Stakes.</strong>{" "}What does being wrong actually cost here? A bad product
            suggestion is a shrug. A wrong policy stated as fact to a customer is a liability.
          </p>
          <p>
            <strong>Verifiability.</strong>{" "}Does a person see this before it reaches a customer,
            or is it acting in real time with nobody in the loop?
          </p>
          <p>Run any task through those three and it sorts itself into one of three zones.</p>

          <figure className="post-figure">
            <Image
              src="/when-ai-fails/decision-framework.svg"
              alt="Flowchart: the three questions, reversibility, stakes, verifiability, feed into a single check that sorts a task into the green zone (AI runs alone), yellow zone (AI drafts, a human approves), or red zone (not AI's call)."
              width={900}
              height={570}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <h2>The three zones</h2>
          <p>
            <strong>Green: AI runs on its own.</strong>{" "}Wrong here costs a few minutes, not a
            customer or a dollar.
          </p>
          <ul>
            <li>Drafting a reply for a human to send</li>
            <li>Tagging and routing tickets</li>
            <li>Summarizing a week of order data into a report</li>
            <li>First drafts of content</li>
          </ul>
          <p>
            <strong>Yellow: AI drafts, a human approves.</strong>{" "}The AI does the thinking, a
            person still signs off before it goes out.
          </p>
          <ul>
            <li>Customer replies above a certain stakes threshold</li>
            <li>Refund or discount suggestions under a defined cap</li>
            <li>Reorder recommendations</li>
          </ul>
          <p>
            <strong>Red: AI doesn&#39;t get the call.</strong>{" "}If Air Canada&#39;s bot had been
            kept out of policy questions entirely, or every policy claim it made had needed a
            human check before reaching the customer, there&#39;s no tribunal case.
          </p>
          <ul>
            <li>Refunds or credits above threshold</li>
            <li>Anything that reads as a policy or legal commitment</li>
            <li>Irreversible financial actions</li>
            <li>Final pricing</li>
          </ul>
          <p>
            Most of the AI failures that go viral happen because something that belonged in
            yellow or red got treated like green.
          </p>

          <h2>How this actually gets decided</h2>
          <p>
            This isn&#39;t a one-time checklist. Every operational task in a business, support
            replies, refund decisions, inventory calls, has its own reversibility, stakes, and
            verifiability profile, and those profiles shift as the business grows. Mapping that
            out before deciding what AI touches is the actual work. It&#39;s slower than
            &quot;add a chatbot.&quot; It&#39;s also the difference between a system that holds
            up under an adversarial user and one that ends up as a screenshot with 20 million
            views.
          </p>

          <p>
            Chevrolet, Air Canada, and DPD didn&#39;t set out to build something that would
            embarrass them. They just never mapped where AI&#39;s judgment should stop and a
            person&#39;s should start before it went live.
          </p>
          <p>
            That mapping is the actual work behind anything I build. Guardrails get placed before
            automation does, so green, yellow, and red get decided on purpose instead of found
            out from a screenshot.
          </p>
          <p>
            Worth knowing where those lines sit in your own operation before you find out the
            hard way?
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
