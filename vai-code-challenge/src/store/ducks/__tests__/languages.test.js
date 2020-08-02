import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import languageReducer, { setLanguage, Types } from '../languages';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Languages actions', () => {
  it('should create an action to set language', () => {
    const expectedAction = {
      type: Types.SET_LANGUAGE,
      payload: 'BR'
    };

    const store = mockStore({ selected: 'US' });

    store.dispatch(setLanguage('BR'));

    expect(store.getActions()).toEqual([expectedAction]);
  });
});

describe('Languages reducer', () => {
  it('should return the initial state', () => {
    expect(languageReducer(undefined, {})).toEqual({ selected: 'US' });
  });

  it('should handle Types.SET_LANGUAGE', () => {
    expect(languageReducer(undefined, { type: Types.SET_LANGUAGE, payload: 'BR' }))
      .toEqual({ selected: 'BR' });
  });
});