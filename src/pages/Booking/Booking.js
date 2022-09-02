import { useEffect } from "react";
import './Booking.css'
function Booking(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        const script = document.createElement('script');
      
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      
    return(
        <div id="booking">
            <div className="calendly-inline-widget" data-url="https://calendly.com/kellimcarroll?hide_landing_page_details=1"></div>
        </div>
    )
}
export default Booking;