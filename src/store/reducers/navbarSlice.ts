import { createReducer } from '@reduxjs/toolkit';
import { setNavbar } from '../actions/navbar';

export interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

export const navbarReducer = createReducer(initialState, (builder) => {
 //? What exactly is payload doing inside curlies? *Object destructuring?
 //? What does putting the parenthesis around our curly braces do?
  builder.addCase(setNavbar, (state, { payload }) => ({
    ...state,
    isOpen: payload,
  }));
});
