export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="text-sm font-bold text-zinc-400">
          Garvin<span className="text-zinc-600">Labs</span>
          <span className="text-zinc-700 ml-3">· Pune, India</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="mailto:chanderia.10.garvin@gmail.com"
            className="hover:text-zinc-300 transition-colors">
            chanderia.10.garvin@gmail.com
          </a>
          <a href="https://wa.me/919356249535"
            className="hover:text-zinc-300 transition-colors">
            +91 93562 49535
          </a>
        </div>

        <p className="text-xs text-zinc-700">© 2026 GarvinLabs</p>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bg/95 backdrop-blur border-t border-border
                      flex items-center justify-between gap-3 px-5 py-3">
        <div>
          <p className="text-xs font-semibold text-white">+91 93562 49535</p>
          <p className="text-[10px] text-zinc-600">WhatsApp anytime</p>
        </div>
        <a href="https://wa.me/919356249535?text=Hi%20Garvin%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
          target="_blank" rel="noopener"
          className="bg-white text-zinc-950 text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap">
          Book a Call →
        </a>
      </div>
    </footer>
  )
}
