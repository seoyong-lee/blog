import dayjs from "dayjs";
import { Firestore } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { headerFixedStateAtom } from "~/recoil/common";
import { getPost } from "~/services/post";
import { Post } from "~/types/scheme";
import { singlelineToMultiline } from "~/utils/markdown";

export const usePostDetail = () => {
  const pathname = useLocation().pathname;
  const postId = pathname.split("/post/")?.[1];
  const db = useFirestore();

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [post, setPost] = useState<Post>();

  const getPostFromDb = useCallback(
    async (db: Firestore, postId: string) => {
      if (!db || !postId) {
        return;
      }

      const res = await getPost(db, postId);

      if (!res) {
        return;
      }

      setPost(res);
    },
    [db, postId]
  );

  useEffect(() => {
    setHeaderFixed(true);
  }, []);

  useEffect(() => {
    getPostFromDb(db, postId);
  }, [db, postId]);

  const date = dayjs(post?.createdAt).format("MMMM DD, YYYY");
  const replacedText = singlelineToMultiline(post?.text);

  return {
    post,
    date,
    replacedText,
  };
};
