'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import MarketCard from '@/components/MarketCard'
import CTABanner from '@/components/CTABanner'
import { MARKETS } from '@/lib/constants'

export default function MarketsPage() {
  return (
    <>
      <HeroSection
        headline="Markets We Serve"
        subheadline="Every industry has unique packaging requirements — regulatory standards, material specifications, shelf life demands, and consumer expectations. We know the details."
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-slate text-lg leading-relaxed">
              From FDA-regulated food packaging to child-resistant cannabis
              pouches, our team understands the compliance requirements, material
              science, and print standards that matter in your market. We work
              across more than 10 industry verticals, bringing specialized
              knowledge to every project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARKETS.map((market, i) => (
              <MarketCard key={market.title} {...market} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your industry? */}
      <section className="py-16 bg-white">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-brand-slate text-lg mb-6">
            We work with businesses across a wide range of sectors beyond
            what&apos;s listed here. If your product needs packaging — whether
            it&apos;s a label, a pouch, a carton, or something custom — we&apos;d
            love to hear about it. Reach out and let&apos;s talk through your
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all text-lg"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      <CTABanner />
    </>
  )
}
