import axios from 'axios';

axios.defaults.baseURL = 'https://6494508b0da866a953678e52.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
