import { worker } from "./browser";

export const setupMsw = () => {
  if (typeof window === "undefined") {
    // disabled because not work
    // const { server } = require("./server");
    // server.listen();
  } else {
    void worker.start();
  }
};
