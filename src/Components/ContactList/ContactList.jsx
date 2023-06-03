import React from 'react';
import style from './ContactList.module.css';
import { connect } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

const ContactList = ({ contacts, onDeleteContact }) => (
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

// getFilteringСontact = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const mapStateToProps = state => {
  const { filter, contacts } = state.phoneBook;
  const normalizedFilter = filter.toLowerCase();
  console.log(contacts);
  const FilteringСontact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: FilteringСontact,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
