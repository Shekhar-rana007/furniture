import React from 'react'
import Navbar from "./Components/Navbar"
import HomeMain from './pages/Home/HomeMain'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import ShoppingMain from './pages/Shopping/ShoppingMain'
import Footer from './layout/Footer'
import Header from "./layout/Header"
const App = () => {
  
return (
    <>
    {/* <Navbar /> */}
    <Header />
    <Routes>
    <Route path="/" element={<HomeMain />} />
    <Route path="/rentfurniture" element={<ShoppingMain />} />
    </Routes>


    <Footer />
    </>
  )
}

export default App