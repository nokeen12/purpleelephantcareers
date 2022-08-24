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