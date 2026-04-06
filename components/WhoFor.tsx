const cards = [
  {
    icon: '🚀',
    title: 'Founders & Builders',
    body: 'You have an idea for a product or platform and need someone to take it from concept to launched — fast.',
    bullets: ['First version of your app or SaaS', 'Landing page that actually sells', 'Tech stack you can build on'],
  },
  {
    icon: '🏢',
    title: 'Small & Mid-Size Businesses',
    body: "You're running a real business but manual work or a weak website is slowing you down.",
    bullets: ['Replace manual work with automation', 'Website that works as hard as your team', 'Clear data to make better decisions'],
  },
  {
    icon: '📈',
    title: 'Businesses Ready to Scale',
    body: 'Revenue is there but growth has stalled. You need systems that handle more — more customers, more orders.',
    bullets: ['Process design built for 10x growth', 'Automation that removes bottlenecks', "Infrastructure that doesn't break"],
  },
]

export default function WhoFor() {
  return (
    <section id="who" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-12">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Who This Is For</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Built for people serious about growing.
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg">
            We do our best work with businesses that have real momentum and want to go further.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-3 gap-4">
          {cards.map(c => (
            <div key={c.title}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4
                         hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{c.body}</p>
              <ul className="space-y-2 mt-auto pt-4 border-t border-border">
                {c.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-zinc-600 mt-0.5 flex-shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
