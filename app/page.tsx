'use client'

import { useEffect } from 'react'
import Navbar    from '@/components/Navbar'
import Hero      from '@/components/Hero'
import Problem   from '@/components/Problem'
import Services  from '@/components/Services'
import Outcomes  from '@/components/Outcomes'
import Process   from '@/components/Process'
import WhoFor    from '@/components/WhoFor'
import CTA       from '@/components/CTA'
import Footer    from '@/components/Footer'

export default function Home() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Outcomes />
      <WhoFor />
      <CTA />
      <Footer />
    </main>
  )
}
