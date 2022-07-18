import React from 'react'
import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navigationBar">
            <NavLink to ="/" className="navigationLink"> 
                <img src='https://www.studio-one.am/resources/studio/css/images/logo.svg' alt="studio" className='logoStyle'/>
            </NavLink>
            <div>
                <NavLink to ="/" className="navigationLink"> Home </NavLink>
                <NavLink to ="/login" className="navigationLink" > Login </NavLink>
                <NavLink to ="/news" className="navigationLink"> News </NavLink>
                <NavLink to ="/profile" className="navigationLink" > Profile </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
