// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

import productListReducer from "./productListSlice";

export const configureAppStore = () =>
  configureStore({
    reducer: {
      productList: productListReducer,
    },
  });
