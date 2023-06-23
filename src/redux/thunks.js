import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'api/contacts';

export const getContactsThunk = createAsyncThunk('contacts/getAll', () => {
  return getContacts();
});
export const addContactsThunk = createAsyncThunk('contacts/add', contact => {
  return addContact(contact);
});
export const deleteContactsThunk = createAsyncThunk('contacts/delete', id => {
  return deleteContact(id);
});
