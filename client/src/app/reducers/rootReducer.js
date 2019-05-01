import { combineReducers } from 'redux';
import homePageReducer from '../../pages/home-page/homePageReducers';
import detailsPageReducer from '../../pages/details-page/detailsPageReducers';
import { reducer as formReducer } from 'redux-form'
import loadInitialReducer from "../../components/SearchPanel/searchPanelLoadInitial";


const reducers = {
    homePage: homePageReducer,
    detailsPage: detailsPageReducer,
    form: formReducer,
    formInitial: loadInitialReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
