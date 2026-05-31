import type { Metadata } from 'next';
import SupportChatBot from '@/components/SupportChatBot';
import s from './threadwave.module.css';

export const metadata: Metadata = {
  title: 'ThreadWave — AI Customer Support Demo | GarvinLabs',
  description:
    'Live demo: AI-powered customer support triage on a D2C apparel storefront. Two-pass Gemini classify + draft, Notion KB, real-time Telegram escalation.',
};

const products = [
  { name: 'Classic Hoodie',     price: '$74.00',  badge: 'Bestseller',  color: 'Slate Grey',     emoji: '🧥' },
  { name: 'Structured Jacket',  price: '$120.00', badge: 'New Arrival', color: 'Midnight Black',  emoji: '🧣' },
  { name: 'Linen Shirt',        price: '$58.00',  badge: 'Summer Edit', color: 'Natural White',   emoji: '👕' },
];

const pipeline = [
  { n: '1', label: 'Inbound',    desc: 'Webhook receives POST from chat',                color: '#3fb950' },
  { n: '2', label: 'KB Lookup',  desc: 'Notion policies fetched in real-time',           color: '#79c0ff' },
  { n: '3', label: 'Pass 1',     desc: 'Gemini classifies category & urgency',           color: '#d2a8ff' },
  { n: '4', label: 'Pass 2',     desc: 'Gemini drafts reply from KB context',            color: '#ffa657' },
  { n: '5', label: 'Gate',       desc: 'Confidence ≥ 0.7 → auto-reply',                 color: '#3fb950' },
  { n: '6', label: 'Log',        desc: 'Ticket written to Notion + Telegram if escalated', color: '#ff7b72' },
];

export default function ThreadwaveDemoPage() {
  return (
    <div className={s.page}>
      {/* Store Header */}
      <header className={s.storeHeader}>
        <div className={s.storeHeaderInner}>
          <div className={s.brand}>
            <div className={s.brandMark}>TW</div>
            <span className={s.brandName}>ThreadWave</span>
            <span className={s.brandBadge}>Demo Store</span>
          </div>
          <nav className={s.storeNav}>
            <a href="#collection" className={s.storeNavLink}>Shop</a>
            <a href="#pipeline"   className={s.storeNavLink}>How It Works</a>
            <a href="/demos"      className={s.storeNavLink}>← All Demos</a>
          </nav>
          <span className={s.cartIcon} title="Demo cart">🛍</span>
        </div>
      </header>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <p className={s.heroEyebrow}>Summer Collection 2026</p>
            <h1 className={s.heroTitle}>Wear the calm.<br />Feel the thread.</h1>
            <p className={s.heroSub}>
              Premium basics. Sustainable sourcing. Obsessive craftsmanship.
            </p>
            <a href="#collection" className={s.heroCta}>Shop New Arrivals</a>
          </div>
          <div className={s.heroVisual} aria-hidden>🧥</div>
        </div>
      </section>

      {/* Demo notice */}
      <div className={s.notice}>
        <div className={s.noticeInner}>
          <span>⚡</span>
          <span>
            <strong>Live AI demo</strong> — simulated D2C store. The chat widget (bottom-right)
            uses a real n8n + Gemini triage pipeline. Type anything or use the preset chips to
            see it classify and respond in real time.
          </span>
        </div>
      </div>

      {/* Collection */}
      <section id="collection" className={s.collection}>
        <div className={s.collectionHead}>
          <h2 className={s.collectionTitle}>Featured Collection</h2>
          <span className={s.collectionCount}>3 items</span>
        </div>
        <div className={s.productGrid}>
          {products.map(p => (
            <div key={p.name} className={s.productCard}>
              <div className={s.productImage}>{p.emoji}</div>
              <div className={s.productBody}>
                <div className={s.productMeta}>
                  <span className={s.productBadge}>{p.badge}</span>
                  <span className={s.productColor}>{p.color}</span>
                </div>
                <div className={s.productName}>{p.name}</div>
                <div className={s.productPrice}>{p.price}</div>
                <div className={s.productActions}>
                  <button className={s.addBtn}>Add to bag</button>
                </div>
                <p className={s.productHint}>
                  💬 Try asking about this in the chat →
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
          <p className={s.pipelineSub}>Every message goes through this sequence in ~3–4 seconds.</p>
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
            Next.js proxy → ngrok → n8n webhook → Notion KB + conversation history →
            Gemini Flash Lite (2× HTTP) → respondToWebhook → Notion ticket log.
            Low-confidence or urgent → Telegram escalation alert.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.storeFooter}>
        <div className={s.storeFooterInner}>
          <span>© 2026 ThreadWave — Demo store. Not a real shop.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span>Built by <a href="https://garvinlabs.com" className={s.storeFooterLink}>GarvinLabs</a></span>
            <a href="/demos" className={s.storeFooterBack}>← Back to demos</a>
          </div>
        </div>
      </footer>

      <SupportChatBot />
    </div>
  );
}
