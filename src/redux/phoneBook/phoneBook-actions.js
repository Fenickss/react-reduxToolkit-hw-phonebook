import { nanoid } from 'nanoid';
import * as actionType from './phoneBook-type';

const addContact = (name, number) => ({
  type: actionType.ADD,
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

const deleteContact = contactId => ({
  type: actionType.DELETE,
  payload: contactId,
});

// sdfsdfsdfsdfsd функция

// и т.д

const changeFilter = value => ({
  type: actionType.CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
