import * as actions from '../actions/magnet';

const initialState = {
    magnets : {}
}

export const magnetReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.ADD_MAGNET:
      return {...state, magnets: {...state.magnets, [action.id] : action.magnet}};
      case actions.CHANGE_MAGNET_LOCATION:
      return {...state, magnets: {...state.magnets, [action.id] : action.magnet}};
    default: 
      return state;
  }
};