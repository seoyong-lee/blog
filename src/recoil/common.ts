import { atom } from "recoil";

export const themeStateAtom = atom<string>({
  key: "themeStateAtom",
  default: localStorage.getItem("theme") ?? "night",
});

export const headerFixedStateAtom = atom<boolean>({
  key: "headerFixedStateAtom",
  default: false,
});
