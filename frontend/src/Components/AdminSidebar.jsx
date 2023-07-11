// import React from 'react'

import { NavLink } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <div className="col-12 bg-light d-flex flex-column">
           <NavLink className="sideBtn" to={"/admin/"}>Dashboard</NavLink>
            <p className="ms-3 font-bold py-2">Products</p>
            <NavLink className="sideBtn" to={"/admin/addproduct"}>Add Products</NavLink>
            <NavLink className="sideBtn" to={"/admin/updateproduct"}>Update Products</NavLink>
        </div>
    )
}

export default AdminSidebar
