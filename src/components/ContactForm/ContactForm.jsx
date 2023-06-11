import { Button, Form, Input, Title } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { addContact } from 'store/slice';
import { useRef } from 'react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const input = useRef();
  const handleSubmit = e => {
    const form = e.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === formName.toLowerCase()
      )
    ) {
      alert(`${formName} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name: formName, number: formNumber }));
    input.current.blur();
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Name</Title>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        ref={input}
      />
      <Title>Number</Title>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        ref={input}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
