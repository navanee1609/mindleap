import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Service from './components/Service'
import About from './components/About'
function App() {
  return (
    <div className='font-primary overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App