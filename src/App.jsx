import React from 'react'
import Navbar from "./Components/Navbar"
import HomeMain from './Components/Home/HomeMain'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import ShoppingMain from './Components/ShoppingSec/ShoppingMain'
import Header from './Components/Header'
const App = () => {
  
return (
    <>
    {/* <Navbar /> */}
    <Header />
    <Routes>
    <Route path="/" element={<HomeMain />} />
    <Route path="/rentfurniture" element={<ShoppingMain />} />



    </Routes>
    </>
  )
}

export default App