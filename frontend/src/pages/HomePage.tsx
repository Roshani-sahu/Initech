
import Header from '../components/Header'
import Hero from '../components/home/Hero'
import MissionCritical from '../components/home/MissionCritical'
import Testimonialsection from '../components/home/Testimonials'
import TechSection from '../components/home/Thetech'
import ResilientEdge from '../components/home/ResilientEdge'
import Connectivity from '../components/home/Connectivity'
import Footer from '../components/Footer'


export default function HomePage() {
  return (
    <div >
      <Header />
      <Hero />
      <MissionCritical />
      <Testimonialsection />
      <TechSection />

      <Connectivity/>
      <ResilientEdge />
   
      <Footer />
   
    </div>
  )
}
