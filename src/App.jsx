// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShoppingMain from "./pages/Shopping/ShoppingMain";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Login, SignUP } from "./pages";
const App = () => {
  
  
return (
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
