import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  max-width: 250px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  height: 25px;
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 100px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: -10px;
  &:active {
    background-color: #4090e6;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ErrorMessageEl = styled(ErrorMessage)`
  color: #dc143c;
`;
