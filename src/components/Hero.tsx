export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-[#12456b] to-teal min-h-[560px] flex items-center overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow circle */}
      <div className="animate-pulse-slow absolute right-[-80px] top-1/2 w-[500px] h-[500px] rounded-full bg-teal/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="max-w-xl">
          <p className="animate-fadeup text-gold text-xs font-semibold tracking-[3px] uppercase mb-4">
            Lewisville&apos;s Trusted Family Dentist
          </p>
          <h1 className="animate-fadeup-delay font-serif text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-5">
            Healthy Mouth,{' '}
            <em className="not-italic text-gold">Happy Life</em>
          </h1>
          <p className="animate-fadeup-delay2 text-blue-100 text-lg leading-relaxed mb-8 font-light">
            Compassionate, comprehensive dental care for the whole family. From routine cleanings
            to advanced restorative treatments — all under one roof in Lewisville, TX.
          </p>
          <div className="animate-fadeup-delay2 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gold text-navy px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-yellow-400 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="border-2 border-white/40 text-white px-7 py-3.5 rounded font-medium text-sm hover:border-white hover:bg-white/10 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
