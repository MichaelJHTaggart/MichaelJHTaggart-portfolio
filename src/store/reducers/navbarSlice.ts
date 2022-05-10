import { createReducer } from '@reduxjs/toolkit';
import { setNavbar } from '../actions/navbar';

export interface State {
  isOpen: boolean;
  isNew: boolean;
}

const initialState: State = {
  isOpen: false,
  isNew: true,
};

export const navbarReducer = createReducer(initialState, (builder) => {
  //? What exactly is payload doing inside curlies? *Object destructuring?
  //? What does putting the parenthesis around our curly braces do?
  builder.addCase(setNavbar, (state, { payload }) => ({
    ...state,
    isOpen: payload,
    isNew: false,
  }));
});
