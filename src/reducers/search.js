import * as actions from '../actions/search';

const initialState = {
    poems: [],
    loading: false,
    error: null,
    searchTerm: null
}

export const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POEMS_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_POEMS_SUCCESS:
      return {...state, loading: true, poems: action.poems};
    case actions.FETCH_POEMS_ERROR:
      return {...state, loading: false, error: action.error}
    case actions.SET_SEARCHTERM: 
      return {...state, searchTerm: action.searchTerm}
    default: 
      return state;
  }
};
