import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            <nav style={{ width: "300px", position:"absolute", zIndex:"1"}}>
                {isOpen ? <>
                    <RxCross1 onClick={toggleMenu} size={30} style={{ marginBottom: "50px", marginLeft: "40px", marginTop: "15px" }} />
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h5 style={{ marginLeft: "20px" }}>All</h5>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    Home Furniture
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">

                                    <ul className="navbar-menu pt-10">

                                        <li className="accordion-tab mb-4 active">

                                            <ul className="accordion-content p-4" style={{ display: 'block' }}>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
                                                        aria-label="Bed Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Bed Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/living-room-furniture-on-rent"
                                                        aria-label="Living Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Living Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/dining-furniture-on-rent"
                                                        aria-label="Dining Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Dining Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/study-room-furniture-rental"
                                                        aria-label="Study Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Study Room
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    Appliances
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">

                                    <ul className="navbar-menu pt-10">

                                        <li className="accordion-tab mb-4 active">

                                            <ul className="accordion-content p-4" style={{ display: 'block' }}>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
                                                        aria-label="Bed Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Bed Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/living-room-furniture-on-rent"
                                                        aria-label="Living Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Living Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/dining-furniture-on-rent"
                                                        aria-label="Dining Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Dining Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/study-room-furniture-rental"
                                                        aria-label="Study Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Study Room
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    Office Furniture
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">

                                    <ul className="navbar-menu pt-10">

                                        <li className="accordion-tab mb-4 active">

                                            <ul className="accordion-content p-4" style={{ display: 'block' }}>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
                                                        aria-label="Bed Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Bed Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/living-room-furniture-on-rent"
                                                        aria-label="Living Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Living Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/dining-furniture-on-rent"
                                                        aria-label="Dining Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Dining Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/study-room-furniture-rental"
                                                        aria-label="Study Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Study Room
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFour"
                                >
                                    Combos
                                </button>
                            </h2>

                            <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">

                                    <ul className="navbar-menu pt-10">

                                        <li className="accordion-tab mb-4 active">

                                            <ul className="accordion-content p-4" style={{ display: 'block' }}>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
                                                        aria-label="Bed Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        combo Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/living-room-furniture-on-rent"
                                                        aria-label="Living Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Living Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/dining-furniture-on-rent"
                                                        aria-label="Dining Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Dining Room
                                                    </NavLink>
                                                </li>
                                                <li className="mb-4">
                                                    <NavLink
                                                        href="https://cityfurnish.com/delhi/study-room-furniture-rental"
                                                        aria-label="Study Room"
                                                        target="_self"
                                                        rel="noopener"
                                                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                                                    >
                                                        Study Room
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </> :
                    <div className={`navbar ${isOpen ? 'open' : ''}`} >
                        <motion.div
                            className="menu"
                            onClick={toggleMenu}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bar"  style={{marginLeft:"50px"}}>
                                <FaBars size={30}  />
                            </div>

                        </motion.div>
                    </div>

                }
            </nav>
        </>
    )
}

export default Navbar

