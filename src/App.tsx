import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { Navigation } from './Navigation';
import ReactGA from "react-ga4";
import { GAProvider } from './context/AnalyticsContext';

const TRACKING_ID = "G-**********";
ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      debug_mode: true
    },
    gtagOptions: {
      debug_mode: true
    }
  });

const App = () => { 
    return (
    <GAProvider>
      <Router>
          <div>
              <Navigation />
              <Routes />
          </div>
      </Router>
    </GAProvider>
)};
export default App;