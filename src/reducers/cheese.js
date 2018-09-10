import * as actions from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export const cheeseReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CHEESES_REQUEST) {
    return {...state, loading: true};
  } else if (action.type === actions.FETCH_CHEESES_SUCCESS) {
    return {loading: false, cheeses: action.cheeses, error: null};
  } else if (action.type === actions.FETCH_CHEESES_ERROR) {
    return {...state, loading: false, error: action.error}
  } 
  return state;
};