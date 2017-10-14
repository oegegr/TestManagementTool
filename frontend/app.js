'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import LoginPage from './components/LoginPage'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);



