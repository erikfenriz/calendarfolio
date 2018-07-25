import React from 'react';
import App from '../App';
// import NotFound from "./NotFound";
import Calendar from "./Calendar";
import Contact from "./Contact";

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
);

export default Router;