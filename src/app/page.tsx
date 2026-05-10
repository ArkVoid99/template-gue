import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectShowcase from '@/components/ProjectShowcase'
import PreviewMockup from '@/components/PreviewMockup'
import WhyChoose from '@/components/WhyChoose'
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
      <Pricing />
      <Footer />
    </main>
  )
}