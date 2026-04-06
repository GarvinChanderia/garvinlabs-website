const problems = [
  {
    icon: '🌐',
    title: "Your website doesn't convert",
    body: "Visitors come, look around, and leave. No clear message. No reason to act. No follow-up.",
    cost: "Losing leads daily",
  },
  {
    icon: '🔁',
    title: 'Everything is done manually',
    body: "Your team spends hours on work a system could do in seconds. Mistakes happen. Speed suffers.",
    cost: "10+ hrs wasted / week",
  },
  {
    icon: '📭',
    title: 'Leads fall through the cracks',
    body: "Someone shows interest but there's no system to follow up. They go to a competitor.",
    cost: "Revenue walking away",
  },
  {
    icon: '📊',
    title: "You can't see what's working",
    body: "No dashboards, no data, no visibility. You're making decisions based on gut, not numbers.",
    cost: "Flying blind",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal grid md:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">The Real Problem</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Most businesses lose money every single day.
            </h2>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Not because they have bad products — but because their systems are broken or missing entirely.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {problems.map(p => (
            <div key={p.title}
              className="bg-card p-8 flex flex-col gap-4 group hover:bg-zinc-800/50 transition-colors">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-semibold text-white leading-snug">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">{p.body}</p>
              <span className="inline-block text-xs font-semibold text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-1 rounded-full w-fit">
                {p.cost}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
