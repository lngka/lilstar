import { createStore, combineReducers, compose, applyMiddleware, StoreEnhancer  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import testReducer from './reducers/test';

// "slides" of the store combined
const rootReducer = combineReducers({
    testStore: testReducer
});

// use composeWithDevTools for redux-devtools in DEV mode
/* if (__DEV__) {
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
}*/
let composeEnhancers: any;
if (__DEV__)
    composeEnhancers = composeWithDevTools;
else
    composeEnhancers = compose;



const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;