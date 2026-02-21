'use client'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=80',
    headline: 'Healthy Mouth,',
    highlight: 'Happy Life',
    sub: 'Compassionate, comprehensive dental care for the whole family in Lewisville, TX.',
  },
  {
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=1600&q=80',
    headline: 'Changing Lives',
    highlight: 'One Smile at a Time',
    sub: 'From routine cleanings to advanced restorative treatments — all under one roof.',
  },
  {
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80',
    headline: 'Discover Your',
    highlight: 'Smile Today!',
    sub: 'New patients always welcome. Book your appointment online or call (972) 315-9214.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${slide.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-teal/50" />
        </div>
      ))}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 w-full">
        <div className="max-w-xl">
          <p className="text-gold text-xs font-semibold tracking-[3px] uppercase mb-4 animate-fadeup">Lewisville&apos;s Trusted Family Dentist</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-5 animate-fadeup-delay">
            {slides[current].headline}{' '}<em className="not-italic text-gold">{slides[current].highlight}</em>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 font-light animate-fadeup-delay2">{slides[current].sub}</p>
          <div className="flex flex-wrap gap-4 animate-fadeup-delay2">
            <a href="#contact" className="bg-gold text-navy px-7 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-yellow-400 transition-all hover:-translate-y-0.5 shadow-lg">Book Appointment</a>
            <a href="#services" className="border-2 border-white/40 text-white px-7 py-3.5 rounded font-medium text-sm hover:border-white hover:bg-white/10 transition-all">Our Services</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-gold scale-125' : 'bg-white/40'}`} />
        ))}
      </div>
    </section>
  )
}
