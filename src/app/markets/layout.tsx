import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markets We Serve',
  description:
    'Select Packaging serves 10+ industries including food & beverage, nutraceuticals, cosmetics, pharmaceuticals, cannabis, pet care, wine & spirits, and more.',
}

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return children
}
