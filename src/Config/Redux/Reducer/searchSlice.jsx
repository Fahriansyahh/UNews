// src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '', // Inisialisasi dengan nilai kosong
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Memperbarui nilai searchTerm
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
