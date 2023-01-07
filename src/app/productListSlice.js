// src/app/productListSlice.js
import { createSlice } from "@reduxjs/toolkit";

export function selectProductList(state) {
  return state.productList.list;
}

export function selectAreProductsLoading(state) {
  return state.productList.isLoading;
}

const productListSlice = createSlice({
  name: "productList",
  initialState: { list: [], isLoading: false },
  reducers: {
    fetchAllProductsRequested(state) {
      state.isLoading = true;
    },
    fetchAllProductsFulfilled(state, action) {
      state.isLoading = false;
      state.list = action.payload;
    },
  },
});

export const { fetchAllProductsRequested, fetchAllProductsFulfilled } =
  productListSlice.actions;

export function fetchAllProducts() {
  return async (dispatch) => {
    dispatch(fetchAllProductsRequested());
    const products = await fetch("/api/products").then((res) => res.json());
    dispatch(fetchAllProductsFulfilled(products));
  };
}

export default productListSlice.reducer;
