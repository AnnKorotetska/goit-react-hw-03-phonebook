import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './Forms/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactsBook, PhonebookTitle, ContactsTitle } from './AppStyled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


   KEY = 'contacts';

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(this.KEY));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(this.KEY, JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const loweredName = name.toLowerCase();

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === loweredName
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { id: nanoid(), name, number }],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const loweredFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(loweredFilter)
    );

    return (
      <ContactsBook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactsList
          contacts={filteredContacts}
          onClick={this.deleteContact}
        />
      </ContactsBook>
    );
  }
}
