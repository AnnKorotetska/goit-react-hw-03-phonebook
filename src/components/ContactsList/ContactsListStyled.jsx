import styled from '@emotion/styled';

export const ContactsListEl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px;
`;

export const ListItem = styled.li`
  max-width: 250px;
  font-size: 18px;
`;

export const Button = styled.button`
  margin-left: 10px;
  &:active {
    background-color: #4090e6;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;
