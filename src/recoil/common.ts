import { atom } from "recoil";

export const themeStateAtom = atom<string | null>({
  key: "themeStateAtom",
  default: null,
});

export const headerFixedStateAtom = atom<boolean>({
  key: "headerFixedStateAtom",
  default: false,
});

export const showHeaderAtom = atom<boolean>({
  key: "showHeaderAtom",
  default: true,
});
