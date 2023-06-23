import ContactElem from 'components/ContactElem/ContactElem';
import { Container } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactElem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </Container>
  );
};

export default ContactList;
