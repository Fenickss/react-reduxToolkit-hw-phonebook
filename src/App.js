import { Component } from 'react';

import FormContact from './Components/FormContact/FormContact';
import ContactList from './Components/ContactList';
import Container from './Components/Container';
import Filter from './Components/Filter';
import { connect } from 'react-redux';

class App extends Component {
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

  render() {
    return (
      <Container>
        <FormContact />
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

export default connect(mapStateToProps, null)(App);
