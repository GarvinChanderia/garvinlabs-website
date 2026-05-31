import type { Metadata } from 'next';
import SupportChatBot from '@/components/SupportChatBot';

export const metadata: Metadata = {
  title: 'ThreadWave — AI Customer Support Demo | GarvinLabs',
  description:
    'Live demo: AI-powered customer support triage on a D2C apparel storefront. Two-pass Gemini classify + draft, Notion KB, real-time Telegram escalation.',
};

const products = [
  {
    name: 'Classic Hoodie',
    price: '$74.00',
    badge: 'Bestseller',
    color: 'Slate Grey',
    emoji: '🧥',
    scenario: 'I was charged twice for my hoodie order and need a refund urgently',
  },
  {
    name: 'Structured Jacket',
    price: '$120.00',
    badge: 'New Arrival',
    color: 'Midnight Black',
    emoji: '🧣',
    scenario: 'I want to return my jacket — bought it last week',
  },
  {
    name: 'Linen Shirt',
    price: '$58.00',
    badge: 'Summer Edit',
    color: 'Natural White',
    emoji: '👕',
    scenario: "Just received my linen shirt and it's absolutely incredible — love ThreadWave!",
  },
];

const pipeline = [
  { n: '1', label: 'Inbound', desc: 'Webhook receives POST from chat', color: '#3fb950' },
  { n: '2', label: 'KB Lookup', desc: 'Notion policies fetched in real-time', color: '#79c0ff' },
  { n: '3', label: 'Pass 1', desc: 'Gemini classifies category & urgency', color: '#d2a8ff' },
  { n: '4', label: 'Pass 2', desc: 'Gemini drafts reply from KB context', color: '#ffa657' },
  { n: '5', label: 'Gate', desc: 'Confidence ≥ 0.7 → auto-reply', color: '#3fb950' },
  { n: '6', label: 'Log', desc: 'Ticket written to Notion + Telegram if escalated', color: '#ff7b72' },
];

export default function ThreadwaveDemoPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">

      {/* Store header */}
      <header className="border-b border-[#e8e0d8] bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#111827] flex items-center justify-center">
              <span className="text-white text-[10px] font-black">TW</span>
            </div>
            <span className="font-bold text-[#111827] tracking-tight text-[16px]">ThreadWave</span>
            <span className="hidden sm:block text-[10px] font-medium text-[#999] bg-[#f0ede8] px-2 py-0.5 rounded-full">Demo Store</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#666]">
            <a href="#collection" className="hover:text-[#111827] transition-colors">Shop</a>
            <a href="#pipeline" className="hover:text-[#111827] transition-colors">How It Works</a>
            <a href="/demos" className="hover:text-[#111827] transition-colors">← All Demos</a>
          </nav>
          <span className="text-2xl" title="Demo cart">🛍</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#111827] text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#3fb950] text-[11px] font-bold tracking-widest uppercase mb-3">Summer Collection 2026</p>
            <h1 className="text-4xl md:text-[48px] font-black tracking-tight leading-[1.05] mb-5">
              Wear the calm.<br />Feel the thread.
            </h1>
            <p className="text-white/55 text-[16px] leading-relaxed mb-8">
              Premium basics. Sustainable sourcing. Obsessive craftsmanship.<br />
              <span className="text-white/30 text-[13px]">— and an AI support agent that actually understands your problem.</span>
            </p>
            <a href="#collection" className="inline-block bg-[#3fb950] hover:bg-[#2ea043] text-[#0a1a10] font-bold px-6 py-3 rounded-full text-[14px] transition-colors">
              Shop New Arrivals
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center text-[120px] opacity-20 select-none">
            🧥
          </div>
        </div>
      </section>

      {/* Demo notice */}
      <div className="bg-amber-50 border-b border-amber-200/60 px-6 py-2.5">
        <div className="max-w-5xl mx-auto flex items-start gap-2 text-[12px] text-amber-700">
          <span className="mt-0.5">⚡</span>
          <span>
            <strong>Live AI demo</strong> — simulated D2C store. The chat widget (bottom-right) uses a real n8n + Gemini triage pipeline.{' '}
            <span className="text-amber-600">Click a product scenario or type anything to see it classify and respond in real time.</span>
          </span>
        </div>
      </div>

      {/* Collection */}
      <section id="collection" className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-[22px] font-black text-[#111827] tracking-tight">Featured Collection</h2>
          <span className="text-[12px] text-[#aaa]">3 items</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {products.map(p => (
            <div key={p.name} className="group bg-white rounded-2xl overflow-hidden border border-[#ede8e0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-[#f5f0ea] to-[#ede8e0] flex items-center justify-center text-[80px] select-none">
                {p.emoji}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-[#3fb950] uppercase tracking-wider">{p.badge}</span>
                  <span className="text-[10px] text-[#bbb]">{p.color}</span>
                </div>
                <h3 className="font-bold text-[#111827] text-[15px] mb-0.5">{p.name}</h3>
                <p className="text-[#555] font-semibold text-[14px] mb-4">{p.price}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#111827] text-white text-[12px] font-bold py-2.5 rounded-xl hover:bg-[#1e293b] transition-colors border-none cursor-pointer">
                    Add to bag
                  </button>
                </div>
                <p className="text-[10px] text-[#bbb] mt-2 leading-tight">
                  💬 Try: &ldquo;{p.scenario.slice(0, 48)}…&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline breakdown */}
      <section id="pipeline" className="bg-[#111827] text-white px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[#3fb950] text-[11px] font-bold tracking-widest uppercase mb-2">Under the Hood</p>
            <h2 className="text-[22px] font-black tracking-tight">How the triage pipeline works</h2>
            <p className="text-white/40 text-[13px] mt-2">Every message you send to the chat goes through this sequence in ~3–4 seconds.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pipeline.map(s => (
              <div key={s.n} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black text-[#111827]" style={{ background: s.color }}>{s.n}</div>
                  <span className="font-bold text-[13px]">{s.label}</span>
                </div>
                <p className="text-white/45 text-[12px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-[12px] text-white/40 leading-relaxed">
            <span className="text-white/70 font-semibold">Stack: </span>
            Next.js API proxy → ngrok tunnel → n8n webhook → Notion KB + conversation history → Gemini Flash Lite (2× HTTP) → respondToWebhook → Notion ticket log.
            Low-confidence or urgent → Telegram escalation alert.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d8] bg-white px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#aaa]">
          <span>© 2026 ThreadWave — Demo store. Not a real shop.</span>
          <div className="flex items-center gap-4">
            <span>Built by <a href="https://garvinlabs.com" className="text-[#111827] font-semibold hover:underline">GarvinLabs</a></span>
            <a href="/demos" className="hover:text-[#111827] transition-colors">← Back to demos</a>
          </div>
        </div>
      </footer>

      <SupportChatBot />
    </div>
  );
}
