// src/__test__/utils/Shop.steps.js
import { waitFor } from "@testing-library/react";
import "./server";
import { configureAppStore } from "../../app/store";
import {
  fetchAllProducts,
  selectProductList,
  selectAreProductsLoading,
} from "../../app/productListSlice";

let store;
beforeEach(() => {
  store = configureAppStore();
});

export const steps = ({ given, when, then, pending }) => {
  when("I list products", async () => {
    await waitFor(() => expect(areProductsLoading()).toBe(false));
    store.dispatch(fetchAllProducts());
    expect(areProductsLoading()).toBe(true);
    await waitFor(() => expect(areProductsLoading()).toBe(false));
  });
  then(/^there should be (\d+) products$/, (count) => {
    const products = selectProductList(store.getState());
    expect(products).toHaveLength(+count);
  });
  given(/^there is a product "(.*)"$/, (arg0) => {
    pending();
  });
  then(/^there should be the "(.*)" product$/, (arg0) => {
    pending();
  });
  given(/^there is a product "(.*)" with price \$(\d+)$/, (arg0, arg1) => {
    pending();
  });
  then(
    /^there should be the "(.*)" product with price \$(\d+)$/,
    (arg0, arg1) => {
      pending();
    }
  );
};

function areProductsLoading() {
  return selectAreProductsLoading(store.getState());
}
