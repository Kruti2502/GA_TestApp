import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import useTimeOnPageTracker from "../hooks/useTimeTracker";

const Second = () => {
  const TRACKING_ID = "G-**********";
  ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        debug_mode: true
      },
      gtagOptions: {
        debug_mode: true
      }
  });

  useTimeOnPageTracker(window.location.pathname)

  return <div>Second Page</div>
}

export default Second;