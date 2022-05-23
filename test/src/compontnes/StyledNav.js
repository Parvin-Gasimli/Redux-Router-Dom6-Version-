import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css"

const StyledNav = () => {
    return (
        <div>
            <NavLink to="/" className={({ isActive }) => (
                isActive ? 'link active' : 'link'
            )}>
                Home
            </NavLink>
            <NavLink to="about" className={({ isActive }) => (
                isActive ? 'link active' : 'link'
            )} >About</NavLink>
            <NavLink to="products" className={({ isActive }) => (
                isActive ? 'link active' : 'link'
            )}  >Products</NavLink>
        </div>
    );
};

export default StyledNav;
