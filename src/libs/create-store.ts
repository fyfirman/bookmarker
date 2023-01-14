import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

const createStore = <T>(
  name: string,
  state: StateCreator<T, [["zustand/devtools", never]], [], T>
) =>
  create<T>()(
    devtools<T>(state, {
      name,
    })
  );

export default createStore;
