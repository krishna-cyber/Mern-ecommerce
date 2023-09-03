/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //an array of items with id, name, price and quantity
    total: 0, //The total amount of cart
  },
  reducers: {
    // Define the actions to update the state
    addToCart: (state, action) => {
      // Set the user to the payload
      const item = action.payload;
      //check if the item is already in the cart
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index === -1) {
        state.items[index].quantity++;
        state.total += item.price;
      } else {
        state.items.push({ ...item, quantity: 0 });
        state.total += item.price;
      }
    },
    remove: (state) => {
      // Set the user to null
      state.user = null;
    },
  },
});

// Export the actions for dispatching
export const { add, remove } = userSlice.actions;

// Export a selector to get the user from the state

// Export the reducer as default
export default cartSlice.reducer;
