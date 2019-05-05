import {
    LOADING_MOVIES,
    FETCH_MOVIES,
    SORT_MOVIES,
} from './homePageConstants';
import { sortingFunction } from '../../common/methods';

const initialState = {
    movies: [],
    loading: false,
    sortedBy: '',
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_MOVIES:
            return {...state, loading: action.payload};
        case FETCH_MOVIES:
            return {...state, movies: action.payload};
        case SORT_MOVIES:
            const sortBy = action.payload;
            const sortedMovies = sortingFunction(state.movies, sortBy);
            return {...state, movies: [...sortedMovies], sortedBy: sortBy};
        default:
            return state;
    }
};

export default homePageReducer;