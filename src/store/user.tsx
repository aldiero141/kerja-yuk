import type { User } from "@/features/user/type";
import { create } from "zustand";

type UserState = {
  user: User;
  actions: UserStoreActions;
};

type UserStoreActions = {
  setUser: (user: User) => void;
};

const useUserStore = create<UserState>((set) => {
  return {
    user: {
      name: "",
      job: "",
      joinDate: "",
      officeLocation: "",
      image: "",
    },
    actions: {
      setUser: (user: User) => set({ user }),
    },
  };
});

export const useUser = () => useUserStore(state => state.user);
export const useUserActions = () => useUserStore(state => state.actions);
