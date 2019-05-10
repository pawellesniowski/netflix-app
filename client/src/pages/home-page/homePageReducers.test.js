import reducer from './homePageReducers';
import * as types from './homePageConstants';
import moviesMock from "../../../__mocks__/moviesMock";
import {SORT_MOVIES} from "./homePageConstants";

const initialState = {
    movies: [],
    loading: false,
    sortedBy: '',
};

describe('HomePage reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should handle LOADING_MOVIES', () => {
        const action = {
            type: types.LOADING_MOVIES,
            payload: true,
        };
        expect(reducer(undefined, action)).toEqual({
            movies: [],
            loading: true,
            sortedBy: '',
        });
    });
    it('should handle FETCH_MOVIES', () => {
        const action = {
            type: types.FETCH_MOVIES,
            payload: moviesMock,
        };
        expect(reducer(undefined, action)).toEqual({
            movies: moviesMock,
            loading: false,
            sortedBy: '',
        });
    });
    it('should handle SORT_MOVIES', () => {
        const action = {
            type: types.SORT_MOVIES,
            payload: 'title',
        };
        expect(reducer(undefined, action)).toEqual({
            movies: [],
            loading: false,
            sortedBy: 'title',
        });
    });
});
