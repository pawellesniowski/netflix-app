import {
    LOADING_MOVIES,
    FETCH_MOVIES,
} from './homePageConstants';

const LoadingMovies = (status) => ({
    type: LOADING_MOVIES,
    payload: status,
});

const FetchMovies = (movies) => ({
    type: FETCH_MOVIES,
    payload: movies
});
export const fetchMovies = () => async (dispatch) => {
    dispatch(LoadingMovies(true));
    try {
        const response = await fetch("https://reactjs-cdp.herokuapp.com/movies");
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const { data } = await response.json();
        dispatch(FetchMovies(data));
        dispatch(LoadingMovies(false));
    } catch (error) {
        console.log(error)
    }

};
