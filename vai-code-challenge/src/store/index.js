import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from './ducks/auth';
import users from './ducks/users';
import languages from './ducks/languages';

const rootReducer = combineReducers({
  auth,
  users,
  languages
});

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, {}, componseEnhancers(applyMiddleware(thunk)));