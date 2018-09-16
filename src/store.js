import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchReducer} from './reducers/search';
import {poemReducer} from './reducers/poem';
import {magnetReducer} from './reducers/magnets';
import {userReducer} from './reducers/user';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const rootReducer = combineReducers({
  search: searchReducer,
  poem: poemReducer,
  magnets: magnetReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer
});


// for dev
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;


// export const store = createStore(rootReducer, 
//   applyMiddleware(thunk)
// );