const hours = [
  { day: 'Monday',    time: '9:00 am – 5:00 pm' },
  { day: 'Tuesday',   time: '9:00 am – 5:00 pm' },
  { day: 'Wednesday', time: '9:00 am – 5:00 pm' },
  { day: 'Thursday',  time: '9:00 am – 5:00 pm' },
  { day: 'Friday',    time: '9:00 am – 5:00 pm' },
  { day: 'Saturday',  time: 'By Appointment Only' },
  { day: 'Sunday',    time: 'Closed', closed: true },
]

export default function Location() {
  return (
    <section id="location" className="bg-navy py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Hours */}
        <div>
          <p className="text-gold text-xs font-semibold tracking-[3px] uppercase mb-3">We&apos;re Open</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-8">Hours of Operation</h2>
          <ul className="divide-y divide-white/10">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3.5 text-sm">
                <span className="font-semibold text-white">{h.day}</span>
                <span className={h.closed ? 'text-white/30' : 'text-white/70'}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div id="new-patients">
          <p className="text-gold text-xs font-semibold tracking-[3px] uppercase mb-3">Find Us</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-8">Our Location</h2>
          <div className="bg-white/5 rounded-xl p-7 border border-white/10">
            {/* Map placeholder — replace with Google Maps embed iframe */}
            <div className="h-44 rounded-lg bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center text-white/30 text-4xl mb-6">
              📍
              <span className="text-xs mt-2 tracking-widest uppercase">Map Embed Here</span>
            </div>
            <address className="not-italic text-white/75 text-sm leading-loose">
              <strong className="text-white text-base block mb-1">Lucky Smiles Dentistry</strong>
              Lewisville, TX<br />
              DFW Metroplex<br /><br />
              <a href="tel:9723159214" className="text-gold hover:underline">📞 (972) 315-9214</a>
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 border border-white/30 text-white/80 text-xs px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
