import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);

console.log(store.getState());
export default store;
