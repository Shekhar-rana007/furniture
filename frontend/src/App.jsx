// import React from "react";
import HomeMain from "./pages/Home/HomeMain";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Login, SignUP } from "./pages";
import AdminPage from "./admin";
import ShopPage from "./pages/Shopping/ShopPage";
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
