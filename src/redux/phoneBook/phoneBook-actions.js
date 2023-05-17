import { nanoid } from 'nanoid';
import { createAction } from "@reduxjs/toolkit";
import * as actionType from './phoneBook-type';

// const addContact = (name, number) => ({
//   type: actionType.ADD,
//   payload: {
//     name,
//     number,
//     id: nanoid(),
//   },
// });

const addContact = createAction(actionType.ADD, (name, number) => {
   return{
    payload: {
  name,
  number,
  id: nanoid(),
}
  }
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
