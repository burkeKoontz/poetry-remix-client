import * as actions from '../actions/user';

const initialState = {
    loading : false,
    error : null,
}

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SAVE_USER_TO_DB_REQUEST:
      return {...state, loading: true};
    case actions.SAVE_USER_TO_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.SAVE_USER_TO_DB_SUCCESS:
      return {...state, loading: false};
    default: 
      return state;
  }
};