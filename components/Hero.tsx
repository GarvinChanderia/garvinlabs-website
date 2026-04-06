import { ArrowRight, Zap } from 'lucide-react'

const stats = [
  { num: '25+',  label: 'Projects delivered' },
  { num: '300+', label: 'App downloads, 0 ads' },
  { num: '40%',  label: 'Faster delivery' },
  { num: '5+',   label: 'Industries' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid bg-radial-mask pointer-events-none" />

      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-border bg-card px-3 py-1.5 rounded-full uppercase tracking-widest">
          <Zap size={11} className="text-indigo-400" />
          Systems that grow your business
        </div>

        {/* Headline */}
        <h1 className="font-bold leading-[1.05] tracking-tight mb-6
          text-5xl sm:text-6xl md:text-7xl lg:text-[80px]">
          <span className="text-gradient">We build systems</span>
          <br />
          <span className="text-white">that grow your business.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
          From websites to apps to automation — everything built to bring you more customers and reduce manual work.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 font-semibold text-sm px-6 py-3 rounded-full hover:bg-zinc-100 transition-colors">
            Book a Free Call <ArrowRight size={15} />
          </a>
          <a href="#process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 border border-border px-6 py-3 rounded-full hover:border-zinc-500 hover:text-white transition-colors">
            See How It Works
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map(s => (
            <div key={s.num} className="bg-card px-6 py-5">
              <div className="text-3xl font-bold tracking-tight text-white mb-1">{s.num}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
