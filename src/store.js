import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchReducer} from './reducers/search';
import {poemReducer} from './reducers/poem';
import {magnetReducer} from './reducers/magnets';
import {userReducer} from './reducers/user';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  search: searchReducer,
  poem: poemReducer,
  magnets: magnetReducer,
  user: userReducer
});

// for dev
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

// export const store = createStore(rootReducer, 
//   applyMiddleware(thunk)
// );