'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services',   href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Results',    href: '#trust' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-bg/90 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight text-white">
          Garvin<span className="text-zinc-500">Labs</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#cta"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-100 transition-colors px-4 py-2 rounded-full">
          Book a Free Call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center text-sm font-semibold bg-white text-zinc-950 px-4 py-2.5 rounded-full">
            Book a Free Call →
          </a>
        </div>
      )}
    </nav>
  )
}
