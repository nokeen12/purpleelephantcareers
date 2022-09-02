import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Services.css'
function Services(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div id="services">
            <h2>Services</h2>
            <div id="serviceSection">
                <div className="serviceBlock">
                    <img src="writing.png" alt="writing" />
                    <h2 className="serviceHover">Writing</h2>
                    <ul>
                        <li>Resumes</li>
                        <li>Cover Letter</li>
                        <li>LinkedIn</li>
                        <li>Bio</li>
                        <li>Thank you Notes</li>
                    </ul>
                </div>
                <div className="serviceBlock">
                    <img src="coaching.png" alt="laptop" />
                    <h2 className="serviceHover">Coaching</h2>
                    <ul>
                        <li>Job Search</li>
                        <li>Exploration / Discovery</li>
                        <li>Transition</li>
                        <li>Negotiation</li>
                        <li>Interviewing</li>
                    </ul>
                </div>
            </div>
            <p>*Packages Can Be Made With Any Combination Of Services, Based On Individual Needs.</p>
            <h2>Why Hesitate? Schedule A Free Consultation Now!</h2>
            <Link to="/book" className="button three">BOOK AN APPOINTMENT</Link>
        </div>
    )
}
export default Services;