import * as actions from '../actions/poem';

const initialState = {
    magnets : []
}


export const magnetReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.ADD_MAGNET:
      return {...state, magnets: [...state.magnets, action.magnet]};
    default: 
      return state;
  }
};