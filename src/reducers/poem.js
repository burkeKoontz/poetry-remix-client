import * as actions from '../actions/poem';

const initialState = {
    currentPoem : null,
    loading : false,
    error : null,
    poems : null
}


export const poemReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_POEM:
      return {...state, currentPoem: action.poem};
    case actions.FETCH_POEM_FROM_DB_REQUEST:
      return {...state, loading: true};
    case actions.FETCH_POEM_FROM_DB_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.FETCH_POEM_FROM_DB_SUCCESS:
      return {...state, poems: action.poems};
    default: 
      return state;
  }
};