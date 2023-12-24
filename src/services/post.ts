import { getDoc, doc, Firestore } from "firebase/firestore";

import { Post } from "~/types/scheme";

export const getPost = async (db: Firestore, postId: string) => {
  try {
    const postDoc = await getDoc(doc(db, "Posts", postId));
    return postDoc.data() as Post;
  } catch (e) {
    throw e;
  }
};
