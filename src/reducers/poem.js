import * as actions from '../actions/poem';

const initialState = {
    currentPoem : null
}


export const poemReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_POEM:
      return {...state, currentPoem: action.poem};
    default: 
      return state;
  }
};