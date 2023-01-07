// src/__test__/utils/server.js
import { setupServer } from "msw/node";
import { rest } from "msw";

let products;
beforeEach(() => {
  products = [];
});

const server = setupServer(
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.json(products));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
