import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Service from './components/Service'
import About from './components/About'
import Work from './components/Work'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
function App() {
  return (
    <div className='font-primary overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Work/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App