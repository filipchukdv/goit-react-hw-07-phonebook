import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contact',
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteById(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteById, filterValue } = slice.actions;
