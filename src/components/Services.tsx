const services = [
  { icon: '🦷', title: 'General Dentistry',     desc: 'Routine cleanings, exams, and preventive care to keep your smile healthy and strong for years to come.' },
  { icon: '✨', title: 'Teeth Whitening',        desc: 'Professional whitening treatments to brighten a faded or discolored smile — results in a single visit.' },
  { icon: '🔩', title: 'Dental Implants',        desc: 'The longest-lasting tooth replacement solution, restoring your smile\'s full function and appearance.' },
  { icon: '👑', title: 'Crowns & Bridges',       desc: 'Replace large amounts of lost tooth structure or missing teeth with durable, natural-looking restorations.' },
  { icon: '💎', title: 'Porcelain Veneers',      desc: 'Repair chips, cracks, and reshape teeth with custom-crafted veneers for a flawless, camera-ready smile.' },
  { icon: '🛡️', title: 'Oral Cancer Screening', desc: 'Early detection screenings to catch oral cancer at its most treatable stage — a simple, painless exam.' },
  { icon: '🪥', title: 'Fillings',               desc: 'Tooth-colored fillings to restore teeth affected by cavities, minor chips, or wear — discreet and durable.' },
  { icon: '🩺', title: 'Root Canal Treatment',   desc: 'Save an infected tooth with modern root canal therapy — comfortable and effective with today\'s techniques.' },
  { icon: '😁', title: 'Removable Dentures',     desc: 'Custom-fitted full or partial dentures that restore your confidence and ability to eat and speak naturally.' },
  { icon: '🧒', title: 'Sealants',               desc: "Protective sealants applied to children's teeth to guard against cavities and decay before they start." },
  { icon: '😬', title: 'TMJ / TMD Treatment',    desc: 'Relief for chronic jaw pain, clicking, or locking through targeted, non-invasive treatment plans.' },
  { icon: '🔬', title: 'Bonding',                desc: 'A quick and affordable way to repair small chips, cracks, or discoloration using tooth-colored resin.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal text-xs font-semibold tracking-[3px] uppercase mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
            From routine exams to advanced restorative treatments, all your dental needs can be
            met right here in our Lewisville office.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card relative bg-white rounded-lg p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-2xl mb-5">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-teal hover:gap-3 transition-all">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
