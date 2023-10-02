import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import useTimeOnPageTracker from "../hooks/useTimeTracker";

const First = () => {
    const TRACKING_ID = "G-**********";
    ReactGA.initialize(TRACKING_ID, {
        gaOptions: {
          debug_mode: true
        },
        gtagOptions: {
          debug_mode: true
        }
    });
    
    useTimeOnPageTracker("First"+window.location.pathname)

    return <div>First Page</div>
}

export default First;