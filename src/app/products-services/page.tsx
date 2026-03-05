'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { PRODUCTS } from '@/lib/constants'

export default function ProductsServicesPage() {
  return (
    <>
      <HeroSection
        headline="Our Products & Services"
        subheadline="From primary packaging and labels to warehousing and fulfillment, we provide end-to-end packaging solutions tailored to your product, your market, and your timeline."
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
              Select Packaging works with a network of vetted domestic and
              international manufacturers to deliver high-quality packaging at
              competitive prices. We handle quoting, pre-press, production
              management, quality control, and logistics — so you get a single
              point of contact for your entire packaging supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.title} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-serif text-brand-black text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We learn about your product, market, volume needs, and timeline to recommend the right packaging format and materials.' },
              { step: '02', title: 'Quoting & Design', desc: 'We source competitive quotes from our manufacturing network and work with your team on structural design and print-ready artwork.' },
              { step: '03', title: 'Production', desc: 'We manage the production run from pre-press proofing through final quality inspection, keeping you updated at every stage.' },
              { step: '04', title: 'Delivery', desc: 'Finished packaging ships directly to your facility or to our warehouse for just-in-time inventory management and release.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="text-4xl font-serif text-brand-teal mb-3">{item.step}</div>
                <h3 className="text-lg font-serif text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
