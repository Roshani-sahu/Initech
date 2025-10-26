import React from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/home/Hero'
import HomePage from './components/home/HomePage'
import Testimonialsection from './components/home/Testimonials'
import TechSection from './components/home/Thetech'
import Footer from './components/Footer'


export default function App() {
  return (
    <div >
      <Header />
      <Hero />
      <HomePage />
      <Testimonialsection />
      <TechSection />
      <Footer />
   
    </div>
  )
}
