// eslint-disable-next-line import/no-extraneous-dependencies --- intent to disable since msw is only for dev purpose
import { rest } from "msw";

export const handlers = [
  // Handles a POST
  rest.post(`/login`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`/create`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`/delete`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
