import { Link } from "react-router-dom";

function Services(){
    return(
        <div id="services">
            <h2>Services</h2>
            <div id="serviceSection">
                <div className="serviceBlock">
                    <img src="writing.png" alt="writing" />
                    <div className="serviceHover">Writing</div>
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
                    <div className="serviceHover">Coaching</div>
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
            <Link to="/booking" className="button three">BOOK AN APPOINTMENT</Link>
        </div>
    )
}
export default Services;