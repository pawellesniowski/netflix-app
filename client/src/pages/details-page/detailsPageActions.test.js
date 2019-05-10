import * as actions from './detailsPageActions';
import * as types from './detailsPageConstants';

// Sync actions:
describe('Actions', () => {
    it('should create an action to LoadingFilm', () => {
        const payload = 'true';
        const expectedAction = {
            type: types.LOADING_FILM,
            payload
        };
        expect(actions.LoadingFilm(payload)).toEqual(expectedAction)
    });
    it('should create an action to SortFilms', () => {
        const payload = 'Title';
        const expectedAction = {
            type: types.SORT_FILMS,
            payload
        };
        expect(actions.SortFilms(payload)).toEqual(expectedAction);
    });
});

// Async actions:
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import filmsMock from '../../../__mocks__/moviesMock';
import filmMock from '../../../__mocks__/movieMock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('fetchSuggestedFilms creates action when fetching is done', () => {
        fetchMock.getOnce(`https://reactjs-cdp.herokuapp.com/movies?filter=${'drama'}`, {
            body: {data: filmsMock},
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: types.FETCH_SUGGESTED_FILMS,
                payload: filmsMock,
            }
        ];
        const store = mockStore({suggestedFilms: []});
        return store.dispatch(actions.fetchSuggestedFilms('drama')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('fetchFilm creates actions when fetching is done', () => {
        fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies/123', {
            body: filmMock,
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: types.LOADING_FILM,
                payload: true,
            },
            {
                type: types.FETCH_FILM,
                payload: filmMock,
            },
            {
                type: types.LOADING_FILM,
                payload: false,
            },
        ];
        const store = mockStore({film: {}});
        return store.dispatch(actions.fetchFilm('123')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

});
