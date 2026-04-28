import React from 'react'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth';

const AppNavbar = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = ()=>{
        logout();
        navigate("/login");
    }

  return (
     <header className='px-20 py-6 flex items-center justify-between'>
      {/* left part */}
      <div>
        <h1 className='text-4xl font-semibold'>CloveTrip</h1>
      </div>

      {/* right part */}
      <div className='flex items-center gap-16'>
        <nav className='space-x-8 text-lg text-gray-600 font-medium [&>a]:hover:text-black [&>a]:hover:underline '>
          <a href="/dashboard">Dashboard</a>
          <a href="/trips">Trips</a>
          <a href="/bookings">Bookings</a>
          <a href="/blogs">Blogs</a>
        </nav>
        <div onClick={handleLogout}>
         <CustomButton text="Logout" />
        </div>
      </div>

    </header>
  )
}

export default AppNavbar