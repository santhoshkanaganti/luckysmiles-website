import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Smiles Dentistry – Lewisville, TX',
  description: 'Compassionate, comprehensive dental care for the whole family in Lewisville, TX. Serving the DFW Metroplex. Call (972) 315-9214.',
  keywords: 'dentist Lewisville TX, family dentistry, teeth whitening, dental implants, DFW dentist',
  openGraph: {
    title: 'Lucky Smiles Dentistry – Lewisville, TX',
    description: 'Compassionate, comprehensive dental care for the whole family in Lewisville, TX.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800 bg-white">{children}</body>
    </html>
  )
}
