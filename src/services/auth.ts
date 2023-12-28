import { getDoc, doc } from "firebase/firestore";

import { User } from "@/types/scheme";
import { db } from "@/firebase/firebaseClient";

export const getUser = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, "Users", userId));
    return userDoc.data() as User;
  } catch (e) {
    throw e;
  }
};
