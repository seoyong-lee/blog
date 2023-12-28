import {
  getDoc,
  doc,
  getDocs,
  collection,
  setDoc,
  query,
  where,
  updateDoc,
  DocumentData,
  deleteDoc,
  orderBy,
} from "firebase/firestore";

import { Post } from "@/types/scheme";
import { db } from "@/firebase/firebaseClient";

export const getPost = async (postId: string) => {
  try {
    const postDoc = await getDoc(doc(db, "Posts", postId));
    return postDoc.data() as Post;
  } catch (e) {
    throw e;
  }
};

export const getPostByPostId = async (postId: string) => {
  try {
    const res: Post[] = [];
    const postRef = collection(db, "Posts");
    const querySnapshot = await getDocs(
      query(postRef, where("id", "==", postId))
    );
    querySnapshot.forEach((doc) => {
      res.push(doc.data() as Post);
    });
    return res;
  } catch (e) {
    throw e;
  }
};

export const addPost = async (post: Post) => {
  try {
    const postRef = doc(db, "Posts", post.id);
    const res = await setDoc(postRef, post);
    return res;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (post: Post) => {
  try {
    const postRef = doc(db, "Posts", post.id);
    const res = await updateDoc(postRef, post as DocumentData);
    return res;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async () => {
  try {
    const postRef = collection(db, "Posts");

    const querySnapshot = await getDocs(
      query(postRef, orderBy("createdAt", "desc"))
    );

    const res: Post[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data() as Post;
      if (!docData?.deleted && docData?.isPublic) {
        res.push(docData);
      }
    });
    return res;
  } catch (e) {
    throw e;
  }
};

export const getTemporaryPosts = async () => {
  try {
    const postRef = collection(db, "Posts");

    const querySnapshot = await getDocs(
      query(postRef, orderBy("createdAt", "desc"))
    );

    const res: Post[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data() as Post;
      if (!docData?.deleted && !docData?.isPublic) {
        res.push(docData);
      }
    });
    return res;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (postId: string) => {
  try {
    const postRef = doc(db, "Posts", postId);
    const res = await deleteDoc(postRef);
    return res;
  } catch (e) {
    throw e;
  }
};
