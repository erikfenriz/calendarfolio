import React from 'react';
import App from '../App';
// import Api from '../Api';

import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            {/*<Route path="/api" component={Api}/>*/}
        </Switch>
    </BrowserRouter>
);

export default Router;