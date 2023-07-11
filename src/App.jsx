// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShoppingMain from "./pages/Shopping/ShoppingMain";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Login, SignUP } from "./pages";
const App = () => {
<<<<<<< HEAD
  return (
=======
  
  
return (
>>>>>>> 1f949deddc36a1596e7eea7d69df244c14da0f87
    <>
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/rentfurniture" element={<ShoppingMain />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
