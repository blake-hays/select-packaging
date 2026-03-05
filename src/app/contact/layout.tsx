import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get a custom packaging quote from Select Packaging in Dallas, TX. Call (469) 995-5019 or fill out our form for labels, cartons, pouches, and more.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
