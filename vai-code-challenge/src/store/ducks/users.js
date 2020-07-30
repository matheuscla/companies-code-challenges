import axios from 'axios';

// Types
const Types = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USER: 'FETCH_USER',
  EDIT_USER: 'EDIT_USER',
  REMOVE_USER: 'REMOVE_USER'
}

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=16');

    return dispatch({ type: Types.FETCH_USERS, payload: data.results });
  } catch(e) {
    console.log(e);
  }
}

export const removeUser = id => dispatch => {
  return dispatch({ type: Types.REMOVE_USER, payload: id });
}

export const fetchUser = (id) => dispatch => {
  return dispatch({ type: Types.FETCH_USER, payload: id });
}

export const editUser = user => dispatch => {
  return dispatch({ type: Types.EDIT_USER, payload: user });
}

const INITIAL_STATE = {
  list: [],
  selectedUser: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.FETCH_USERS:
      return { ...state, list: action.payload };
    case Types.FETCH_USER:
      return {
        ...state,
        selectedUser: state.list.find(user => user.login.uuid === action.payload) || null
      };
    case Types.EDIT_USER:
      return {
        ...state,
        selectedUser: { ...state.selectedUser, ...action.payload }
      };
    case Types.REMOVE_USER:
      return {
        ...state,
        list: state.list.filter(user => user.login.uuid !== action.payload)
      };
    default:
      return state; 
  }
}