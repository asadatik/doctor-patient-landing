import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

import Footer from '@/components/Footer'
import FeaturesSection from '../components/Featuressection'
import ShowcaseSection from  '../components/doctors/ShowcaseSection'  

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-navy to-navy2 text-white">
      <Navbar />
      <section id="home">
        <Hero />
       <FeaturesSection></FeaturesSection>
        <ShowcaseSection></ShowcaseSection>
      </section>
      
      <Footer />
    </main>
  )
}
