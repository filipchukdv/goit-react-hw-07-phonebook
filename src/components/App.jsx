import { useSelector } from 'react-redux';
import { PrimaryTitle, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

export const App = () => {
  const { isLoading, error } = useSelector(state => state.contacts);
  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <Loader />}
      {error && (
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{error}</p>
      )}
      <ContactList />
    </>
  );
};
