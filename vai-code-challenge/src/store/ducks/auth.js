export const Types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN'
}

export const logout = () => dispatch => {
  return dispatch({ type: Types.LOGOUT });
}

export const login = () => dispatch => {
  return dispatch({ type: Types.LOGIN });
}

const INITITAL_STATE = {
  logged: false
}

export default function(state=INITITAL_STATE, action) {
  switch(action.type) {
    case Types.LOGOUT:
      return { ...state, logged: false };
    case Types.LOGIN:
      return { ...state, logged: true };  
    default:
      return state;
  }
}