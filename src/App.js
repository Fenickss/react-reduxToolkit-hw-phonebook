import React from 'react';

import FormContact from './Components/FormContact/FormContact';
import ContactList from './Components/ContactList';
import Container from './Components/Container';
import Filter from './Components/Filter';

const App = () => {
  // formSubmitHandler = date => {
  //   console.log(date);
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  return (
    <Container>
      <FormContact />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
