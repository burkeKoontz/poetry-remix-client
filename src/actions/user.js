

import {API_BASE_URL} from '../config';

export const SAVE_USER_TO_DB_REQUEST = 'SAVE_USER_TO_DB_REQUEST';
export function saveUserToDBRequest() {
  return {
    type: SAVE_USER_TO_DB_REQUEST
  };
}

export const SAVE_USER_TO_DB_SUCCESS = 'SAVE_USER_TO_DB_SUCCESS';
export function saveUserToDBSuccess(user) {
  return {
    type: SAVE_USER_TO_DB_SUCCESS,
    user
  };
}

export const SAVE_USER_TO_DB_ERROR = 'SAVE_USER_TO_DB_ERROR';
export function saveUserToDBError(err) {
  return {
    type: SAVE_USER_TO_DB_ERROR,
    err
  };
}

export const saveUserToDB = (user) => dispatch => {
  dispatch(saveUserToDBRequest());
   fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
})
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((user) =>{
      dispatch(saveUserToDBSuccess(user));
    })
    .catch(err => {
      dispatch(saveUserToDBError(err));
    })
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export function logInRequest() {
  return {
    type: SAVE_USER_TO_DB_REQUEST
  };
}

export const LOG_IN_SUCCESS= 'LOG_IN_SUCCESS';
export function logInSuccess(token) {
  return {
    type: LOG_IN_SUCCESS,
    token
  };
}

export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export function logInError(err) {
  return {
    type: LOG_IN_ERROR,
    err
  };
}

export const logInUser = (user) => dispatch => {
  dispatch(logInRequest());
   fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
})
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((token) =>{
      dispatch(logInSuccess(token));
    })
    .catch(err => {
      dispatch(logInError(err));
    })
};