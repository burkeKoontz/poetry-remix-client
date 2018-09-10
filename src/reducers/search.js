import * as actions from '../actions/search';

const initialState = {
    poems: [],
    loading: false,
    error: null
}

export const searchReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_POEMS_REQUEST) {
    return {...state, loading: true};
  } else if (action.type === actions.FETCH_POEMS_SUCCESS) {
    return {loading: false, poems: action.poems, error: null};
  } else if (action.type === actions.FETCH_POEMS_ERROR) {
    return {...state, loading: false, error: action.error}
  } 
  return state;
};