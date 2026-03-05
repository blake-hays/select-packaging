import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products & Services',
  description:
    'Custom labels, shrink sleeves, folding cartons, roll stock, pre-made pouches, packaging design, and warehousing services from Select Packaging in Dallas, TX.',
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
