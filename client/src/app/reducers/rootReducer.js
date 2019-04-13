import { combineReducers } from 'redux';
import homePageReducer from '../../pages/home-page/homePageReducers';


const reducers = {
    homePage: homePageReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
