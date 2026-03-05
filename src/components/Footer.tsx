import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Select Packaging, LLC.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for custom packaging solutions in Dallas, TX.
              Serving businesses across the nation with quality labels, cartons,
              pouches, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-brand-teal transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 hover:text-brand-teal transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="flex items-start gap-3 hover:text-brand-teal transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                {COMPANY.address}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
