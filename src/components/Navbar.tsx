'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Location', href: '#location' },
  {
    label: 'Dental Services',
    href: '#services',
    children: [{ label: 'Membership Plan', href: '#membership' }],
  },
  { label: 'New Patients', href: '#new-patients' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-sm text-blue-200 px-6 md:px-10 py-2 flex justify-between items-center">
        <span>📍 Lewisville, TX &nbsp;|&nbsp; Serving the DFW Metroplex</span>
        <a href="tel:9723159214" className="text-white font-semibold tracking-wide hover:text-gold transition-colors">
          📞 (972) 315-9214
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-bold text-navy leading-tight">
            LUCKY SMILES
            <span className="block text-teal text-xs font-sans font-medium tracking-[3px] uppercase">
              Dentistry
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item relative group">
                <a
                  href={link.href}
                  className="px-4 py-5 text-sm font-medium text-gray-700 hover:text-teal transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {link.label}
                  {link.children && <span className="text-xs opacity-60">▾</span>}
                </a>
                {link.children && (
                  <div className="nav-dropdown hidden absolute top-full left-0 bg-white border border-gray-100 border-t-2 border-t-teal shadow-lg min-w-[180px] z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:text-teal hover:bg-teal-light transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="ml-3 bg-teal text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-navy transition-colors"
              >
                Book Online
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-teal"
                >
                  {link.label}
                </a>
                {link.children?.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-4 text-sm text-gray-500 hover:text-teal"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-teal text-white px-5 py-3 rounded text-sm font-semibold text-center"
            >
              Book Online
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
