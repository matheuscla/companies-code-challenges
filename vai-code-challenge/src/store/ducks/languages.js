import { fetchUsers } from './users';

const Types = {
  'SET_LANGUAGE': 'SET_LANGUAGE'
}

export const setLanguage = language => async (dispatch) => {
  await dispatch({ type: Types.SET_LANGUAGE, payload: language });

  return dispatch(fetchUsers());
}

const INITIAL_STATE = {
  selected: 'US'
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.SET_LANGUAGE:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}