import React from 'react'
import footerLogo from "../assets/footer-logo.svg"
import { FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { FaInstagram, FaX } from 'react-icons/fa6'
const Footer = () => {
  return (
   <div className='py-2 bg-grey px-8'>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className='space-y-6 mr-14'>
            <div className='flex items-center space-x-8'>
                <img src={footerLogo} alt="footer logo" className='w-32 h-auto' />
                
            </div>
            <p className='text-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio delectus nesciunt recusandae iure deserunt quibusdam necessitatibus.</p>
            <div className='flex space-x-2'>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaFacebookF className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaInstagram className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaX className='text-xl' />
                </a>
                <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <FaYoutube className='text-xl' />
                </a>
            </div>
        </div>
        <div className='space-y-6 '>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul  className='space-y-3'>
                <li>
                    <a href="#home" className='hover:underline text-gray-700'>Home</a>
                </li>
                <li>
                    <a href="#service" className='hover:underline text-gray-700'>Services</a>
                </li>
                <li>
                    <a href="#about" className='hover:underline text-gray-700'>About Us</a>
                </li>
                <li>
                    <a href="#pricing" className='hover:underline text-gray-700'>Pricing</a>
                </li>
                <li>
                    <a href="#testimonial" className='hover:underline text-gray-700'>Testimonial</a>
                </li>
            </ul>

        </div>
        <div className='space-y-6 '>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul  className='space-y-3'>
                <li>
                    <a href="#home" className='hover:underline text-gray-700'>FAQs</a>
                </li>
                <li>
                    <a href="#service" className='hover:underline text-gray-700'>Terms of Service</a>
                </li>
                <li>
                    <a href="#about" className='hover:underline text-gray-700'>Privacy policy</a>
                </li>
                <li>
                    <a href="#pricing" className='hover:underline text-gray-700'>Support Center</a>
                </li>
                
            </ul>

        </div>
        <div className='space-y-6 '>
            <h3 className='text-xl font-semibold mb-4'>Contact info</h3>
            <ul  className='space-y-3'>
                <li className='flex items-center gap-2'>
                    <FaMapMarkerAlt className='text-primary'/>
                    <p className='text-gray-700'>123, somewhere, Country</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaPhoneAlt className='text-primary'/>
                    <p className='text-gray-700'>1234567890</p>
                </li>
                <li className='flex items-center gap-2'>
                    <FaEnvelope className='text-primary'/>
                    <p className='text-gray-700'>info@mindleap.com</p>
                </li>
                
            </ul>

        </div>
    </div>

   </div>
  )
}

export default Footer