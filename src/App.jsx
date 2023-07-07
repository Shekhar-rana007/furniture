import React from 'react'
import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import "./App.css"
import HomeWhy from './Components/HomeWhy'
import HomeStress from './Components/HomeStress'
const App = () => {
  
return (
    <>
    <Navbar />
    <Home />
    <HomeWhy />
    <HomeStress />
    </>
  )
}

export default App