import { atom } from "recoil";

export const themeStateAtom = atom<string>({
  key: "themeStateAtom",
  default: localStorage.getItem("theme") ?? "dark",
});
