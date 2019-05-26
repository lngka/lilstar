import { TEST_ACTION } from './actionTypes';
import { ActionCreator, Action } from 'redux';

export const testActionCreator: ActionCreator<Action> = () => {
    return {
        type: TEST_ACTION
    };
}

