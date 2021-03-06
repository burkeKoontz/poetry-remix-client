import {SubmissionError} from 'redux-form';
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







