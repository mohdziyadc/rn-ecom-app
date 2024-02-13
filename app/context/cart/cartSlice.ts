import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  items: any[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.product?._id !== action.payload?._id
      );
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
