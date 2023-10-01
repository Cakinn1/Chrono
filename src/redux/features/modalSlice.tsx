import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  navSmallBar: {
    navModal: boolean;
  };
}

export interface ModalStateProps {
  navModal: boolean;
}

const initialState: ModalStateProps = {
  navModal: false,
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
  },
});

export const { modalIsOpen, modalIsClose } = modalSlice.actions;

export default modalSlice.reducer;
