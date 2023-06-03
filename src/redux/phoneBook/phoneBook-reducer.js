import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './phoneBook-actions';

const contacts = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],

  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
