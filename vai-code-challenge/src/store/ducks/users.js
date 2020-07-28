import axios from 'axios';

// Types
const Types = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USER: 'FETCH_USER'
}

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=16');

    return dispatch({ type: Types.FETCH_USERS, payload: data.results });
  } catch(e) {
    console.log(e);
  }
}

export const fetchUser = (id) => dispatch => {
  return dispatch({ type: Types.FETCH_USER, payload: id });
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
      }  ;
    default:
      return state; 
  }
}