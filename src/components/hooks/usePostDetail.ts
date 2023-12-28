import dayjs from "dayjs";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "@/recoil/common";
import { updatePost } from "@/services/post";
import { Post } from "@/types/scheme";
import { singlelineToMultiline } from "@/utils/markdown";
import { useToast } from "./useToast";
import { useRouter } from "next/router";
import { db } from "@/firebase/firebaseClient";

export const usePostDetail = () => {
  const toast = useToast();
  const navigate = useRouter();
  const postId = navigate.query.postId as string;

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [post, setPost] = useState<Post>();
  const [isPublic, setIsPublic] = useState(false);

  const handleClickPublish = async () => {
    if (!post) {
      return;
    }

    const newPost: Post = { ...post, isPublic: !post?.isPublic };
    await updatePost(newPost);
    setIsPublic(!isPublic);
    toast("공개설정 변경!");
  };

  const handleClickEdit = () => {
    navigate.push("/edit/" + postId);
  };

  useEffect(() => {
    setHeaderFixed(true);
  }, [postId]);

  useEffect(() => {
    if (!postId) {
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
