import React, { createContext, useEffect } from 'react';
import ReactGA from 'react-ga4';

const GAContext = createContext({
  trackEvent: (event: any) => {}
});

const debugMode = true;

const GAProvider = ({ children, trackingId }: any) => {
  const isGAInitialized = ReactGA.isInitialized;

  useEffect(() => {
    if (!isGAInitialized) {
      ReactGA.initialize(trackingId, {
        gaOptions: {
          debug_mode: debugMode
        },
        gtagOptions: {
          debug_mode: debugMode
        }
      });
    }
    return () => {
      ReactGA.reset();
    };
  }, [isGAInitialized, trackingId]);

  const trackEvent = (event: any) => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      title: window.location.pathname
    });

    // Send a custom event
    ReactGA.event({
      category: event.category,
      action: event.action
    });
  };

  return <GAContext.Provider value={{ trackEvent }}>{children}</GAContext.Provider>;
};

export { GAContext, GAProvider };