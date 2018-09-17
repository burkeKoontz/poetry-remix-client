import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export function authRequest() {
  return {
    type: AUTH_REQUEST
  };
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token
  };
}

export const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};


export const logInUser = (user) => dispatch => {
  dispatch(authRequest());
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
    dispatch(authError(err));

    return Promise.reject(
        new SubmissionError({
            _error: message
        })
    );
})
}

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
          Authorization: `Bearer ${authToken}`
      }
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
      .then(({authToken}) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
          dispatch(authError(err));
          dispatch(clearAuth());
          clearAuthToken(authToken);
      });
};