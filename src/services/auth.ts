import { getDoc, doc, Firestore } from "firebase/firestore";

import { User } from "~/types/scheme";

export const getUser = async (db: Firestore, userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, "Users", userId));
    return userDoc.data() as User;
  } catch (e) {
    throw e;
  }
};
