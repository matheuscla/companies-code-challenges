import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from './ducks/auth';
import users from './ducks/users';

const rootReducer = combineReducers({
  auth,
  users
});

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, {}, componseEnhancers(applyMiddleware(thunk)));