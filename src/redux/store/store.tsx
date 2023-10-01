import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "../features/modalSlice";
import isActiveSlice from "../features/isactiveSlice";
export const store = configureStore({
  reducer: {
    navSmallBar: modalSliceReducer,
    isActive: isActiveSlice,
  },
});
