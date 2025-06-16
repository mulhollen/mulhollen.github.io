// import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './utils/CursorAnimation'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
