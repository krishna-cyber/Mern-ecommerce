/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: null,
};

const productModal = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    productDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { productDetail } = productModal.actions;
export default productModal.reducer;
