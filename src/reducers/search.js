import * as actions from '../actions/search';
import SearchForm from '../components/SearchForm';

const initialState = {
    poems: [],
    loading: false,
    error: null,
    searchTerm: null,
    searchFormExtended: false
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
    case actions.TOGGLE_SEARCHFORM:
      const toggled = state.searchFormExtended ? false : true;
      return {...state, searchFormExtended: toggled};
    default: 
      return state;
  }
};
