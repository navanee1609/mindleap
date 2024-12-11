import React from 'react'
import heroImg from "../assets/hero.webp"
import { TbCircleArrowRightFilled } from 'react-icons/tb'
const Hero = () => {
  return (
   <section id='home' className='bg-heroBg flex justify-center items-center pt-28 text-white md:h-screen'>
    <div className='container mx-auto h-full flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side */}

        <div className='md:w-1/2 h-full'>
        <h2 className='text-4xl font-secondary font-bold mb-4 leading-snug'>Start your journey to Mental Wellness</h2>
        <p className='text-lg mb-12 md:pr-8'>We are on a mission to prevent and combat mental illness by promoting awareness and understanding through mental health education. By empowering individuals with the knowledge to recognize and address challenges, we aim to break the stigma surrounding mental illness and encourage open conversations.</p>
        <button className='bg-primary py-3.5 text-white px-8 font-medium rounded'>
            <a href="#contact" className='flex gap-1 items-center'>Get Started <TbCircleArrowRightFilled /></a>
        </button>
        </div>


        {/* right side */}
        <div className='md:w-1/2 h-full'>
        <img src={heroImg} alt="img"  className='w-full object-cover'/>
</div>
    </div>
   </section>
  )
}

export default Hero