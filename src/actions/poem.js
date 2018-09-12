import {API_BASE_URL} from '../config';

export const SET_CURRENT_POEM = 'SET_CURRENT_POEM';
export function setCurrentPoem(poem) {
  return {
    type: SET_CURRENT_POEM,
    poem
  };
}

export const CLEAR_CURRENT_POEM = 'CLEAR_CURRENT_POEM';
export function clearCurrentPoem() {
  return {
    type: CLEAR_CURRENT_POEM
  };
}

export const OPEN_POEM = 'OPEN_POEM';
export function openPoem(poem) {
  return {
    type: OPEN_POEM,
    poem
  };
}

export const CLOSE_POEM = 'CLOSE_POEM';
export function closePoem() {
  return {
    type: CLOSE_POEM
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
export function savePoemError(err) {
  return {
    type: SAVE_POEM_ERROR,
    err
  };
}

export const FETCH_POEM_FROM_DB_REQUEST = 'FETCH_POEM_FROM_DB_REQUEST';
export function fetchPoemFromDBRequest() {
  return {
    type: FETCH_POEM_FROM_DB_REQUEST
  };
}

export const FETCH_POEM_FROM_DB_SUCCESS = 'FETCH_POEM_FROM_DB_SUCCESS';
export function fetchPoemFromDBSuccess(poems) {
  return {
    type: FETCH_POEM_FROM_DB_SUCCESS,
    poems
  };
}

export const FETCH_POEM_FROM_DB_ERROR = 'FETCH_POEM_FROM_DB_ERROR';
export function fetchPoemFromDBError(err) {
  return {
    type: FETCH_POEM_FROM_DB_ERROR,
    err
  };
}

export const fetchPoemsFromDB = () => dispatch => {
  dispatch(fetchPoemFromDBRequest());
   fetch(`${API_BASE_URL}/poems`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((poems) =>{
      dispatch(fetchPoemFromDBSuccess(poems));
    })
    .catch(err => {
      dispatch(fetchPoemFromDBError(err));
    })
};



export const savePoemToDB = (newPoem) => dispatch => {
  dispatch(savePoemRequest());
   fetch(`${API_BASE_URL}/poems`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newPoem), // body data type must match "Content-Type" header
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
