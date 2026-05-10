import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PreviewMockup from '@/components/PreviewMockup'
import ProjectShowcase from '@/components/ProjectShowcase'
import WhyChoose from '@/components/WhyChoose'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <PreviewMockup />
      <ProjectShowcase />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}