import * as actions from './homePageActions';
import * as types from './homePageConstants';


// Sync actions:
describe('HomePage sync actions', () => {
    it('should create an action to SortMovies', () => {
        const expectedAtion = {
            type: types.SORT_MOVIES,
            payload: 'Title',
        };
        expect(actions.SortMovies('Title')).toEqual(expectedAtion);
    })
});

// Async actions:
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import moviesMock from '../../../__mocks__/moviesMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HomePage async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('fetchMovies creates action when fetching is done', () => {
        fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies/search/movies?search=Rambo&searchBy=title', {
            body: {data: moviesMock},
            headers: {'content-type': 'application/json'}
        });
        const exeptedActions = [
            {
                type: types.LOADING_MOVIES,
                payload: true,
            },
            {
                type: types.FETCH_MOVIES,
                payload: moviesMock,
            },
            {
                type: types.LOADING_MOVIES,
                payload: false,
            },
        ];
        const store = mockStore({movies: []});
        return store.dispatch(actions.fetchMovies('/search/movies?search=Rambo&searchBy=title')).then(() => {
            expect(store.getActions()).toEqual(exeptedActions);
        });
    });
});
