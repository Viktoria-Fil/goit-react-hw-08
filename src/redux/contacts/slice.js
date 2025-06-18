import { createAction, createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";


const handlePending = (state) => {
  state.loading = true;
};
const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
    ],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
   
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleReject)
 
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleReject)
    
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, handleReject)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default slice.reducer;

