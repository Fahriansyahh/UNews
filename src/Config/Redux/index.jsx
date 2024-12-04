// store.ts or your relevant file
import { configureStore } from '@reduxjs/toolkit';
import Global from './Reducer/global';
import searchSlice from './Reducer/searchSlice'
const store = configureStore({
  reducer: {
    Global,
    searchSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
