import {
    LOADING_FILM,
    FETCH_FILM,
    FETCH_SUGGESTED_FILMS,
    SET_FILM_ID,
} from './detailsPageConstants';

const initialState = {
    film: {},
    loadingFilm: false,
    suggestedFilms: [],
};

const detailsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILM_ID:
            return { ...state, filmId: action.payload };
        case LOADING_FILM:
            return { ...state, loadingFilm: action.payload };
        case FETCH_FILM:
            return { ...state, film: action.payload };
        case FETCH_SUGGESTED_FILMS:
            return { ...state,  suggestedFilms: action.payload};
        default:
            return state;
    }
};

export default detailsPageReducer;