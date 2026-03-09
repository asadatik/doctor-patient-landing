import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

import Footer from '@/components/Footer'
import FeaturesSection from '../components/Featuressection'


export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <section id="home">
        <Hero />
         <FeaturesSection></FeaturesSection>
      </section>
      
      <Footer />
    </main>
  )
}
