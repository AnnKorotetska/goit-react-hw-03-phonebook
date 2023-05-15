import PropTypes from 'prop-types';
import { Formik } from 'formik';

import {
  FormEl,
  Label,
  Input,
  Button,
  ErrorMessageEl,
} from './PhoneFormStyled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const onFormSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      <FormEl>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessageEl name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessageEl name="number" component="div" />
        </Label>
        <Button type="submit">add contact</Button>
      </FormEl>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
