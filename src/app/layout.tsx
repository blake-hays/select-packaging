import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Select Packaging, LLC | Custom Packaging Solutions in Dallas, TX',
  description:
    'Select Packaging is a Dallas-based packaging company offering custom labels, shrink sleeves, folding cartons, roll stock, and pouches for businesses across the nation.',
  keywords: 'packaging, custom packaging, labels, shrink sleeves, folding cartons, pouches, roll stock, Dallas, Texas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased font-sans text-brand-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
