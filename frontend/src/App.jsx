// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Login, SignUP } from "./pages";
import AdminPage from "./admin";
<<<<<<< HEAD
import ShopPage from "./pages/Shopping/ShopPage";
=======
import ProductModal from "./pages/ProductPages/ProductModal";
>>>>>>> 67fcc217189bc7771f29290fd9977ff3ba9357c7
const App = () => {

return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/rent/:id" element={<ShopPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/product/:id" element={<ProductModal />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
