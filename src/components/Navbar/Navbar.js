import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navigationBar">
            <NavLink to ="/" className="navigationLink"> Home </NavLink>
            <NavLink to ="/login" className="navigationLink" > Login </NavLink>
            <NavLink to ="/news" className="navigationLink"> News </NavLink>
            <NavLink to ="/profile" className="navigationLink" > Profile </NavLink>
        </nav>
    )
}

export default Navbar
