import {
  getDoc,
  doc,
  Firestore,
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

import { Post } from "~/types/scheme";

export const getPost = async (db: Firestore, postId: string) => {
  try {
    const postDoc = await getDoc(doc(db, "Posts", postId));
    return postDoc.data() as Post;
  } catch (e) {
    throw e;
  }
};

export const getPostByPostId = async (db: Firestore, postId: string) => {
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

export const addPost = async (db: Firestore, post: Post) => {
  try {
    const postRef = doc(db, "Posts", post.id);
    const res = await setDoc(postRef, post);
    return res;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (db: Firestore, post: Post) => {
  try {
    const postRef = doc(db, "Posts", post.id);
    const res = await updateDoc(postRef, post as DocumentData);
    return res;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async (db: Firestore) => {
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

export const getTemporaryPosts = async (db: Firestore) => {
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

export const deletePost = async (db: Firestore, postId: string) => {
  try {
    const postRef = doc(db, "Posts", postId);
    const res = await deleteDoc(postRef);
    return res;
  } catch (e) {
    throw e;
  }
};
