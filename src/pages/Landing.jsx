import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/LandingComponents/Hero'
import Features from '../components/LandingComponents/Features'
import FAQ from '@/components/LandingComponents/FAQ'
import Contact from '@/components/LandingComponents/Contact'
import { About } from '@/components/LandingComponents/About'
import { Gallery } from '@/components/LandingComponents/Gallery'
import { Footer } from '@/components/LandingComponents/Footer'
import { Testimonials } from '@/components/LandingComponents/Testimonials'
import { Connections } from '@/components/LandingComponents/Connections'

const Landing = () => {
  return (
    <div> 
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Connections />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Landing