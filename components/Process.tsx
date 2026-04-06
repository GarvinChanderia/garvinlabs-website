const steps = [
  {
    num: '01',
    title: 'Understand Your Business',
    body: 'Free strategy call. We listen, ask questions, and understand what you actually need — not what sounds impressive.',
  },
  {
    num: '02',
    title: 'Design the Solution',
    body: 'Clear plan with defined outcomes, timeline, and cost. No surprises. You approve before we build anything.',
  },
  {
    num: '03',
    title: 'Build & Test',
    body: 'We build fast and share progress as we go. You see the work at every stage and give feedback before it\'s final.',
  },
  {
    num: '04',
    title: 'Launch & Optimise',
    body: 'We launch and keep watching. If something can perform better, we fix it. The goal is results, not just delivery.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-14">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Simple. Clear. No surprises.
          </h2>
          <p className="text-zinc-400 text-lg max-w-md">
            Every project follows the same four steps. You always know what's happening.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <div key={s.num}
              className="bg-card p-8 group hover:bg-zinc-800/50 transition-colors relative">
              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-10 w-px h-4 bg-border" />
              )}
              <div className="font-mono text-4xl font-bold text-zinc-700 mb-6 group-hover:text-indigo-500/60 transition-colors">
                {s.num}
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
