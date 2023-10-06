import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "../features/modalSlice";
import isActiveSlice from "../features/isactiveSlice";
import cartSlice from "../features/cartSlice";
import counterSlice from "../features/counterSlice";
export const store = configureStore({
  reducer: {
    navSmallBar: modalSliceReducer,
    isActive: isActiveSlice,
    cart: cartSlice,
    counter: counterSlice
  },
});
