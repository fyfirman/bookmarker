// eslint-disable-next-line import/no-extraneous-dependencies --- intent to disable since msw is only for dev purpose
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
