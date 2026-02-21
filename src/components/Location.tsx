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
        <div id="new-patients">
          <p className="text-gold text-xs font-semibold tracking-[3px] uppercase mb-3">Find Us</p>
          <h2 className="font-serif text-4xl font-bold text-white mb-8">Our Location</h2>
          <div className="bg-white/5 rounded-xl p-7 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53578.69!2d-97.0641!3d33.0462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c3a3a3a3a3b%3A0x1!2sLewisville%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000"
              width="100%" height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-6"
            />
            <address className="not-italic text-white/75 text-sm leading-loose">
              <strong className="text-white text-base block mb-1">Lucky Smiles Dentistry</strong>
              Lewisville, TX — DFW Metroplex<br/><br/>
              <a href="tel:9723159214" className="text-gold hover:underline">📞 (972) 315-9214</a>
            </address>
            <a href="https://maps.google.com/?q=Lucky+Smiles+Dentistry+Lewisville+TX" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 border border-white/30 text-white/80 text-xs px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors">Get Directions →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
