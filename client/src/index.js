import React from 'react';
import {hydrate} from 'react-dom';
import App from './components/App/App';
import Provider from "react-redux/es/components/Provider";
import {reduxPersistor, reduxStore} from "./app/store/configureStore";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter as Router} from 'react-router-dom';

hydrate(
    <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={reduxPersistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
