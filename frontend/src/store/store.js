/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import productModalReducer from "../reducers/modalProduct";

export default configureStore({
  reducer: {
    user: userReducer,
    productModal: productModalReducer,
  },
});
