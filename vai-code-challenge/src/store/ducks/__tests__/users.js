import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import usersReducer, { fetchUsers, Types, removeUser, fetchUser, editUser } from '../users';
import users from '../users';

const middlewares = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

describe('Users actions', () => {
  afterEach(() => {
    mockAxios.restore();
  });

  it('should create an action to fetch users', () => {
    mockAxios.onGet('https://randomuser.me/api/?results=16&nat=US').reply(200, [
      {
        email: 'user@example',
        gender: 'male',
        nat: 'US'
      }
    ]);
    
    const expectedAction = {
      type: Types.FETCH_USERS,
      payload: [{
        email: 'user@example',
        gender: 'male',
        nat: 'US'
      }]
    };

    const store = mockStore({   
      list: [],
      selectedUser: null,
      loading: true
    });

    store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('should create an action to remove user', () => {
    const expectedAction = {
      type: Types.REMOVE_USER,
      payload: 1
    };

    const store = mockStore({   
      list: [],
      selectedUser: null,
      loading: true
    });

    store.dispatch(removeUser(1));

    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should create an action to fetch an user', () => {
    const expectedAction = {
      type: Types.FETCH_USER,
      payload: 1
    };

    const store = mockStore({   
      list: [],
      selectedUser: null,
      loading: true
    });

    store.dispatch(fetchUser(1));

    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should create an action to edit user', () => {
    const expectedAction = {
      type: Types.EDIT_USER,
      payload: { name: 'user', email: 'user@example.com' }
    };

    const store = mockStore({   
      list: [],
      selectedUser: null,
      loading: true
    });

    store.dispatch(editUser({ name: 'user', email: 'user@example.com' }));

    expect(store.getActions()).toEqual([expectedAction]);
  });
});

describe('Users reducer', () => {
  afterEach(() => {
    mockAxios.restore();
  });

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({
      list: [],
      selectedUser: null,
      loading: true
    });
  });

  it('should handle Types.FETCH_USERS', () => {
    expect(usersReducer(undefined, { type: Types.FETCH_USERS, payload: [{ name: 'user', email: 'user@example.com' }]}))
      .toEqual({
        list: [{ name: 'user', email: 'user@example.com'}],
        loading: true,
        selectedUser: null
      });
  });

  it('should handle Types.REMOVE_USER', () => {
    expect(usersReducer({ list: [{ name: 'user1', login: { uuid: 1 }}, { name: 'user2', login: { uuid: 2 }}]}, { type: Types.REMOVE_USER, payload: 1 }))
      .toEqual({
        list: [{ name: 'user2', login: { uuid: 2 }}]
      });
  });

  it('should handle Types.FETCH_USER', () => {
    expect(usersReducer({ list: [{ name: 'user1', login: { uuid: 1 }}, { name: 'user2', login: { uuid: 2 }}]}, { type: Types.FETCH_USER, payload: 1 }))
      .toEqual({
        list: [{ name: 'user1', login: { uuid: 1 }}, { name: 'user2', login: { uuid: 2 }}],
        selectedUser: { name: 'user1', login: { uuid: 1 }}
      });
  });

  it('should handle Types.EDIT_USER', () => {
    expect(usersReducer({ selectedUser: { name: 'User1', email: 'user1@example.com' }}, { type: Types.EDIT_USER, payload: { name: 'User2', email: 'user2@example.com' }}))
      .toEqual({
        selectedUser: { name: 'User2', email: 'user2@example.com'}
      });
  });

  it('should handle Types.SET_LOADING', () => {
    expect(usersReducer(undefined, { type: Types.SET_LOADING, payload: false }))
      .toEqual({
        list: [],
        selectedUser: null,
        loading: false
      });
  })
});