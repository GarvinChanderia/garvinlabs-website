const outcomes = [
  { num: '300+', label: 'App downloads',        sub: 'Zero ad spend — organic only' },
  { num: '40%',  label: 'Faster delivery',      sub: 'Workflow automation at Cummins' },
  { num: '938',  label: 'Pages personalised',   sub: 'Dental campaign, ₹91 total cost' },
  { num: '26',   label: 'Process docs',         sub: 'Built for a manufacturing business' },
]

const testimonials = [
  {
    quote: "Garvin built our entire process documentation system from scratch. 26 detailed documents that our team actually uses every day. Saved hours every week.",
    name: 'Raunaq S.',
    role: 'Manufacturing Business Owner',
    initial: 'R',
  },
  {
    quote: "The website was done fast and looked exactly like what we wanted. Came back for the app build because the first project went so smoothly.",
    name: 'Badi Bandi Team',
    role: 'Logistics Platform',
    initial: 'B',
  },
  {
    quote: "Built 938 personalised pages for our outreach campaign — all automated. Quality was high and the cost was almost nothing. Impressive execution.",
    name: 'Dental Revenue Engine',
    role: 'Healthcare Marketing',
    initial: 'D',
  },
]

export default function Outcomes() {
  return (
    <section id="trust" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-12">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Proof</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Real work. Real results.
          </h2>
          <p className="text-zinc-400 text-lg">No fluff — just outcomes.</p>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border mb-8">
          {outcomes.map(o => (
            <div key={o.num} className="bg-card px-6 py-8 text-center">
              <div className="text-4xl font-bold tracking-tight text-gradient-indigo mb-1">{o.num}</div>
              <div className="text-sm font-semibold text-white mb-1">{o.label}</div>
              <div className="text-xs text-zinc-500">{o.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="reveal grid md:grid-cols-3 gap-4 mb-10">
          {testimonials.map(t => (
            <div key={t.name}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col
                         hover:border-zinc-600 transition-colors">
              <div className="text-amber-400 text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-sm text-zinc-300 leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30
                               flex items-center justify-center text-indigo-300 font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="reveal text-center">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 font-medium">Industries worked in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Manufacturing', 'Logistics & Transport', 'Healthcare', 'Enterprise Tech', 'Consumer Apps', 'Professional Services'].map(i => (
              <span key={i}
                className="text-xs text-zinc-500 border border-border px-4 py-1.5 rounded-full">
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
