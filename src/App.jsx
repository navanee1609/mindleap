import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
function App() {
  return (
    <div className='font-primary overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App