import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Homepage.css'
function Homepage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div>
            <header className="section one">
                <div className="header left">
                    <h1>Helping You Address The Elephant In Your Career Journey</h1>
                    <p>As a Career Coach and resume writer,  my goal is to help you recognize and show how good you actually are! </p>
                    <Link to="/purpleelephantcareers/book" className="button one">BOOK AN APPOINTMENT</Link>
                </div>
                <div className="header right">
                    <div className="square">
                    </div>
                    <img src="./headshot.png" alt="kelli carroll" id="kelli"/>
                    <Link to="/purpleelephantcareers/about" className="button two">Kelli M. Carroll, MS Ed., CCSP</Link>
                </div>
            </header>

            <div className="wavyLine">
                <svg dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shapeFill"></path>
                </svg>
            </div>
            <div className="section two">
                <h2>Kelli is Genuine, Knowledgeable, Efficient, Timely and Honest.</h2>
                <ul>
                    <li>Goes above and beyond with her work</li>
                    <li>Works to build genuine relationships with her clients </li>
                    <li>Provides access to her extensive network and resources</li>
                </ul>
                <h2>Testimonials</h2>
                <div className="testimonials">
                    <div className="block">
                        <div className="blockLeft">
                            <img src="./icons/icon1.png" alt="face" />
                        </div>
                        <div className="blockRight">
                        <p>Kelli has played a huge role in my job search. She has gone beyond my expectations; providing resources, useful pointers, and being a friendly individual you can feel comfortable speaking with. I definitely feel more prepared looking for jobs because of her teachings. Kelli earns my highest recommendations!</p>
                        <p className="name">MAURICIO C.</p>
                        <Link to="/purpleelephantcareers/testimonials" className="seeMore">SEE MORE</Link>
                        </div>
                    </div>
                    <div className="block">
                        <div className="blockLeft">
                            <img src="./icons/icon2.png" alt="face" />
                        </div>
                        <div className="blockRight">
                            <p>Thoughtful, diligent, and supportive are the best words to describe Kelli. She took the time to get to know me as a client and supported me in my search for a career. Kelli is insightful and extremely knowledgeable in her field. I highly recommend Kelli to anyone who wants to explore their options for a more fulfilling career.</p>
                            <p className="name">MICHAEL P.</p>
                            <Link to="/purpleelephantcareers/testimonials" className="seeMore">SEE MORE</Link>
                        </div>
                    </div>
                </div>
                <h2>Still hesitating? Schedule a free consultation!</h2>
                <Link to="/purpleelephantcareers/book" className="button three">BOOK AN APPOINTMENT</Link>
            </div>
        </div>
    )
}
export default Homepage;