import { atom } from "recoil";
import { Post } from "@/types/scheme";

export const postListAtom = atom<Post[] | null>({
  key: "postListAtom",
  default: null,
});
