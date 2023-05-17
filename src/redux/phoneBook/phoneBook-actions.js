import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('PhoneBook/addContact', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

const deleteContact = createAction('PhoneBook/deleteContact');

// sdfsdfsdfsdfsd функция

// и т.д

const changeFilter = createAction('PhoneBook/changeFilter');

export  { addContact, deleteContact, changeFilter };
