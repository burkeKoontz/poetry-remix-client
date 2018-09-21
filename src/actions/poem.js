import {API_BASE_URL} from '../config';

export const SET_HEIGHT_OF_CURRENT_POEM = 'SET_HEIGHT_OF_POEM';
export function setHeightOfPoem(height) {
  return {
    type: SET_HEIGHT_OF_CURRENT_POEM,
    height
  };
}

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
export function closePoem(poem) {
  return {
    type: CLOSE_POEM,
    poem
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

export const CLEAR_SUCCESS = 'CLEAR_SUCCESS';
export function clearSuccess() {
  return {
    type: CLEAR_SUCCESS
  };
}

export const SAVE_POEM_ERROR = 'SAVE_POEM_ERROR';
export function savePoemError(err) {
  return {
    type: SAVE_POEM_ERROR,
    err
  };
}

export const FETCH_POEMS_FROM_DB_REQUEST = 'FETCH_POEMS_FROM_DB_REQUEST';
export function fetchPoemsFromDBRequest() {
  return {
    type: FETCH_POEMS_FROM_DB_REQUEST
  };
}

export const FETCH_POEMS_FROM_DB_SUCCESS = 'FETCH_POEMS_FROM_DB_SUCCESS';
export function fetchPoemsFromDBSuccess(poems) {
  return {
    type: FETCH_POEMS_FROM_DB_SUCCESS,
    poems
  };
}

export const FETCH_POEMS_FROM_DB_ERROR = 'FETCH_POEMS_FROM_DB_ERROR';
export function fetchPoemsFromDBError(err) {
  return {
    type: FETCH_POEMS_FROM_DB_ERROR,
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
export function fetchPoemFromDBSuccess(poem) {
  return {
    type: FETCH_POEM_FROM_DB_SUCCESS,
    poem
  };
}

export const FETCH_POEM_FROM_DB_ERROR = 'FETCH_POEM_FROM_DB_ERROR';
export function fetchPoemFromDBError(err) {
  return {
    type: FETCH_POEM_FROM_DB_ERROR,
    err
  };
}

export const FETCH_USER_POEMS_FROM_DB_REQUEST = 'FETCH_USER_POEMS_FROM_DB_REQUEST';
export function fetchUserPoemFromDBRequest() {
  return {
    type: FETCH_USER_POEMS_FROM_DB_REQUEST
  };
}

export const FETCH_USER_POEMS_FROM_DB_SUCCESS = 'FETCH_USER_POEMS_FROM_DB_SUCCESS';
export function fetchUserPoemFromDBSuccess(poems) {
  return {
    type: FETCH_USER_POEMS_FROM_DB_SUCCESS,
    poems
  };
}

export const FETCH_USER_POEMS_FROM_DB_ERROR = 'FETCH_USER_POEMS_FROM_DB_ERROR';
export function fetchUserPoemFromDBError(err) {
  return {
    type: FETCH_USER_POEMS_FROM_DB_ERROR,
    err
  };
}

export const DELETE_POEM_FROM_STATE= 'DELETE_POEM_FROM_STATE';
export function deletePoemFromState(id) {
  return {
    type: DELETE_POEM_FROM_STATE,
    id
  };
}

export const DELETE_POEM_FROM_DB_REQUEST = 'DELETE_POEM_FROM_DB_REQUEST';
export function deletePoemFromDBRequest() {
  return {
    type: DELETE_POEM_FROM_DB_REQUEST
  };
}

export const DELETE_POEM_FROM_DB_SUCCESS = 'DELETE_POEM_FROM_DB_SUCCESS';
export function deletePoemFromDBSuccess() {
  return {
    type: DELETE_POEM_FROM_DB_SUCCESS,
  };
}

export const DELETE_POEM_FROM_DB_ERROR = 'DELETE_POEM_FROM_DB_ERROR';
export function deletePoemFromDBError(err) {
  return {
    type: DELETE_POEM_FROM_DB_ERROR,
    err
  };
}

export const UPDATE_POEM_REQUEST = 'UPDATE_POEM_REQUEST';
export function updatePoemRequest() {
  return {
    type: UPDATE_POEM_REQUEST
  };
}

export const UPDATE_POEM_SUCCESS = 'UPDATE_POEM_SUCCESS';
export function updatePoemSuccess() {
  return {
    type: UPDATE_POEM_SUCCESS,
  };
}

export const UPDATE_POEM_ERROR = 'UPDATE_POEM_ERROR';
export function updatePoemError(err) {
  return {
    type: UPDATE_POEM_ERROR,
    err
  };
}

export const deletePoemByID = (id) => dispatch => {
  console.log(id);
  dispatch(deletePoemFromDBRequest());
   fetch(`${API_BASE_URL}/poems/${id}`, {
    method: "DELETE" 
    })
    .then(res => {
      console.log(res);
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return;
    })
    .then(() =>{
      dispatch(deletePoemFromDBSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(deletePoemFromDBError(err));
    })
};

export const fetchPoemsFromDB = () => dispatch => {
  dispatch(fetchPoemsFromDBRequest());
   fetch(`${API_BASE_URL}/poems`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((poems) =>{
      dispatch(fetchPoemsFromDBSuccess(poems));
    })
    .catch(err => {
      dispatch(fetchPoemsFromDBError(err));
    })
};

export const fetchUserPoemsFromDB = (userId) => dispatch => {
  dispatch(fetchUserPoemFromDBRequest());

   fetch(`${API_BASE_URL}/poems?userId=${userId}`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((poems) =>{
      dispatch(fetchUserPoemFromDBSuccess(poems));
    })
    .catch(err => {
      dispatch(fetchUserPoemFromDBError(err));
    })
};

export const fetchPoemByID = (id) => dispatch => {
  dispatch(fetchPoemFromDBRequest());
   fetch(`${API_BASE_URL}/poems/${id}`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((poem) =>{
      dispatch(fetchPoemFromDBSuccess(poem));
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

export const updatePoem = (updatePoem) => dispatch => {
  const keyArray = Object.keys(updatePoem.magnets);
  const magnets = keyArray.map(key => updatePoem.magnets[key])

  const updateBody = {title: updatePoem.title, magnets, id: updatePoem.id}
  dispatch(updatePoemRequest());
   fetch(`${API_BASE_URL}/poems/${updatePoem.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(updateBody),
})
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(() =>{
      dispatch(updatePoemSuccess());
    })
    .catch(err => {
      dispatch(updatePoemError(err));
    })
};
