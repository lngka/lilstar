import { TEST_ACTION } from '../actions/actionTypes';
import { Action } from 'redux';


/**
 * Example state for test reducer
 */
type State = {
    testState: boolean
}

const initialState: State = {
    testState : false
};

const reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case TEST_ACTION: 
            return {
                ...state,
                testState: !state.testState
            };
        default:
            return state;
    }
}; 

export default reducer;