import { combineReducers } from 'redux';
import actionType from './phoneBook-type';
// const phoneBookInitialState = {
//   contacts: [],
//   filter: '',
//   name: '',
//   number: '',
// };
const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.ADD:
      return [state + payload];

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionType.CHANGE_FILTER:
      return [state + payload];

    default:
      return state;
  }
};

export const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
