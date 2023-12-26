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
    postDoc.forEach((doc) => {
      const docData = doc.data() as Post;
      if (!docData?.deleted) {
        res.push(docData);
      }
    });
    return res;
  } catch (e) {
    throw e;
  }
};
