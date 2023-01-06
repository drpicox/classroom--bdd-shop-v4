// src/app/productListSlice.js
import { createSlice } from "@reduxjs/toolkit";

export function selectProductList(state) {
  return state.productList;
}

export function fetchAllProducts() {
  return () => {};
}

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
});

export default productListSlice.reducer;
