

import {API_BASE_URL} from '../config';

export const FETCH_POEMS_REQUEST = 'FETCH_POEMS_REQUEST';
export function fetchPoemsRequest() {
  return {
    type: FETCH_POEMS_REQUEST
  };
}

export const FETCH_POEMS_SUCCESS = 'FETCH_POEMS_SUCCESS';
export function fetchPoemsSuccess(poems) {
  return {
    type: FETCH_POEMS_SUCCESS,
    poems
  };
}

export const FETCH_POEMS_ERROR = 'FETCH_POEMS_ERROR';
export function fetchPoemsError(err) {
  return {
    type: FETCH_POEMS_ERROR,
    err
  };
}

export const TOGGLE_SEARCHFORM = TOGGLE_SEARCHFORM;
export function toggleSearchForm() {
  return {
    type: TOGGLE_SEARCHFORM,
  };
}

export const SET_SEARCHTERM = 'SET_SEARCHTERM';
export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCHTERM,
    searchTerm
  };
}

export const fetchPoems = (searchTerms) => dispatch => {
  console.log(searchTerms);
  const authorSearchTerm = searchTerms.authorSearchTerm;
  const titleSearchTerm = searchTerms.titleSearchTerm;

  dispatch(fetchPoemsRequest());
   fetch(`${API_BASE_URL}/poems?authorSearchTerm=${authorSearchTerm}&titleSearchTerm=${titleSearchTerm}`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((poems) =>{
      dispatch(fetchPoemsSuccess(poems));
    })
    .catch(err => {
      dispatch(fetchPoemsError(err));
    })
};



