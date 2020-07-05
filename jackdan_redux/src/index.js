import App from './view/App/index';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));
