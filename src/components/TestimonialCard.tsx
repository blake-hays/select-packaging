'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  index: number
}

export default function TestimonialCard({
  quote,
  name,
  title,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Quote size={32} className="text-brand-teal/30 mb-4" />
      <p className="text-brand-black italic leading-relaxed mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-brand-black text-sm">{name}</p>
        <p className="text-brand-slate text-sm">{title}</p>
      </div>
    </motion.div>
  )
}
