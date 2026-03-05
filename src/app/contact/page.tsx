'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import { COMPANY } from '@/lib/constants'

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Contact Us"
        subheadline="Ready to start your next packaging project? Whether you need a quick quote or want to discuss a custom solution, our team is here to help."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-brand-black mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm">
                      Email
                    </p>
                    <p className="text-brand-slate group-hover:text-brand-teal transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                <a href={COMPANY.phoneHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm">
                      Phone
                    </p>
                    <p className="text-brand-slate group-hover:text-brand-teal transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm">
                      Address
                    </p>
                    <p className="text-brand-slate">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm">
                      Business Hours
                    </p>
                    <p className="text-brand-slate">Monday - Friday, 8:00 AM - 5:00 PM CST</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=14114+Dallas+Pkwy,+Dallas,+TX+75254"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Select Packaging Location"
                />
              </div>
            </motion.div>

            {/* Quote Request Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-brand-black mb-2">
                Request a Quote
              </h2>
              <p className="text-brand-slate mb-8">
                Fill out the form below and a member of our team will get back to
                you within one business day.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
