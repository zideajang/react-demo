import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import log from '../middleware/log'

const initialState = {};
const middleware = [thunk,log];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ 
    ));

export default store;