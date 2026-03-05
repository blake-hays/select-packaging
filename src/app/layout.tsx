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
  title: {
    default: 'Select Packaging, LLC | Custom Packaging Solutions in Dallas, TX',
    template: '%s | Select Packaging, LLC',
  },
  description:
    'Select Packaging is a Dallas-based packaging company offering custom labels, shrink sleeves, folding cartons, roll stock, and pouches for businesses across the nation.',
  keywords: 'packaging, custom packaging, labels, shrink sleeves, folding cartons, pouches, roll stock, Dallas, Texas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Select Packaging, LLC',
    title: 'Select Packaging, LLC | Custom Packaging Solutions in Dallas, TX',
    description:
      'Custom labels, shrink sleeves, folding cartons, pouches, and roll stock from a trusted Dallas-based packaging partner.',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
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
