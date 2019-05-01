import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './app/store/configureStore';
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
