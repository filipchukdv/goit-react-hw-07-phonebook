import { createSlice } from '@reduxjs/toolkit';
import { addContactsThunk, getContactsThunk } from './thunks';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = '';
};

const handleRejected = ({ contacts }, action) => {
  contacts.isLoading = false;
  contacts.error = action.error.message;
};

const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filterValue(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
      })
      .addCase(addContactsThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = slice.reducer;
export const { filterValue } = slice.actions;
