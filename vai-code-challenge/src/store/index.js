import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';

const rootReducer = combineReducers({
  auth,
});

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, {}, componseEnhancers(applyMiddleware(thunk)));