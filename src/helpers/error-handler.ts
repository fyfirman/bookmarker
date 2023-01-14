import { ZodError } from "zod";

const errorHandler = (err: unknown) => {
  if (err instanceof ZodError) {
    // Do something when zod error
    // eslint-disable-next-line no-useless-return
    return;
  }
  // Do something when zod error
};

export default errorHandler;
