// import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./../Components/AdminSidebar";
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const AdminPage = () => {
  return (
    <div
      className="container-xxl d-flex gap-2 justify-between py-4 flex-wrap flex-md-nowrap"
      style={{ boxSizing: "border-box" }}
    >
      <div className=" col-12 col-md-4 col-lg-2 border shadow mb-4 mb-md-0 rounded overflow-hidden py-4">
        <AdminSidebar />
      </div>
      <div className="col-12 col-md-8 col-lg-10 border shadow">
        <Routes>
            <Route  path="/" element={<Dashboard />}/>
            <Route  path="/addproduct" element={<AddProduct />}/>
            <Route  path="/updateproduct" element={<UpdateProduct />}/>
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
