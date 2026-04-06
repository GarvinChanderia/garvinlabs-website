import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GarvinLabs — We Build Systems That Grow Your Business',
  description: 'Websites, apps, and automation — everything built to bring you more customers and reduce manual work. Based in Pune, India.',
  openGraph: {
    type: 'website',
    url: 'https://garvinlabs.vercel.app',
    title: 'GarvinLabs — We Build Systems That Grow Your Business',
    description: 'Websites, apps, and automation — everything built to bring you more customers and reduce manual work. Book a free strategy call.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GarvinLabs — We Build Systems That Grow Your Business',
    description: 'Websites, apps, and automation — everything built to bring you more customers and reduce manual work.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
