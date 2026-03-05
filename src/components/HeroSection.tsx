'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  headline: string
  subheadline: string
  children?: React.ReactNode
}

export default function HeroSection({
  headline,
  subheadline,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,124,134,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            {subheadline}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
