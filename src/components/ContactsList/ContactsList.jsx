import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsListEl, ListItem, Button } from './ContactsListStyled';

export class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <ContactsListEl>
        {contacts.map(({ name, id, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button onClick={() => onClick(id)}>Delete</Button>
          </ListItem>
        ))}
      </ContactsListEl>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
