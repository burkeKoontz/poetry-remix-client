import * as actions from '../actions/poem';

const initialState = {
    editingPoem : null, // for making/editing a particular poem
    loading : false,
    error : null,
    poems : [], // list of poems on db
    openPoem : null, // for looking at a particular poem (non-editable) 
    userPoems: [],
    saveSuccess: null,
    updateSuccess: null,
    deleteSuccess: null
}

export const poemReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_POEM_SUCCESS:
      return {...state, updateSuccess: true};
    case actions.SAVE_POEM_SUCCESS:
      return {...state, saveSuccess: true};
    case actions.CLEAR_SUCCESS:
      return {...state, saveSuccess: null, updateSuccess: null, deleteSuccess: null};
    case actions.DELETE_POEM_FROM_STATE:
      let newUserPoems = state.userPoems.filter(element => element.id !== action.id)
      return {...state, userPoems: newUserPoems};
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
    case actions.FETCH_USER_POEMS_FROM_DB_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_USER_POEMS_FROM_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.FETCH_USER_POEMS_FROM_DB_SUCCESS:
      return {...state, userPoems: action.poems, loading: false};
    default: 
      return state;
  }
};