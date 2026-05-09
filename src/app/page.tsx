import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectShowcase from '@/components/ProjectShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <Footer />
    </main>
  )
}