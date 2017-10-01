'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';


ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={Main} />
    </BrowserRouter>,
    document.getElementById('app')
);



