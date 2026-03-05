'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white pt-20">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl font-serif text-brand-teal mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-slate text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-md hover:bg-brand-teal-dark transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
