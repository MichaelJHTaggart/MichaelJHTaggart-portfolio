import { configureStore } from '@reduxjs/toolkit';
import { navbarReducer } from './reducers/navbarSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

//? What does RootState, ReturnType && store.getState do?
export type RootState = ReturnType<typeof store.getState>;
export default store;
