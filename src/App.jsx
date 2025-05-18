import React from 'react'
import  Navbar  from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ShopNow from './pages/ShopNow'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop_now' element={<ShopNow />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App