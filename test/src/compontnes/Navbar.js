import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to='/' style={({ isActive }) => {
                return {
                    color: isActive ? 'red' : 'gray'
                }

            }} >Home</NavLink>
            <NavLink to='about' style={{}} >About</NavLink>
            <NavLink to='products' style={{}} >Products</NavLink>

        </nav>
    );
};

export default Navbar;
