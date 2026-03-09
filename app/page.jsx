import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

import Footer from '@/components/Footer'
import FeaturesSection from '../components/Featuressection'
import ShowcaseSection from  '../components/doctors/ShowcaseSection'  
import CTASection from '../components/Ctasection'

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-navy to-navy2">
      <Navbar />
        <Hero />
       <FeaturesSection></FeaturesSection>
        <ShowcaseSection></ShowcaseSection>
        <CTASection></CTASection>

      
      <Footer />
    </main>
  )
}
