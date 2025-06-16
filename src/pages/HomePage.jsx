// import React from 'react'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import CustomCursor from '../utils/CursorAnimation'

export default function HomePage() {
  return (
    <div className='bg-[#F8ECD8] font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
