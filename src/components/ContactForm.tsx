'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'
import { INDUSTRIES_DROPDOWN, PRODUCT_INTERESTS } from '@/lib/constants'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  industry: string
  productInterests: string[]
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // TODO: Wire to Formspree, Resend, or Next.js server action
    console.log('Form submission:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-12 text-center">
        <CheckCircle size={48} className="text-brand-teal mx-auto mb-4" />
        <h3 className="text-2xl font-serif text-brand-black mb-2">
          Thank You!
        </h3>
        <p className="text-brand-slate">
          We&apos;ve received your request and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-black mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-black mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-black mb-1.5">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('company', { required: 'Company name is required' })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
        />
        {errors.company && (
          <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-black mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-black mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-black mb-1.5">
          Industry
        </label>
        <select
          {...register('industry')}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal bg-white"
        >
          <option value="">Select an industry...</option>
          {INDUSTRIES_DROPDOWN.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-black mb-2">
          Product Interest
        </label>
        <div className="grid grid-cols-2 gap-2">
          {PRODUCT_INTERESTS.map((product) => (
            <label
              key={product}
              className="flex items-center gap-2 text-sm text-brand-black"
            >
              <input
                type="checkbox"
                value={product}
                {...register('productInterests')}
                className="rounded border-gray-300 text-brand-teal focus:ring-brand-teal"
              />
              {product}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-black mb-1.5">
          Message / How can we help?
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-3 bg-brand-teal text-white font-semibold rounded-md hover:bg-brand-teal-dark transition-colors text-base"
      >
        Request a Quote
      </button>
    </form>
  )
}
