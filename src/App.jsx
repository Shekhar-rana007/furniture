import React from 'react'
import Navbar from "./Components/Navbar"
import HomeMain from './Components/Home/HomeMain'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import ShoppingMain from './Components/ShoppingSec/ShoppingMain'
const App = () => {
  
return (
    <>
    <Navbar />
    <Routes>
    <Route path="/rentFurnitures" element={<ShoppingMain />} />



    </Routes>
   <HomeMain />
    </>
  )
}

export default App