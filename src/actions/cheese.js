'use strict';

import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export function fetchCheesesRequest() {
  return {
    type: FETCH_CHEESES_REQUEST
  };
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export function fetchCheesesSuccess(cheeses) {
  return {
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  };
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export function fetchCheesesError(err) {
  return {
    type: FETCH_CHEESES_ERROR,
    err
  };
}

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
   fetch(`${API_BASE_URL}/cheeses`)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((cheeses) =>{
      dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(err => {
      dispatch(fetchCheesesError(err));
    })
};



