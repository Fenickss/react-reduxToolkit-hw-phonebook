import { createStore, combineReducers } from 'redux';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer);

export default store;
