'use client'

import { motion } from 'framer-motion'
import {
  Tag,
  Box,
  ScrollText,
  Package,
  PenTool,
  Warehouse,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Tag,
  Box,
  ScrollText,
  Package,
  PenTool,
  Warehouse,
}

interface ProductCardProps {
  title: string
  description: string
  icon: string
  index: number
}

export default function ProductCard({
  title,
  description,
  icon,
  index,
}: ProductCardProps) {
  const Icon = iconMap[icon] || Package

  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-14 h-14 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-5">
        <Icon size={28} className="text-brand-teal" />
      </div>
      <h3 className="text-xl font-serif text-brand-black mb-3">{title}</h3>
      <p className="text-brand-slate text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  )
}
