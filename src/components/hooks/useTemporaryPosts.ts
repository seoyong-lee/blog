import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { headerFixedStateAtom } from "~/recoil/common";
import { deletePost, getTemporaryPosts } from "~/services/post";
import { Post } from "~/types/scheme";
import { useToast } from "./useToast";
import { isLoginStateAtom } from "~/recoil/user";

export const useTemporaryPosts = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const db = useFirestore();

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [isLogin] = useRecoilState(isLoginStateAtom);

  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNewPost = () => {
    navigate("/edit");
  };

  const handleClickItem = (postId: string) => {
    navigate(`/edit/${postId}`);
  };

  const handleClickProfile = (author: string) => {
    if (author === "me") {
      navigate("/about");
    }
  };

  const handleClickDelete = async (postId: string) => {
    setIsLoading(true);
    await deletePost(db, postId);
    setIsLoading(false);
    toast("삭제 완료!");
  };

  const getAndSetPosts = async () => {
    const postList = await getTemporaryPosts(db);
    if (!postList) {
      return;
    }
    setPosts(postList);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
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
