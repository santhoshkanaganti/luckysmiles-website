export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=800&q=80" alt="Modern dental office" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
          <div className="absolute -bottom-8 -right-4 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
            <img src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80" alt="Dentist with patient" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-navy text-white px-6 py-5 rounded-xl shadow-xl text-center">
            <div className="font-serif text-4xl font-bold text-gold leading-none">15+</div>
            <div className="text-xs text-white/70 tracking-widest uppercase mt-1">Years Serving<br/>Lewisville</div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:pt-8">
          <p className="text-teal text-xs font-semibold tracking-[3px] uppercase mb-3">Welcome</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">Your Dentist in<br/>Lewisville, TX</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">The dental professionals at Lucky Smiles Dentistry are pleased to welcome you to our practice. We want all our patients to be informed decision makers and fully understand any health issues they face.</p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">Our goal is to help you preserve your natural teeth, ensure your oral health, and keep you looking and feeling great. We&apos;re committed to making our practice convenient and accessible for the whole family.</p>
          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium"><span>✅</span> Accepting New Patients</div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium"><span>🏥</span> Most Insurance Accepted</div>
          </div>
          <a href="#contact" className="inline-block bg-teal text-white px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-navy transition-colors">Request an Appointment</a>
        </div>
      </div>
    </section>
  )
}
