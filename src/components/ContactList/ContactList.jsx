import ContactElem from 'components/ContactElem/ContactElem';
import { Container } from './ContactList.styled';
import { useSelector } from 'react-redux/es/exports';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
