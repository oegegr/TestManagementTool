'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import 'bootstrap';
import 'react-bootstrap';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import Main from './components/Main';
import LoginPage from './components/LoginPage';
import rootReducer from './reducers/rootReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
), autoRehydrate());

persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

