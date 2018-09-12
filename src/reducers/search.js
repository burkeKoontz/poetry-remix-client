import * as actions from '../actions/search';

const initialState = {
    poems: [],
    loading: false,
    error: null,
    searchTerm: null,
    searchFormExtended: false,
    searching: false
}

export const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POEMS_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_POEMS_SUCCESS:
      return {...state, loading: true, poems: action.poems};
    case actions.FETCH_POEMS_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.SET_SEARCHTERM: 
      return {...state, searchTerm: action.searchTerm};
    case actions.CLEAR_SEARCHING: 
      return {...state, searching: false};
    case actions.START_SEARCHING: 
      return {...state, searching: true};
    case actions.TOGGLE_SEARCHFORM:
      return {...state, searchFormExtended: state.searchFormExtended ? false : true};
    default: 
      return state;
  }
};
