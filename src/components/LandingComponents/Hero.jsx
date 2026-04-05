import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <section className='relative h-[88dvh] overflow-hidden flex items-center justify-center '>
      {/* background image */}
        <div>
            <img src="/hero.jpg" alt="CloveTrip Hero" />
        </div>

        {/* black overlay */}
        <div className='h-[88dvh] w-full bg-black opacity-80 absolute left-0 top-0'></div>

        {/* main content  */}
        <div className='absolute w-1/2 text-white text-center'>
          <h1 className='text-5xl font-bold mb-10'>Discover Your Next Adventure</h1>

          <p className=' text-2xl font-medium mb-8'>
            <span className='text-red-800'>Uncover</span> the world's most breathtaking destinations with our curated travel experiences. From hidden gems to iconic landmarks, we bring you unforgettable journeys that inspire and captivate. Start your adventure today!
          </p>

          <a href="/login">
            <CustomButton text="Get Started" />
          </a>
          
        </div>

    </section>
  )
}

export default Hero