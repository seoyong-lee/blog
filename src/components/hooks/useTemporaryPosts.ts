import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "@/recoil/common";
import { deletePost, getTemporaryPosts } from "@/services/post";
import { Post } from "@/types/scheme";
import { useToast } from "./useToast";
import { isLoginStateAtom } from "@/recoil/user";
import { useRouter } from "next/router";

export const useTemporaryPosts = () => {
  const navigate = useRouter();
  const toast = useToast();

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [isLogin] = useRecoilState(isLoginStateAtom);

  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNewPost = () => {
    navigate.push("/edit");
  };

  const handleClickItem = (postId: string) => {
    navigate.push(`/edit/${postId}`);
  };

  const handleClickProfile = (author: string) => {
    if (author === "me") {
      navigate.push("/about");
    }
  };

  const handleClickDelete = async (postId: string) => {
    setIsLoading(true);
    await deletePost(postId);
    setIsLoading(false);
    toast("삭제 완료!");
  };

  const getAndSetPosts = async () => {
    const postList = await getTemporaryPosts();
    if (!postList) {
      return;
    }
    setPosts(postList);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate.push("/");
    }
  }, [isLogin]);

  useEffect(() => {
    setHeaderFixed(false);
    getAndSetPosts();
  }, [isLoading]);

  return {
    posts,
    isLoading,
    handleClickDelete,
    handleClickNewPost,
    handleClickItem,
    handleClickProfile,
  };
};
