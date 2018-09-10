export const SET_CURRENT_POEM = 'SET_CURRENT_POEM';
export function setCurrentPoem(poem) {
  return {
    type: SET_CURRENT_POEM,
    poem
  };
}

export const CLEAR_CURRENT_POEM = 'SET_CURRENT_POEM';
export function clearCurrentPoem(poem) {
  return {
    type: CLEAR_CURRENT_POEM
  };
}

