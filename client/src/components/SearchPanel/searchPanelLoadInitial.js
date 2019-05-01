const LOAD_INITIAL = 'SearchPanel: loading initial values for form';

const loadInitialReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_INITIAL:
            return {
                data: action.data,
            };
        default:
            return state;
    }
};

export const loadInitial = data => ({ type: LOAD_INITIAL, data });

export default loadInitialReducer;
