import { Link } from "react-router-dom";
import './AboutPE.css'
function AboutPE(){
    return(
        <div id="aboutPE">
            <h2>About Purple Elephant</h2>
            <div>
                <img src="aboutpe1.png" alt="man reading newspaper"/>
                <p>
                Purple Elephant Careers, LLC. was created in April 2022 by Kelli M. Carroll. The idea for the company came to her while at the 2022 Career Thought Leaders Symposium in Philadelphia, PA. Feeling inspired and encouraged by her Career Thought Leader Colleagues, Kelli decided to take the plunge and start her own company.
                </p>
            </div>
            <div>
                <img src="aboutpe2.png" alt="woman using laptop"/>
                <p>
                Purple Elephant Careers was born out of a desire to support the “Ennial” generations - Xennials, Millennials, and Zillennials – specifically of color. As a Millennial, Kelli noticed the lack of career support from others for her generation, as well as the constant bashing of the “ennials” on the internet.
                </p>
            </div>
            <div>
                <img src="aboutpe3.png" alt="woman using laptop"/>
                <p>
                The name Purple Elephant comes from Kelli’s love for purple and elephants. Purple is the color of royalty and is known to uplift, enlighten, inspire, and encourage. Elephant’s symbolize strength, good fortune, and happiness. They are sturdy animals known for their fortitude on long journeys. The career journey is one that is long and requires strength, fortitude, encouragement, and more. However, when you reach the peak, you receive good fortune, happiness, and your spirit is uplifted, enlightened and inspired.
                </p>
            </div>
            <h2>Why Hesitate? Schedule A Free Consultation Now!</h2>
            <Link to="/booking" className="button three">BOOK AN APPOINTMENT</Link>
        </div>
    )
}
export default AboutPE;