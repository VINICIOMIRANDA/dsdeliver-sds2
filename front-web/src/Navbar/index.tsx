import './stysles.css'
import React from "react";
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="home" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;