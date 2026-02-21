export default function Footer() {
  return (
    <footer className="bg-[#060f1c] pt-14 pb-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10 border-b border-white/10 mb-8">

          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-bold text-white mb-1">
              LUCKY SMILES
              <span className="block text-gold text-xs font-sans font-medium tracking-[3px] uppercase">
                Dentistry
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mt-4">
              Providing compassionate, comprehensive dental care to families in
              Lewisville and the DFW area. Your healthy smile is our priority.
            </p>
            <a href="tel:9723159214" className="inline-block mt-5 text-gold text-sm font-semibold hover:underline">
              📞 (972) 315-9214
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About Us', 'Dental Services', 'New Patients', 'Testimonials', 'Contact Us'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 text-sm hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {['General Dentistry', 'Teeth Whitening', 'Dental Implants', 'Porcelain Veneers', 'Root Canal', 'Membership Plan'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Lucky Smiles Dentistry – Lewisville, TX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
