export const reducer = (state, action) => {
  if (action.type === 'addContact') {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  if (action.type === 'deleteById') {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  }
  if (action.type === 'filterValue') {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state;
};
