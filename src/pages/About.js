import { Link } from "react-router-dom";

function About(){
    return(
        <div id='about'>
            <h2>About Kelli</h2>
            <div>
                <img src="kelli2.png" alt="kelli standing"/>
                <p>     Kelli has earned a reputation in the careers industry for ushering in a new generation of leaders focused on excellence in resume writing and career management. In addition to her nearly decade of resume writing experience for clients at all levels, she also serves as an executive recruiter for a national firm and Career Services Manager for an EdTech Bootcamp program. Before that, Kelli’s early career included working as a technical recruiter and HR administrator.
                <br/><br/>
                She earned her Bachelor of Arts in Communications and Public Relations at Claflin University, the oldest HBCU in South Carolina, before completing her Master of Science from the University of Miami.
                <br/><br/>
                Kelli currently serves as President-Elect for the Florida Career Development Association and is an active member of the Career Thought Leaders Consortium, the society of Elite Resume Writers, and several other industry-leading organizations.
                </p>
            </div>
            <div>
                <p>     As the daughter of a well-established, Career Counselor, Kelli M. Carroll has been immersed in the Career Development world for most of her life. Currently serving as the Career Coach at Ironhack US, a tech bootcamp school based in Spain, Kelli helps career changers with the soft skills needed to land a new career tech. She recently received her CCSP and will have her ACRW certification by year end.
                <br/><br/>
                Originally from Odenton, MD, Kelli graduated with her BA in Mass Communications-Public Relations from Claflin University, and her MS Ed. In Sports Administration from The University of Miami. Kelli is an active member of Delta Sigma Theta Sorority, Inc. as well as the Claflin University Young Alumni Council. In her free time, she enjoys hanging out with friends and playing with her fur baby, a 7-yr-old Pitador named Tesla.
                </p>
                <img src="kelli1.png" alt="kelli with dog"/>
            </div>
            <h2>Why Hesitate? Schedule A Free Consultation Now!</h2>
            <Link to="/booking" className="button three">BOOK AN APPOINTMENT</Link>
        </div>
    )
}
export default About;