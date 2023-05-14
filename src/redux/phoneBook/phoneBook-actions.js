import { nanoid } from 'nanoid';
import actionType from './phoneBook-type';

export const addContact = (name, number) => ({
  type: actionType.ADD,
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

// sdfsdfsdfsdf функция

// sdfsdfsdfsdfsd функция

// и т.д

export const changeFilter = event => ({
  type: actionType.CHANGE_FILTER,
  payload: event,
});
