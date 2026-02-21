export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image placeholder */}
        <div className="relative order-2 lg:order-1">
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-teal-light to-[#c8edf2] flex flex-col items-center justify-center text-6xl">
            🦷
            <span className="font-sans text-sm text-gray-400 mt-3">Lucky Smiles Dentistry</span>
          </div>
          {/* Badge */}
          <div className="absolute -bottom-5 -left-5 bg-navy text-white px-6 py-5 rounded-xl shadow-xl text-center">
            <div className="font-serif text-4xl font-bold text-gold leading-none">15+</div>
            <div className="text-xs text-white/70 tracking-widest uppercase mt-1">Years Serving<br/>Lewisville</div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <p className="text-teal text-xs font-semibold tracking-[3px] uppercase mb-3">Welcome</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            Your Dentist in<br/>Lewisville, TX
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            The dental professionals at Lucky Smiles Dentistry are pleased to welcome you to our
            practice. We want all our patients to be informed decision makers and fully understand
            any health issues they face.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our goal is to help you preserve your natural teeth, ensure your oral health, and keep
            you looking and feeling great. We're committed to making our practice convenient and
            accessible for the whole family.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            We encourage you to explore our services and invite you to call or book online at any
            time. New patients are always welcome!
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal text-white px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-navy transition-colors"
          >
            Request an Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
