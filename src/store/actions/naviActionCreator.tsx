import { NAVI_ACTION } from './actionTypes';
import { ActionCreator, Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


import Zodiacs from '../../models/ZodiacEnum';

export interface NaviActionData {
    destination: string,
    zodiac?: string
}

/**
 * Create an action object which, when dispatched, will be caught and handled by the navi reducer 
 * @param data is an object with keys: destination, zodiac
 */
export const naviActionCreator = (data: NaviActionData) => {
    // return {
    //     type: NAVI_ACTION,
    //     data: data
    // };

    return (dispatch: any) => {
         return dispatch({
            type: NAVI_ACTION,
            data: data
        });
    };
}

