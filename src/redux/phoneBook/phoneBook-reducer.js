import { combineReducers } from 'redux';
import * as actionType from './phoneBook-type';
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

 const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
