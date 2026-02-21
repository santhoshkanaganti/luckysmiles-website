'use client'
import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Routine Cleaning / Exam',
  'Teeth Whitening',
  'Dental Implants',
  'Crowns & Bridges',
  'Porcelain Veneers',
  'Oral Cancer Screening',
  'Fillings',
  'Root Canal Treatment',
  'Removable Dentures',
  'Sealants',
  'TMJ / TMD Treatment',
  'Bonding',
  'Emergency Care',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Form */}
        <div>
          <p className="text-teal text-xs font-semibold tracking-[3px] uppercase mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl font-bold text-navy mb-2">Send Us a Message</h2>
          <p className="text-gray-500 text-sm mb-8">We&apos;ll get back to you within one business day.</p>

          {status === 'success' ? (
            <div className="bg-teal-light border border-teal/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm">Thank you for reaching out. We&apos;ll be in touch shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-5 text-teal text-sm font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">First Name</label>
                  <input
                    name="firstName" value={form.firstName} onChange={handleChange} required
                    placeholder="Jane"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Last Name</label>
                  <input
                    name="lastName" value={form.lastName} onChange={handleChange} required
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Email Address</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="(972) 000-0000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Reason for Visit</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors text-gray-600"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder="Tell us anything else we should know..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-gray-50 focus:outline-none focus:border-teal focus:bg-white transition-colors resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-md px-4 py-3">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-teal text-white px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Info panel */}
        <div className="lg:pt-16">
          <h3 className="font-serif text-2xl font-bold text-navy mb-8">Contact Information</h3>
          {[
            { icon: '📞', label: 'Phone', value: '(972) 315-9214', href: 'tel:9723159214' },
            { icon: '📍', label: 'Location', value: 'Lewisville, TX — DFW Metroplex' },
            { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 9:00am – 5:00pm\nSat: By Appointment' },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 mb-7">
              <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center text-xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-navy font-medium hover:text-teal transition-colors">{item.value}</a>
                ) : (
                  <p className="text-navy font-medium whitespace-pre-line text-sm leading-relaxed">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="mt-8 bg-red-50 border border-red-100 rounded-xl p-5 flex gap-4">
            <span className="text-2xl">🚨</span>
            <div>
              <h4 className="font-semibold text-red-700 text-sm mb-1">Dental Emergency?</h4>
              <p className="text-red-600/80 text-xs leading-relaxed">
                For life-threatening injuries call <strong>911</strong> or go to your nearest ER.
                For urgent dental issues, call our office directly at{' '}
                <a href="tel:9723159214" className="font-semibold hover:underline">(972) 315-9214</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
