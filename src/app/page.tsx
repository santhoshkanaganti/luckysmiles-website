import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Services from '@/components/Services'
import About from '@/components/About'
import Location from '@/components/Location'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Location />
      <Testimonials />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  )
}
