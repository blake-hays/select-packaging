'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, User, Target, Eye, Zap } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import CTABanner from '@/components/CTABanner'

// TODO: Replace with real team photos and bios
const TEAM = [
  { name: 'Michael Wiest', title: 'Founder & CEO' },
  { name: 'Team Member', title: 'VP of Operations' },
  { name: 'Team Member', title: 'Director of Sales' },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="About Select Packaging"
        subheadline="A Dallas-based packaging partner built on industry expertise, supplier relationships, and a commitment to getting every order right."
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-black mb-6">
                Our Story
              </h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                Select Packaging was founded in Dallas, Texas with a
                straightforward goal: give brands and manufacturers a packaging
                partner that actually understands their business. Too many
                companies deal with slow quoting, inconsistent quality, and
                suppliers who disappear after the sale. We built Select Packaging
                to be the opposite of that.
              </p>
              <p className="text-brand-slate leading-relaxed mb-4">
                Our team brings decades of hands-on experience across the
                packaging supply chain — from substrate selection and print
                production to logistics, warehousing, and inventory management.
                We&apos;ve worked with startups launching their first SKU and
                established brands managing hundreds of product lines. That range
                of experience means we can guide you through material choices,
                regulatory requirements, and production timelines no matter where
                you are in your growth.
              </p>
              <p className="text-brand-slate leading-relaxed">
                We work with a vetted network of domestic and international
                manufacturing partners, giving our customers access to
                competitive pricing, flexible minimums, and fast turnaround times
                without sacrificing print quality or material performance. Every
                project is managed directly by our team from quote through
                delivery.
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-2xl h-80 lg:h-96 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* TODO: Replace with real company photo */}
              <Image
                src="/images/warehouse.jpg"
                alt="Packaging warehouse and fulfillment center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-serif text-brand-black text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Drives Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To simplify packaging procurement for growing brands by combining deep industry knowledge, a reliable supplier network, and responsive personal service.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To be the most trusted packaging partner for mid-market brands — known for making the process easy, the quality consistent, and the pricing competitive.',
              },
              {
                icon: Zap,
                title: 'Our Approach',
                text: 'We act as an extension of your team. We handle supplier management, quality assurance, production scheduling, and logistics so you can focus on building your brand.',
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
                <p className="text-brand-slate text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
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
              What We Do
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-4">
              We source, manage, and deliver custom packaging across every major
              format: pressure-sensitive labels, shrink sleeves, folding cartons,
              flexible roll stock, and pre-made pouches. We also offer packaging
              design services and warehousing programs to keep your supply chain
              lean and responsive.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">
              Our customers span more than 10 industries — from food and beverage
              to pharmaceuticals, cannabis, cosmetics, and e-commerce. No matter
              your market, we understand the compliance standards, material
              requirements, and print specifications that your packaging needs to
              meet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/products-services"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
              >
                Our Products & Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/markets"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
              >
                Markets We Serve <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      {/* TODO: Replace with real team photos and bios */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-serif text-brand-black text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <User size={40} className="text-brand-slate" />
                </div>
                <h3 className="font-serif text-lg text-brand-black">
                  {member.name}
                </h3>
                <p className="text-brand-slate text-sm">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
