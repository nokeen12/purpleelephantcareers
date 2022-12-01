import './Navbar.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Navbar(props){
    return(
        <nav className="navbar">
            <div className="leftSide">
                <Link to="/purpleelephantcareers">
                    <img src="Logo.png" alt="logo"/>
                    Purple Elephant Careers
                </Link>
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
                    <DropdownItem link="/purpleelephantcareers/about">Biography</DropdownItem>
                    <DropdownItem link="/purpleelephantcareers/about-pe">Company</DropdownItem>
                    <DropdownItem link="/purpleelephantcareers/testimonials">Testimonials</DropdownItem>
            </div>
        }
        {props.type && 
            <div className="dropdown two">
                <DropdownItem link="/purpleelephantcareers/home">Home</DropdownItem>
                <DropdownItem link="/purpleelephantcareers/services">Services</DropdownItem>
                <DropdownItem link="/purpleelephantcareers/book">Booking</DropdownItem>
                <DropdownItem link="/purpleelephantcareers/about">Biography</DropdownItem>
                <DropdownItem link="/purpleelephantcareers/about-pe">Company</DropdownItem>
                <DropdownItem link="/purpleelephantcareers/testimonials">Testimonials</DropdownItem>
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