export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-teal to-[#0e6e7d] py-16 px-6 text-center">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
        Ready to Smile with Confidence?
      </h2>
      <p className="text-white/80 text-lg mb-8">
        New patients are always welcome. Book your appointment online today.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-teal px-9 py-4 rounded font-bold text-sm tracking-wide hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5 shadow-lg"
      >
        Schedule Your Visit
      </a>
    </section>
  )
}
