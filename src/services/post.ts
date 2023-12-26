import {
  getDoc,
  doc,
  Firestore,
  getDocs,
  collection,
} from "firebase/firestore";

import { Post } from "~/types/scheme";

export const getPost = async (db: Firestore, postId: string) => {
  try {
    const postDoc = await getDoc(doc(db, "Posts", postId));
    return postDoc.data() as Post;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async (db: Firestore) => {
  try {
    const postDoc = await getDocs(collection(db, "Posts"));
    const res: Post[] = [];
    postDoc.forEach((doc) => res.push(doc.data() as Post));
    return res;
  } catch (e) {
    throw e;
  }
};
