import React from 'react'
import  Navbar  from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ShopNow from './pages/ShopNow'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop_now' element={<ShopNow />} />
      </Routes>
    </div>
  )
}

export default App