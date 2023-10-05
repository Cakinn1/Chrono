import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  navSmallBar: {
    navModal: boolean;
    storeFilterModal: boolean;
    loginModal: boolean;
    signupModal: boolean;
  };
}

export interface ModalStateProps {
  navModal: boolean;
  storeFilterModal: boolean;
  loginModal: boolean;
  signupModal: boolean;
}

const initialState: ModalStateProps = {
  navModal: false,
  storeFilterModal: false,
  loginModal: false,
  signupModal: false,
};

export const modalSlice = createSlice({
  name: "navSmallBar",
  initialState,
  reducers: {
    modalIsOpen: (state) => {
      state.navModal = true;
    },
    modalIsClose: (state) => {
      state.navModal = false;
    },
    storeFilterIsClose: (state) => {
      state.storeFilterModal = false;
    },
    storeFilterIsOpen: (state) => {
      state.storeFilterModal = true;
    },
    loginModalIsClose: (state) => {
      state.loginModal = false;
    },
    loginModalIsOpen: (state) => {
      state.loginModal = true;
    },
    signupModalIsOpen: (state) => {
      state.signupModal = true;
    },
    signupModalIsClose: (state) => {
      state.signupModal = false;
    },
  },
});

export const {
  modalIsOpen,
  modalIsClose,
  storeFilterIsClose,
  storeFilterIsOpen,
  signupModalIsClose,
  signupModalIsOpen,
  loginModalIsClose,
  loginModalIsOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
