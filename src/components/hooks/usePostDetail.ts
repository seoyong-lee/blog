import dayjs from "dayjs";
import { Firestore, doc, onSnapshot } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { headerFixedStateAtom } from "~/recoil/common";
import { getPost, updatePost } from "~/services/post";
import { Post } from "~/types/scheme";
import { singlelineToMultiline } from "~/utils/markdown";
import { useToast } from "./useToast";

export const usePostDetail = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const postId = pathname.split("/post/")?.[1];
  const db = useFirestore();

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [post, setPost] = useState<Post>();
  const [isPublic, setIsPublic] = useState(false);

  const handleClickPublish = async () => {
    if (!post) {
      return;
    }

    const newPost: Post = { ...post, isPublic: !post?.isPublic };
    await updatePost(db, newPost);
    setIsPublic(!isPublic);
    toast("공개설정 변경!");
  };

  const handleClickEdit = () => {
    navigate("/edit/" + postId);
  };

  useEffect(() => {
    setHeaderFixed(true);
  }, [postId]);

  useEffect(() => {
    if (!db || !postId) {
      return;
    }

    const unsub = onSnapshot(doc(db, "Posts", postId), (doc) => {
      if (!doc) {
        return;
      }
      const post = doc.data() as Post;

      setIsPublic(post?.isPublic ?? true);
      setPost(post);
    });
    return () => unsub();
  }, [db, postId]);

  const date = dayjs(post?.createdAt).format("MMMM DD, YYYY");
  const replacedText = singlelineToMultiline(post?.text);

  return {
    post,
    date,
    replacedText,
    isPublic,
    onClickPublish: handleClickPublish,
    onClickEdit: handleClickEdit,
  };
};
