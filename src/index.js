import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter
} from 'react-router-dom';
import './css/styles.css';
import Router from './components/Router';



ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();