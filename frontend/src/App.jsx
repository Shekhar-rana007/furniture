// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Cart, Login, SignUP } from "./pages";
import AdminPage from "./admin";
import ShopPage from "./pages/Shopping/ShopPage";
import ProductModal from "./pages/ProductPages/ProductModal";
import ProductEdit from "./pages/cart/productEdit";
import KnowMore from "./pages/cart/KnowMore";
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartedit" element={<ProductEdit />} />
        <Route path="/knowmore" element={<KnowMore />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
