import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Landing from './pages/Landing'
import Register from './pages/Register'

const App = () => {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App