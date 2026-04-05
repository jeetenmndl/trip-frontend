import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='px-20 py-6 flex items-center justify-between'>
      {/* left part */}
      <div>
        <h1 className='text-4xl font-semibold'>CloveTrip</h1>
      </div>

      {/* right part */}
      <div className='flex items-center gap-16'>
        <nav className='space-x-8 text-lg text-gray-600 font-medium [&>a]:hover:text-black [&>a]:hover:underline '>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/contact">Contact</a>
        </nav>
        <CustomButton text="Login" />
      </div>

    </header>
  )
}

export default Navbar