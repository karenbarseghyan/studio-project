import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to ="/" > Home </Link>
            <Link to ="/login" > Login </Link>
            <Link to ="/news" > News </Link>
            <Link to ="/profile" > Profile </Link>
        </nav>
    )
}

export default Navbar
