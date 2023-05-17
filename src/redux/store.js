import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});

export default store;
