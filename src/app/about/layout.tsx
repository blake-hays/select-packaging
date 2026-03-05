import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Select Packaging — a Dallas-based packaging company with decades of experience in labels, cartons, pouches, and flexible packaging for brands nationwide.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
