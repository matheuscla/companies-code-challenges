import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import authReducer, { logout, login, Types } from '../auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Auth actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('should create an action to login the user', () => {
    const expectedAction = {
      type: Types.LOGIN
    };

    const store = mockStore({ logged: false });

    store.dispatch(login());

    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should create an action to logout the user', () => {
    const expectedAction = {
      type: Types.LOGOUT
    };

    const store = mockStore({ logged: false });

    store.dispatch(logout());
    
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({ logged: false });
  });

  it('should handle Types.LOGIN', () => {
    expect(authReducer(undefined, { type: Types.LOGIN }))
      .toEqual({ logged: true });
  });

  it('should handle Types.LOGOUT', () => {
    expect(authReducer(undefined, { type: Types.LOGOUT }))
      .toEqual({ logged: false });
  });
});