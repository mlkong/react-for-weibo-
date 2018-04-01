import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import $ from'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/main.css'
import './assets/js'

import rootReducer from './reducers/index';
import * as actionCreators from './actions/index';
import Login from './components/login/login'
import appIndex from './components/index/index'
import registerServiceWorker from './registerServiceWorker';

// create store with middlewares
const store = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
)(createStore)(rootReducer);

// create root component based on component Deskmark
const LoginC = connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch),
    })
)(Login);

const Index = connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch),
    })
)(appIndex);

// render root conponent with store to DOM container
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/login" component={LoginC}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
