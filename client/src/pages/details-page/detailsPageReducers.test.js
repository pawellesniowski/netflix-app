import reducer from './detailsPageReducers';
import * as types from './detailsPageConstants';
import filmsMock from '../../../__mocks__/moviesMock';
import filmMock from '../../../__mocks__/movieMock';

const initialState = {
    film: {},
    loadingFilm: false,
    suggestedFilms: [],
    sortedBy: '',
};

describe('Details page reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should handle LOADING_FILM', () => {
        const action = {
            type: types.LOADING_FILM,
            payload: true,
        };
        expect(
            reducer(undefined, action)
        ).toEqual(
            {
                film: {},
                loadingFilm: true,
                suggestedFilms: [],
                sortedBy: '',
            }
        );
    });
    it('should handle FETCH_FILM', () => {
        const action = {
            type: types.FETCH_FILM,
            payload: filmMock,
        };
        expect(reducer(undefined, action)
        ).toEqual(
            {
                film: filmMock,
                loadingFilm: false,
                suggestedFilms: [],
                sortedBy: '',
            }
        )
    });
    it('should handle FETCH_SUGGESTED_FILMS', () => {
        const action = {
            type: types.FETCH_SUGGESTED_FILMS,
            payload: filmsMock,
        };
        expect(reducer(undefined, action)
        ).toEqual(
            {
                film: {},
                loadingFilm: false,
                suggestedFilms: filmsMock,
                sortedBy: '',
            }
        )
    });
    it('should handle SORT_FILMS', () => {
        const action = {
            type: types.SORT_FILMS,
            payload: 'title',
        };
        expect(reducer(undefined, action)
        ).toEqual(
            {
                film: {},
                loadingFilm: false,
                suggestedFilms: [],
                sortedBy: 'title',
            }
        )
    });

});
