import React from 'react';
import App from '../App';
// import NotFound from "./NotFound";

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    </BrowserRouter>
);

export default Router;