import './Navbar.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Navbar(props){
    return(
        <nav className="navbar">
            <div className="leftSide">
                <Link to="/">Logo | Purple Elephant Careers</Link>
            </div>
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    )
}

function NavItem(props){

    const [open, setOpen] = useState(false);
    return(
        <li className="nav-item">
            {!props.icon &&
                <Link to={props.link} className="nav-link" onClick={() => setOpen(!open)}>
                    {props.text}
                </Link>
            }
            {props.icon &&
                <div className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </div>
            }
            {open && props.children}
        </li>
    )
}
function DropdownMenu(props){

    function DropdownItem(props){
        return(
            <Link to={props.link} className="menu-item">
                {props.children}
            </Link>
        )
    }
    return(
        <>
        {!props.type &&
            <div className="dropdown">
                    <DropdownItem link="/about">Biography</DropdownItem>
                    <DropdownItem link="/about-pe">Company</DropdownItem>
                    <DropdownItem link="/testimonials">Testimonials</DropdownItem>
            </div>
        }
        {props.type && 
            <div className="dropdown two">
                <DropdownItem link="/home">Home</DropdownItem>
                <DropdownItem link="/services">Services</DropdownItem>
                <DropdownItem link="/book">Booking</DropdownItem>
                <DropdownItem link="/about">Biography</DropdownItem>
                <DropdownItem link="/about-pe">Company</DropdownItem>
                <DropdownItem link="/testimonials">Testimonials</DropdownItem>
            </div>
        }
        </>
    )
}
export {
    Navbar,
    NavItem,
    DropdownMenu
}