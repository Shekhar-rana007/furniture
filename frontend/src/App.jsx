// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ShoppingMain from "./pages/Shopping/ShoppingMain";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Login, SignUP } from "./pages";
import AdminPage from "./admin";
const App = () => {
<<<<<<< HEAD:frontend/src/App.jsx
  return (
=======
  
  
return (
>>>>>>> c7b0c26fee4552166f96ee6a1ae1c1768957b6c5:src/App.jsx
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/rentfurniture" element={<ShoppingMain />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;