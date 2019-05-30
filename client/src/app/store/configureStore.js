import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import reducers from '../reducers/rootReducer';
import { persistStore, persistCombineReducers  } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';

const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies),
};

const rootReducer = persistCombineReducers(persistConfig, reducers);


export const reduxStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));
export const reduxPersistor = persistStore(reduxStore, {});
