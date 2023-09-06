/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //an array of items with id, name, price and quantity
  },
  reducers: {
    // Define the actions to update the state
    addToWishlist: (state, action) => {
      // Set the user to the payload
      const item = action.payload;
      //check if the item is already in the cart
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        return;
      }
      //just add the item user wants to add to the cart
      state.items.push({ ...item });
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload; //no need to send the whole item .... id of an product is sufficent for remvoing from the cart

      //checking the item is already in the cart
      const index = state.items.findIndex((i) => i.id === id);
      i;
      state.items.splice(index, 1);
    },

    resetWishlist: (state, action) => {
      state.items = [];
    },
  },
});

// Export the actions for dispatching
export const { addToWishlist, removeFromWishlist, resetWishlist } =
  wishlistSlice.actions;

// export all the cart items

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;

// Export the reducer as default
export default wishlistSlice.reducer;
