import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
// import { NavLink } from 'react-router-dom';
import SideNavbar from './SideNavbar';
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
                                <SideNavbar />
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

