import { atom } from "recoil";

export const showToastStateAtom = atom<boolean>({
  key: "showToastStateAtom",
  default: false,
});

export const toastTextStateAtom = atom<string>({
  key: "toastTextStateAtom",
  default: "",
});
