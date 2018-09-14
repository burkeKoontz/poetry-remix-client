import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';

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
   return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
})
.then(res => {
  if (!res.ok) {
      if (
          res.headers.has('content-type') &&
          res.headers
              .get('content-type')
              .startsWith('application/json')
      ) {
          // It's a nice JSON error returned by us, so decode it
          return res.json().then(err => Promise.reject(err));
      }
      // It's a less informative error returned by express
      return Promise.reject({
          code: res.status,
          message: res.statusText
      });
  }
  return;
})
.then(() => dispatch(saveUserToDBSuccess()))
.catch(err => {
  const {reason, message, location} = err;
  dispatch(saveUserToDBError(err));
  if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
          new SubmissionError({
              [location]: message
          })
      );
  }
  return Promise.reject(
      new SubmissionError({
          _error: err.message || 'Error submitting message'
      })
  );
});
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export function logInRequest() {
  return {
    type: LOG_IN_REQUEST
  };
}

export const LOG_IN_SUCCESS= 'LOG_IN_SUCCESS';
export function logInSuccess(user) {
  return {
    type: LOG_IN_SUCCESS,
    user
  };
}

export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export function logInError(err) {
  return {
    type: LOG_IN_ERROR,
    err
  };
}

export const LOG_OUT = 'LOG_OUT';
export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token
  };
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user
  };
}

export const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(logInSuccess(decodedToken.user));
  // saveAuthToken(authToken);
};

export const logInUser = (user) => dispatch => {
  dispatch(logInRequest());
   return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
})
.then(res => {
  if (!res.ok) {
      if (
          res.headers.has('content-type') &&
          res.headers
              .get('content-type')
              .startsWith('application/json')
      ) {
          // It's a nice JSON error returned by us, so decode it
          return res.json().then(err => Promise.reject(err));
      }
      // It's a less informative error returned by express
      return Promise.reject({
          code: res.status,
          message: res.statusText
      });
  }
  return res.json();
})
.then(({authToken}) => {
  storeAuthInfo(authToken, dispatch);
})
.catch(err => {
    const {code} = err;
    const message =
        code === 401
            ? 'Incorrect username or password'
            : 'Unable to login, please try again';
    dispatch(logInError(err));
    // Could not authenticate, so return a SubmissionError for Redux
    // Form
    return Promise.reject(
        new SubmissionError({
            _error: message
        })
    );
})
}