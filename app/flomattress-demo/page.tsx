import type { Metadata } from 'next';
import FloMattressChatBot from '@/components/FloMattressChatBot';
import s from './flomattress-demo.module.css';

export const metadata: Metadata = {
  title: 'DEMO — Flo Mattress AI Support Concept | GarvinLabs',
  description:
    'Unofficial demo only. A sales-engineering proof of concept showing an AI support triage + chatbot layer, styled after Flo Mattress for illustration. Not affiliated with or operated by Flo Mattress.',
  robots: { index: false, follow: false },
};

const products = [
  { name: 'Flo Ergo Mattress', price: 'From ₹5,137', badge: 'Bestseller', firmness: 'Medium (6/9)', emoji: '🛏️' },
  { name: 'Flo Ortho Mattress', price: 'From ₹5,137', badge: 'For Back Pain', firmness: 'Firm (8/9)', emoji: '🛏️' },
  { name: 'Flo Anti-Gravity Latex', price: 'From ₹6,612', badge: 'Natural Latex', firmness: 'Medium-firm (7/9)', emoji: '🛏️' },
];

const pipeline = [
  { n: '1', label: 'Inbound',   desc: 'Webhook receives POST from chat widget',          color: '#4a6b5c' },
  { n: '2', label: 'KB Lookup', desc: 'Real Flo shipping/returns/sizing policy fetched', color: '#79c0ff' },
  { n: '3', label: 'Pass 1',    desc: 'Gemini Flash Lite classifies category & urgency', color: '#d2a8ff' },
  { n: '4', label: 'Pass 2',    desc: 'Gemini Flash Lite drafts reply grounded in the KB', color: '#ffa657' },
  { n: '5', label: 'Gate',      desc: 'Escalation rules check before auto-reply',         color: '#4a6b5c' },
  { n: '6', label: 'Log',       desc: 'Conversation + ticket written to Notion',          color: '#ff7b72' },
];

export default function FloMattressDemoPage() {
  return (
    <div className={s.page}>
      {/* Demo disclaimer — always visible, sticky top */}
      <div className={s.demoBanner}>
        <div className={s.demoBannerInner}>
          ⚠ <strong>DEMO ONLY</strong> — this is an unofficial proof-of-concept built by GarvinLabs.
          It is <strong>not</strong> the real Flo Mattress website and is <strong>not affiliated with, endorsed by, or operated by Flo Mattress</strong> in any way.
          Product names, prices, and policy text are copied from the public flomattress.com site for illustration only. No real orders, payments, or support requests are processed here.
        </div>
      </div>

      {/* Store Header (styled after the real site, not a copy of its code) */}
      <header className={s.storeHeader}>
        <div className={s.storeHeaderInner}>
          <div className={s.brand}>
            <div className={s.brandMark}>F</div>
            <span className={s.brandName}>Flo Mattress</span>
            <span className={s.brandBadge}>Demo recreation</span>
          </div>
          <nav className={s.storeNav}>
            <a href="#collection" className={s.storeNavLink}>Mattress</a>
            <a href="#pipeline" className={s.storeNavLink}>How the demo works</a>
            <a href="https://garvinlabs.com" className={s.storeNavLink}>← GarvinLabs</a>
          </nav>
          <span className={s.cartIcon} title="Demo only, not a real cart">🛍</span>
        </div>
      </header>

      {/* Hero — real Flo Mattress copy, used for illustration */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <p className={s.heroEyebrow}>Demo recreation of flomattress.com</p>
            <h1 className={s.heroTitle}>Unlock your deepest sleep,<br />or get 100% refund.</h1>
            <p className={s.heroSub}>
              Experience the best sleep starting at ₹9 per night. (Real Flo Mattress copy, reproduced here for demo purposes only.)
            </p>
            <a href="#collection" className={s.heroCta}>See the collection</a>
            <div className={s.heroBadges}>
              <span className={s.heroBadge}>✓ 100-night risk-free trial</span>
              <span className={s.heroBadge}>✓ 10-year warranty</span>
              <span className={s.heroBadge}>✓ Free shipping</span>
            </div>
          </div>
          <div className={s.heroVisual} aria-hidden>🛏️</div>
        </div>
      </section>

      {/* Pipeline notice */}
      <div className={s.notice}>
        <div className={s.noticeInner}>
          <span>⚡</span>
          <span>
            <strong>Live AI demo</strong> — the chat widget (bottom-right) runs a real local LLM + n8n
            triage pipeline grounded in Flo Mattress's actual public shipping, returns, and sizing policy.
            Try the preset chips or ask your own question.
          </span>
        </div>
      </div>

      {/* Collection */}
      <section id="collection" className={s.collection}>
        <div className={s.collectionHead}>
          <h2 className={s.collectionTitle}>Featured Collection</h2>
          <span className={s.collectionCount}>Real product names &amp; prices, demo only</span>
        </div>
        <div className={s.productGrid}>
          {products.map(p => (
            <div key={p.name} className={s.productCard}>
              <div className={s.productImage}>{p.emoji}</div>
              <div className={s.productBody}>
                <div className={s.productMeta}>
                  <span className={s.productBadge}>{p.badge}</span>
                  <span className={s.productColor}>{p.firmness}</span>
                </div>
                <div className={s.productName}>{p.name}</div>
                <div className={s.productPrice}>{p.price}</div>
                <div className={s.productActions}>
                  <button className={s.addBtn} type="button" disabled>Demo only</button>
                </div>
                <p className={s.productHint}>
                  💬 Try asking the chat about sizing or trial period →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className={s.pipeline}>
        <div className={s.pipelineInner}>
          <p className={s.pipelineEyebrow}>Under the Hood</p>
          <h2 className={s.pipelineTitle}>How the triage pipeline works</h2>
          <p className={s.pipelineSub}>Every message goes through this sequence, fully on local infrastructure.</p>
          <div className={s.pipelineGrid}>
            {pipeline.map(step => (
              <div key={step.n} className={s.pipelineCard}>
                <div className={s.pipelineCardHead}>
                  <div className={s.pipelineNum} style={{ background: step.color }}>{step.n}</div>
                  <span className={s.pipelineCardLabel}>{step.label}</span>
                </div>
                <p className={s.pipelineCardDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={s.pipelineNote}>
            <span className={s.pipelineNoteStrong}>Stack: </span>
            Next.js proxy → n8n webhook → Notion knowledge base (real Flo policy) + conversation history →
            Gemini Flash Lite (2× calls) → respondToWebhook → Notion ticket log.
            Escalation-worthy or low-confidence cases flag for human follow-up rather than auto-resolving.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.storeFooter}>
        <div className={s.storeFooterInner}>
          <span>Demo recreation — not the real Flo Mattress, not a real shop.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span>Built by <a href="https://garvinlabs.com" className={s.storeFooterLink}>GarvinLabs</a></span>
          </div>
          <div className={s.storeFooterDisclaimer}>
            This page is an independent, unofficial proof-of-concept created by GarvinLabs for sales-engineering purposes.
            It is not affiliated with, endorsed by, or operated by Flo Mattress. All real Flo Mattress trademarks, product names,
            and policy text belong to their respective owner and are reproduced here solely for illustration.
          </div>
        </div>
      </footer>

      <FloMattressChatBot />
    </div>
  );
}
