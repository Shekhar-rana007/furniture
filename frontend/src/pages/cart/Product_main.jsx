import React from 'react'
import { NavLink } from 'react-router-dom'

const Product_main = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item p-2">
                            <NavLink className="nav-link active" aria-current="page" to="/cartedit" >Select Tenure</NavLink>
                        </li>

                        <li className="nav-item p-2">
                            <NavLink className="nav-link" to="/knowmore">Know More </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Product_main
