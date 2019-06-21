import { NAVI_ACTION } from './actionTypes';
import { ActionCreator, Action } from 'redux';

import Zodiacs from '../../models/ZodiacEnum';

export interface NaviActionData {
    destination: string,
    zodiac?: Zodiacs
}

/**
 * Create an action object which, when dispatched, will be caught and handled by the navi reducer 
 * @param data is an object with keys: destination, zodiac
 */
export const naviActionCreator: ActionCreator<Action> = (data: NaviActionData) => {
    return {
        type: NAVI_ACTION,
        data: data
    };
}

