const testimonials = [
  {
    text: 'The team at Lucky Smiles made me feel so comfortable from the moment I walked in. Best dental experience I\'ve ever had!',
    name: 'Sarah M.',
    location: 'Lewisville, TX',
  },
  {
    text: 'I was nervous about my root canal but they walked me through every step. Virtually painless and the staff was incredibly kind.',
    name: 'James R.',
    location: 'Flower Mound, TX',
  },
  {
    text: 'My whole family goes here now. The kids actually look forward to their appointments! Clean office and a wonderful team.',
    name: 'Maria L.',
    location: 'Lewisville, TX',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-teal text-xs font-semibold tracking-[3px] uppercase mb-3">Patient Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">What Our Patients Say</h2>
          <p className="text-gray-500 max-w-md mx-auto text-base leading-relaxed">
            We&apos;re proud to serve families across Lewisville and the DFW area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gold text-lg mb-4">★★★★★</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="text-sm font-semibold text-navy">
                {t.name} <span className="text-gray-400 font-normal">— {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
