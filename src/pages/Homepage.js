function Homepage(){
    return(
        <div className="homepage">
            <header className="section one">
                <div className="header left">
                    <h1>Helping You Address The Elephant In Your Career Journey</h1>
                    <p>As a Career Coach and resume writer,  my goal is to help you recognize and show how good you actually are! </p>
                    <button>Book An Appointment</button>
                </div>
                <div className="header right">
                    <div className="square">
                    </div>
                    <img src="headshot.png" alt="kelli carroll" id="kelli"/>
                    <button>Kelli M. Carroll, MS Ed., CCSP</button>
                </div>
            </header>

            <div className="wavyLine">
                <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
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
                        <div>icon</div>
                        <div>text</div>
                        <div>name</div>
                        <div>see more link</div>
                    </div>
                    <div className="block">
                        <div>icon</div>
                        <div>text</div>
                        <div>name</div>
                        <div>see more link</div>
                    </div>
                </div>
                <h2>Still hesitating? Schedule a free consultation!</h2>
                <button>Book An Appointment</button>
            </div>
        </div>
    )
}
export default Homepage;