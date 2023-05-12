import { nanoid } from 'nanoid';
export const addContact = (name, number) => ({
  type: 'PhoneBook/addContact',
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
  type: 'PhoneBook/changeFilter',
  payload: event,
});
