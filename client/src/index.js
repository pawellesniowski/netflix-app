import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './app/store/configureStore';
import Provider from "react-redux/es/components/Provider";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
