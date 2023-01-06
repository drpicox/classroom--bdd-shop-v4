// src/__test__/Shop.spec.js
import { loadFeatures, autoBindSteps } from "jest-cucumber";
import { configureAppStore } from "../app/store";
import { fetchAllProducts, selectProductList } from "../app/productListSlice";

const features = loadFeatures("features/Shop*.feature");

let store;
beforeEach(() => {
  store = configureAppStore();
});

const steps = ({ given, when, then, pending }) => {
  when("I list products", () => {
    store.dispatch(fetchAllProducts());
  });
  then(/^there should be (\d+) products$/, (count) => {
    const products = selectProductList(store.getState());
    expect(products).toHaveLength(+count);
  });
  // ...
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

autoBindSteps(features, [steps]);
