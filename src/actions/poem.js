import {API_BASE_URL} from '../config';

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

export const SAVE_POEM_REQUEST = 'SAVE_POEM_REQUEST';
export function savePoemRequest() {
  return {
    type: SAVE_POEM_REQUEST
  };
}

export const SAVE_POEM_SUCCESS = 'SAVE_POEM_SUCCESS';
export function savePoemSuccess() {
  return {
    type: SAVE_POEM_SUCCESS
  };
}

export const SAVE_POEM_ERROR = 'SAVE_POEM_ERROR';
export function savePoemError() {
  return {
    type: SAVE_POEM_ERROR
  };
}

export const savePoemToDB = (stateOfPoem) => dispatch => {
  const data = 'some data';
  dispatch(savePoemRequest());
   fetch(`${API_BASE_URL}/poems`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
})
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(() =>{
      // go the home page which lists all public poems
      dispatch(savePoemSuccess());
    })
    .catch(err => {
      dispatch(savePoemError(err));
    })
};
