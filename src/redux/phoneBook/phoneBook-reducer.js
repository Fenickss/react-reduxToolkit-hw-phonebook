import { combineReducers } from 'redux';
import * as actionType from './phoneBook-type';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.ADD:
      return [...state, payload];

    case actionType.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionType.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
