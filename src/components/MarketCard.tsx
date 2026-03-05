'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  Pill,
  Sparkles,
  PawPrint,
  Cross,
  Home,
  Wine,
  Wrench,
  Leaf,
  Truck,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Pill,
  Sparkles,
  PawPrint,
  Cross,
  Home,
  Wine,
  Wrench,
  Leaf,
  Truck,
}

interface MarketCardProps {
  title: string
  description: string
  icon: string
  image?: string
  index: number
}

export default function MarketCard({
  title,
  description,
  icon,
  image,
  index,
}: MarketCardProps) {
  const Icon = iconMap[icon] || Home

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-brand-black/20" />
        </div>
      )}
      <div className="p-6">
        <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-3">
          <Icon size={20} className="text-brand-teal" />
        </div>
        <h3 className="text-lg font-serif text-brand-black mb-2">{title}</h3>
        <p className="text-brand-slate text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
