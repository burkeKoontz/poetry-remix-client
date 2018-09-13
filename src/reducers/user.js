import * as actions from '../actions/user';

const initialState = {
    loading : false,
    error : null,
    token : null,
    currentUser : null
}

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SAVE_USER_TO_DB_REQUEST:
      return {...state, loading: true};
    case actions.SAVE_USER_TO_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.SAVE_USER_TO_DB_SUCCESS:
      return {...state, loading: false};
    case actions.LOG_IN_REQUEST:
      return {...state, loading: true};
    case actions.LOG_IN_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.LOG_IN_SUCCESS:
      return {...state, token: action.token, loading: false};
    default: 
      return state;
  }
};