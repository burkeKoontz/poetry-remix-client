// import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchReducer} from './reducers/search';
import {poemReducer} from './reducers/poem';
import {magnetReducer} from './reducers/magnets';
import {userReducer} from './reducers/user';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken, loadReturningUser} from './local-storage';
import {setAuthToken, refreshAuthToken, setReturningUser} from './actions/auth';

const rootReducer = combineReducers({
  search: searchReducer,
  poem: poemReducer,
  magnets: magnetReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer
});


// for dev
// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk)
// ));

const store = createStore(rootReducer, 
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

const returningUser = loadReturningUser();
if (returningUser) {
  store.dispatch(setReturningUser());
}

export default store;
