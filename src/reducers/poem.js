import * as actions from '../actions/poem';

const initialState = {
    editingPoem : null,
    loading : false,
    error : null,
    poems : [],
    openPoem : null
}

export const poemReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.OPEN_POEM:
      return {...state, openPoem: action.poem};
    case actions.CLOSE_POEM:
      return {...state, openPoem: null};
    case actions.SET_CURRENT_POEM:
      return {...state, editingPoem: action.poem};
    case actions.CLEAR_CURRENT_POEM:
      return {...state, editingPoem: null};
    case actions.FETCH_POEM_FROM_DB_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_POEM_FROM_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.FETCH_POEM_FROM_DB_SUCCESS:
      return {...state, openPoem: action.poem, loading: false};
    case actions.FETCH_POEMS_FROM_DB_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_POEMS_FROM_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.FETCH_POEMS_FROM_DB_SUCCESS:
      return {...state, poems: action.poems, loading: false};
    default: 
      return state;
  }
};