import AppNavbar from '@/components/common/AppNavbar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = ({role}) => {

  const adminRoutes = ['/dashboard', '/trips', '/trips/add', '/trips/edit/:id'];
  const clientRoutes = ['/client/dashboard', '/client/trips'];

  const pathname = useLocation().pathname;

  if(role === 'admin' && !adminRoutes.some(route => pathname.startsWith(route))) {
    return <div>Unauthorized Access</div>
  }

  if(role === 'user' && !clientRoutes.some(route => pathname.startsWith(route))) {
    return <div>Unauthorized Access</div>
  }

  return (
    <>
        <AppNavbar />
        <Outlet />
    </>
  )
}

export default AppLayout