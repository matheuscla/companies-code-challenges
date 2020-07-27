import axios from 'axios';

// Types
const Types = {
  FETCH_USERS: 'FETCH_USERS'
}

export const fetchUsers = () => async (dispatch) => {
  try{
    const { data } = await axios.get('https://randomuser.me/api/?results=16');

    return dispatch({ type: Types.FETCH_USERS, payload: data.results });
  } catch(e) {
    console.log(e);
  }
}

const INITIAL_STATE = {
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.FETCH_USERS:
      return { ...state, list: action.payload };
    default:
      return state; 
  }
}