import { createStore, combineReducers } from 'redux';
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
