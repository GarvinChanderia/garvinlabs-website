import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: '🌐',
    title: 'Custom Web Development',
    tagline: 'Websites that turn visitors into paying customers',
    body: 'A professional website built to communicate clearly, load fast, and push visitors to take action.',
    benefits: [
      'Conversion-optimised design',
      'Fast, mobile-first, SEO-ready',
      'Copy and structure that builds trust',
    ],
    msg: "I'm interested in web development.",
  },
  {
    icon: '📱',
    title: 'SaaS & App Development',
    tagline: 'Build your own product or platform',
    body: 'Turn your idea into a real product — a mobile app, web platform, or SaaS tool your customers pay for.',
    benefits: [
      'Full product — design, build, launch',
      'Mobile (iOS + Android) and web',
      'Scalable architecture from day one',
    ],
    msg: "I'm interested in app development.",
  },
  {
    icon: '🤖',
    title: 'AI-Powered Automation',
    tagline: 'Automate work and never miss a lead again',
    body: 'We find the manual tasks eating your team\'s time and replace them with systems that run automatically.',
    benefits: [
      'Lead follow-up on autopilot',
      'Automated reports and data entry',
      'AI tools that work 24/7',
    ],
    msg: "I'm interested in AI automation.",
  },
  {
    icon: '🗺️',
    title: 'Business Process Consulting',
    tagline: 'Fix inefficiencies and build systems that scale',
    body: "We map your business end-to-end, find what's slowing you down, and redesign it so you can grow.",
    benefits: [
      'Process mapping and bottleneck ID',
      'Clear documentation for your team',
      'Systems built for 10x growth',
    ],
    msg: "I'm interested in consulting.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-12">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Four ways we fix your business.
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg">
            Each service is designed around one goal: more revenue, less friction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map(s => (
            <div key={s.title}
              className="reveal group bg-card border border-border rounded-2xl p-8 flex flex-col
                         hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">

              <span className="text-3xl mb-5">{s.icon}</span>
              <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs font-semibold text-indigo-400 tracking-wide mb-3">{s.tagline}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{s.body}</p>

              <ul className="flex-1 space-y-2 mb-6">
                {s.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/919356249535?text=Hi%20Garvin%2C%20${encodeURIComponent(s.msg)}`}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white
                           group-hover:gap-3 transition-all">
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
