/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import cartReducer from "../reducers/cartSlice";
import wishlistReducer from "../reducers/wishlistSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
