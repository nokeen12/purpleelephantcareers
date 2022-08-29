import { useEffect } from "react";

function Booking(){
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return(
        <div>
            booking page
            {/* <!-- Calendly inline widget begin --> */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/kellimcarroll?hide_landing_page_details=1"></div>
            {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
            {/* <!-- Calendly inline widget end --> */}
        </div>
    )
}
export default Booking;