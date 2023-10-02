import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";

export const Navigation = () => {
    const location = useLocation();

    useEffect(() => {
        const TRACKING_ID = "G-**********";
        ReactGA.initialize(TRACKING_ID, {
            gaOptions: {
              debug_mode: true
            },
            gtagOptions: {
              debug_mode: true
            }
          });
        ReactGA.send({
            hitType: "pageview", 
            page: window.location.pathname + window.location.search, 
            title: window.location.pathname + window.location.search 
        });

    },[location.pathname])

    return (
    <nav>
        <ul>
            <li>
                <Link to="/">First page</Link>
            </li>
            <li>
                <Link to="/second">Second Page</Link>
            </li>
            <li>
                <Link to="/third">Third page</Link>
            </li>
        </ul>
    </nav>
)};