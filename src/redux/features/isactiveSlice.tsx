import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IsActiveState {
  isActive: {
    active: boolean;
  };
}

interface IsActiveProps {
  active: boolean;
}

const initialState: IsActiveProps = {
  active: true,
};

export const isActiveSlice = createSlice({
  name: "isActive",
  initialState,
  reducers: {
    isActiveOpen: (state) => {
      state.active = true;
    },
    isActiveClose: (state) => {
      state.active = false;
    },
  },
});

export const { isActiveOpen, isActiveClose } = isActiveSlice.actions;

export default isActiveSlice.reducer;
