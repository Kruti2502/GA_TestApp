import { Route, Switch } from 'react-router-dom';
import  First  from './components/First';
import  Second  from './components/Second';
import  Third  from './components/Third';
import React from 'react';

export const Routes = () => (
    <Switch>
        <Route path="/third">
            <Third />
        </Route>
        <Route path="/second">
            <Second />
        </Route>
        <Route path="/">
            <First />
        </Route>
    </Switch>
);