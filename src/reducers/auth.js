import * as actions from '../actions/auth';

const initialState = {
    loading : false,
    error : null,
    currentUser: null,
    authToken : null
}

export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.AUTH_REQUEST:
      return {...state, loading: true};
    case actions.AUTH_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.AUTH_SUCCESS:
      return {...state, currentUser: action.currentUser, loading: false};
    case actions.SET_AUTH_TOKEN:
      return {...state, authToken: action.token};
    case actions.CLEAR_AUTH:
      return {...state, authToken: null, currentUser: null};
    default: 
      return state;
  }
};