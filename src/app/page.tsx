'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Building2, Layers, ShieldCheck, Clock, Handshake } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import MarketCard from '@/components/MarketCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTABanner from '@/components/CTABanner'
import { PRODUCTS, MARKETS } from '@/lib/constants'

// TODO: Replace with real testimonials when available
const TESTIMONIALS = [
  {
    quote:
      'Select Packaging helped us redesign our entire product line with new shrink sleeve labels. The color accuracy and print quality exceeded our expectations, and the turnaround time was half what our previous supplier quoted.',
    name: 'Sarah Mitchell',
    title: 'Director of Operations, Regional Food Co.',
  },
  {
    quote:
      'We switched to Select Packaging for our supplement pouches and the difference was immediate. Better barrier properties, cleaner prints, and a team that actually understands nutraceutical compliance requirements.',
    name: 'James Rodriguez',
    title: 'VP of Marketing, Health & Wellness Brand',
  },
  {
    quote:
      'Their warehousing program changed our business. Instead of tying up capital in packaging inventory, we pull what we need when we need it. Select Packaging feels like an extension of our own supply chain team.',
    name: 'Emily Chen',
    title: 'Supply Chain Manager, DTC Beauty Company',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Your Packaging Partner in Dallas, TX"
        subheadline="Select Packaging delivers custom labels, cartons, pouches, and flexible packaging solutions that protect your products, elevate your brand, and keep your supply chain moving."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-md hover:bg-brand-teal-dark transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            href="/products-services"
            className="inline-flex items-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            Our Services
          </Link>
        </div>
      </HeroSection>

      {/* Intro / Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-6">
              Packaging Solutions Built for Your Business
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-10">
              Select Packaging is a full-service packaging solutions provider
              headquartered in Dallas, Texas. We work with brands, manufacturers,
              and co-packers across the country to source and deliver custom
              packaging — from pressure-sensitive labels and shrink sleeves to
              folding cartons, flexible roll stock, and pre-made pouches. Whether
              you&apos;re launching a new product or scaling an existing line, we
              bring the materials expertise, supplier network, and hands-on
              service to get your packaging right.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Layers, label: '10+ Industries Served', sub: 'Food, pharma, beauty, pet, and more' },
              { icon: MapPin, label: 'Based in Dallas, TX', sub: 'Serving brands nationwide' },
              { icon: Building2, label: 'Custom Solutions', sub: 'Tailored to your product & market' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <item.icon
                  size={32}
                  className="text-brand-teal mx-auto mb-3"
                />
                <p className="font-semibold text-brand-black text-sm">
                  {item.label}
                </p>
                <p className="text-brand-slate text-xs mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services Overview */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-4">
              Our Products & Services
            </h2>
            <p className="text-brand-slate text-lg max-w-2xl mx-auto">
              From primary labels and retail-ready cartons to flexible pouches and
              warehousing support, we cover every step of your packaging supply chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <ProductCard key={product.title} {...product} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products-services"
              className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-4">
              Markets We Serve
            </h2>
            <p className="text-brand-slate text-lg max-w-2xl mx-auto">
              Every industry has unique packaging requirements — from FDA
              compliance in food and pharma to child-resistant closures in
              cannabis. We know the standards and deliver accordingly.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {MARKETS.slice(0, 8).map((market, i) => (
              <MarketCard key={market.title} {...market} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
            >
              See All Markets <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-4">
              Why Choose Select Packaging
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: 'Quality Assurance',
                desc: 'Every order goes through rigorous quality checks — from pre-press proofing and color matching to final inspection before shipment. We catch issues before they reach your filling line.',
              },
              {
                icon: Clock,
                title: 'Reliable Lead Times',
                desc: 'We manage supplier relationships and production schedules so your packaging arrives when you need it. Our warehousing program lets you pull inventory on demand without long lead time delays.',
              },
              {
                icon: Handshake,
                title: 'Dedicated Service',
                desc: 'You work directly with a dedicated account manager who knows your products, your specs, and your timeline. No call centers, no ticket queues — just responsive, personal service.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <item.icon size={36} className="text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-serif text-brand-black mb-3">{item.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* TODO: Replace with real testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
