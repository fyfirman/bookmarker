import createStore from "~/libs/create-store";

interface User {
  id: string;
  name: string;
}

interface UserState {
  users: User[];
}

export const useUserStore = createStore<UserState>("User", () => ({
  users: [],
}));
