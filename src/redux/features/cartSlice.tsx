import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../ApiServices/Api";

export interface CartProps {
  cart: {
    cart: CartItem[];
  };
}

export interface CartItem {
  name: string;
  image: string;
  prices?: {
    price?: number;
    salePrice?: number | null;
  }[];
  quantity: number;
}

export interface Props1 {
  cart: CartItem[];
}

const initialState: Props1 = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<CartItem>) => {
      const itemName = action.payload;
      const itemExists = state.cart.find((item) => item.name === itemName.name);
      if (itemExists) {
        state.cart = state.cart.map((item) =>
          item.name === itemName.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem = products.find((item) => item.name === itemName.name);
        if (newItem) {
          state.cart.push({ ...newItem, quantity: 1 });
        }
      }
    },
  },
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;

console.log(initialState.cart);
