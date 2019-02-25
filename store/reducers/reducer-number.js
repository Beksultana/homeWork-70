import {ADD_NUMBER, DELETE_CE, DELETE_ONE, EQUALLY} from "../actions/action-number";

const initialState = {
    counter: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NUMBER:
            return {
                counter: state.counter + action.number
            };
        case DELETE_ONE:
            const removedCounter = String(state.counter).substr(0, state.counter.length - 1);
            return {
                counter: removedCounter
            };
        case DELETE_CE:
            return {
                counter: ''
            };
        case EQUALLY:
            const result = eval(state.counter);
            return {
                counter: result
            };
        default:
            return state;
    }
};
export default reducer;