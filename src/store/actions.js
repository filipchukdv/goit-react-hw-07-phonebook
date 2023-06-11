export const addContact = contact => {
  return {
    type: 'addContact',
    payload: contact,
  };
};
export const deleteById = id => {
  return {
    type: 'deleteById',
    payload: id,
  };
};
export const filterValue = value => {
  return {
    type: 'filterValue',
    payload: value,
  };
};
