import './Navbar.css';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className='navbar'>
            <div className="leftSide">
                <Link to="/">Logo | Purple Elephant Careers</Link>
            </div>
            <div className="rightSide">
                <Link to="/home">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/services">Services</Link>
                <Link to="/book">Book an Appointment</Link>
                <HamburgerMenu />
            </div>
        </div>
    )
}
export default Navbar;