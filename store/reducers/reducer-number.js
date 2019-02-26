import {ADD_NUMBER, DELETE_CE, DELETE_ONE, EQUALLY} from "../actions/action-number";

const initialState = {
    counter: '',
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                counter: state.counter + action.number
            };
        case DELETE_ONE:
            const removedCounter = String(state.counter).substr(0, state.counter.length - 1);
            return {
                ...state,
                error: null,
                counter: removedCounter
            };
        case DELETE_CE:
            return {
                ...state,
                error: null,
                counter: ''
            };
        case EQUALLY:
            try {
                const result = eval(state.counter);
                return {
                    ...state,
                    counter: result
                };
            }catch (e) {
                return {
                    ...state,
                    error: 'Error'
                }
            }
        default:
            return state;
    }
};
export default reducer;