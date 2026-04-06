import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-surface">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Urgency pill */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-400
                        bg-red-400/10 border border-red-400/20 px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-dot" />
          Limited slots available this week
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Let's build something that{' '}
          <span className="text-gradient-indigo">actually grows</span>{' '}
          your business.
        </h2>

        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Tell us where you're stuck. We'll show you exactly what needs to be built and how long it takes.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 font-semibold
                       text-base px-8 py-4 rounded-full hover:bg-zinc-100 transition-colors">
            Book a Free Strategy Call <ArrowRight size={16} />
          </a>
          <a href="mailto:chanderia.10.garvin@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300
                       border border-border px-8 py-4 rounded-full hover:border-zinc-500 hover:text-white transition-colors">
            <MessageCircle size={15} /> Send a Message
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          Or WhatsApp directly:{' '}
          <a href="https://wa.me/919356249535"
            className="text-zinc-400 font-semibold hover:text-white transition-colors">
            +91 93562 49535
          </a>
        </p>
      </div>
    </section>
  )
}
