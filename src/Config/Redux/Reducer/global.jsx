import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  value: 0,
};

export const global = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = global.actions;

// Selector function to access the value from the state
export const selectCount = (state) => state.counter.value;

export default global.reducer;
