import { atom } from "recoil";
import { User } from "~/types/scheme";

export const isLoginStateAtom = atom<boolean>({
  key: "isLoginStateAtom",
  default: false,
});

export const currentUserAtom = atom<User | null>({
  key: "currentUserAtom",
  default: null,
});
