import React from 'react';
import style from './ContactList.module.css';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(state =>
    getVisibleContacts(state.phoneBook.contacts, state.phoneBook.filter)
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(phoneBookActions.deleteContact(id));

  return (
    <ul className={style.list}>
      <p>Contacts</p>
      {contacts.map(({ name, id, number }) => (
        <li className={style.item} key={id}>
          <p>
            {name}
            {'---------->'}
            {number}
          </p>

          <button
            onClick={() => onDeleteContact(id)}
            className={style.btn}
            type="button"
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
