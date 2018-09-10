import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchReducer} from './reducers/search';
import {poemReducer} from './reducers/poem';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  search: searchReducer,
  poem: poemReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));