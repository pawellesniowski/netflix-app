import {
    LOADING_FILM,
    FETCH_FILM,
    FETCH_SUGGESTED_FILMS,
    SORT_FILMS,
} from "./detailsPageConstants";

const FetchSuggestedFilms = (suggestedFilms) => ({
    type: FETCH_SUGGESTED_FILMS,
    payload: suggestedFilms,
});

export const fetchSuggestedFilms = (genre) => async (dispatch) => {
    const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies?filter=${genre}`);
    const {data} = await response.json();
    dispatch(FetchSuggestedFilms(data));
};

export const LoadingFilm = (payload) => ({
    type: LOADING_FILM,
    payload,
});

const FetchFilm = (payload) => ({
    type: FETCH_FILM,
    payload,
});

export const fetchFilm = (id) => async (dispatch) => {
    dispatch(LoadingFilm(true));
    try {
        const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        dispatch(FetchFilm(data));
        dispatch(LoadingFilm(false));
        dispatch(fetchSuggestedFilms(data.genres[0]));
    } catch (error) {
        console.log(error);
    }
};

export const SortFilms = (sortBy) => ({
    type: SORT_FILMS,
    payload: sortBy,
});
