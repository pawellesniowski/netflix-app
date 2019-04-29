import {
    LOADING_MOVIES,
    FETCH_MOVIES,
} from './homePageConstants';

const initialState = {
    movies: [],
    loading: false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_MOVIES:
            return { ...state, loading: action.payload };
        case FETCH_MOVIES:
            return { ...state, movies: action.payload };
        default:
            return state;
    }
};

export default homePageReducer;