'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="bg-brand-black py-20">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Contact Select Packaging today for a custom quote tailored to your
          product and industry needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-md hover:bg-brand-teal-dark transition-colors text-lg"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  )
}
