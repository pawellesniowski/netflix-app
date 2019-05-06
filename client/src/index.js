import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import configureStore from './app/store/configureStore';
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

const store =  configureStore().store;
const persistor =  configureStore().persistor;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
