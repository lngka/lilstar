/**
 * The action creator creates action object (with data if required)
 * the action object is then passed to dispatch function.
 * Mostly used in screens, when a button is clicked, to dispatch an action
 */

export { testActionCreator } from './test';

/**
 * Create an action object which, when dispatched, will be caught and handled by the navi reducer 
 * @param data is an object with keys: destination, zodiac
 */
export { naviActionCreator } from './naviActionCreator';