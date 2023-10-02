import { useEffect } from "react";

const useTimeOnPageTracker = (pageName) => {
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const timeOnPageInSeconds = (currentTime - startTime) / 1000;

      // Send a custom event to Google Analytics with the time on page
      window.gtag("event", "TimeOnPage", {
        event_category: "Page Interaction",
        event_label: "Time on Page",
        event_label1: pageName,
        value: timeOnPageInSeconds,
      });
    }, 10000); // Send the time on page every 10 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useTimeOnPageTracker;