import './Navbar.css';
// import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Navbar(props){
    return(
        <nav className="navbar">
            <div className="leftSide">
                <Link to="/">Logo | Purple Elephant Careers</Link>
            </div>
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
    )
}

function NavItem(props){

    const [open, setOpen] = useState(false);
    return(
        <li className="nav-item">
            <Link to={props.link} className="nav-link" onClick={() => setOpen(!open)}>
                {props.text}
            </Link>

            {open && props.children}
        </li>
    )
}
function DropdownMenu(){

    function DropdownItem(props){
        return(
            <Link to={props.link} className="menu-item">
                {props.children}
            </Link>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem link="/about">Biography</DropdownItem>
            <DropdownItem link="/about-pe">Company</DropdownItem>
            <DropdownItem link="/testimonials">Testimonials</DropdownItem>
        </div>
    )
}
export {
    Navbar,
    NavItem,
    DropdownMenu
}