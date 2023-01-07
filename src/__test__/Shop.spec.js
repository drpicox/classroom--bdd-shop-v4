// src/__test__/Shop.spec.js
import { loadFeatures, autoBindSteps } from "jest-cucumber";
import { steps } from "./utils/Shop.steps";

const features = loadFeatures("features/Shop*.feature");
autoBindSteps(features, [steps]);
