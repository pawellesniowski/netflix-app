import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {getStoredState, persistCombineReducers} from 'redux-persist';
import {CookieStorage, NodeCookiesWrapper} from 'redux-persist-cookie-storage';
import reducers from './client/src/app/reducers/rootReducer';
import Cookies from 'cookies';
import App from "./client/src/components/App/App";
// import { Hell } from './client/src/components/helloWorld';
import {StaticRouter as Router, matchPath} from 'react-router-dom';
import {routes} from "./client/src/app/routes";

const PORT = 9091;
const app = express();

app.use((req, res, next) => {
    const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));

    const persistConfig = {
        key: 'root',
        storage: new CookieStorage(cookieJar),
        stateReconciler(inboundState, originalState) {
            return originalState;
        }
    };
    let preloadedState;
    try {
        // preloadedState = await getStoredState(persistConfig);
        preloadedState = {};
    } catch (e) {
        preloadedState = {};
    }

    const rootReducer = persistCombineReducers(persistConfig, reducers);
    req.reduxStore = createStore(rootReducer, preloadedState);
    res.removeHeader('Set-Cookie');
    next();
});

app.get('/*', (req, res) => {
    const promises = [];
    const context = {};

    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) promises.push(route.loadData(match));
        return match;
    });

    Promise.all(promises).then(data => {

    });

    const markup = renderToString(
        <Provider store={req.reduxStore || {}}>
            <Router
                location={req.url}
                context={context}
            >
                <App/>
            </Router>
        </Provider>
    );

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.send(`
    <html lang="">
    <head>...</head>
    <body>
        ${markup}
    </body>
    </html>
    `);
    }

});

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
});
