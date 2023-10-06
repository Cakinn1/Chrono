import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterProps {
  counter: {
    counter: number;
  };
}

interface Counter {
  counter: number;
}

const initialState: Counter = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});
export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;



