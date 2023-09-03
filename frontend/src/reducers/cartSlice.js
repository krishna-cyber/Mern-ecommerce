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
    removeFromCart: (state, action) => {
      const id = action.payload; //no need to send the whole item .... id of an product is sufficent for remvoing from the cart

      //checking the item is already in the cart
      const index = state.items.findIndex((i) => i.id === id);
      if (index !== -1) {
        state.items[index].quantity--;
        state.total -= state.items[index].price;
      }
      //check if the item's quantity is zero
      if (state.items[index].quantity == 0) {
        state.items.splice(index, 1);
      }
    },
    resetCart: (state, action) => {
      state.items = [];
      state.total = 0;
    },
  },
});

// Export the actions for dispatching
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

// Export the reducer as default
export default cartSlice.reducer;
