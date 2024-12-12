import React, { useState } from 'react';
import thumbnail from '../assets/thumbnail.webp';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { TbCircleArrowRightFilled } from 'react-icons/tb';

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVideoPlay = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20 relative'>
      {/* Main Content */}
      <div className={`container mx-auto ${isPopupOpen ? 'blur-sm' : ''}`}>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* Left Side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            <div className='relative'>
              <img
                src={thumbnail}
                alt='video thumbnail'
                className='w-full md:h-[446px] h-auto rounded-lg object-cover'
              />
              <button
                onClick={handleVideoPlay}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow cursor-pointer'
              >
                <SiGoogledisplayandvideo360 size={56} className='text-white' />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className='md:w-1/2 w-full'>
            <h3 className='text-4xl font-secondary font-bold mb-4 leading-snug'>Individual Consult Therapy</h3>
        <p className='text-md mb-6 md:pr-8'>We are on a mission to prevent and combat mental illness by promoting awareness and understanding through mental health education. By empowering individuals with the knowledge to recognize and address challenges, we aim to break the stigma surrounding mental illness and encourage open conversations.</p>
        <button className='bg-primary py-3.5 text-white px-8 font-medium rounded'>
            <a href="#contact" className='flex gap-1 items-center'>Get Started <TbCircleArrowRightFilled /></a>
        </button>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
          <div className='relative w-[90%] md:w-[60%] bg-black rounded-lg overflow-hidden'>
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className='absolute top-0 right-3 bg-red-500 p-2 rounded-full text-white shadow cursor-pointer'
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Video */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
              title="YouTube video player"
              className='w-full h-60 md:h-96'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
