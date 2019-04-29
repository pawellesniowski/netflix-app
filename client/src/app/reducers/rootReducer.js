import { combineReducers } from 'redux';
import homePageReducer from '../../pages/home-page/homePageReducers';
import detailsPageReducer from '../../pages/details-page/detailsPageReducers';


const reducers = {
    homePage: homePageReducer,
    detailsPage: detailsPageReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
