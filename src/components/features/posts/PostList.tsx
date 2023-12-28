"use client";

import PostItem from "./PostItem";
import { useCallback, useEffect } from "react";
import { getPosts } from "@/services/post";
import Loading from "@/components/shared/Loading";
import { useRecoilState } from "recoil";
import { postListAtom } from "@/recoil/post";
import { useRouter } from "next/navigation";

const PostList = () => {
  const navigate = useRouter();

  const [posts, setPosts] = useRecoilState(postListAtom);

  const handleClickProfile = (author: string) => {
    if (author === "me") {
      navigate.push("/about");
    }
  };

  const handleClickItem = (postId: string) => {
    navigate.push(`/post/${postId}`);
  };

  const getAndSetPosts = useCallback(async () => {
    const postList = await getPosts();
    if (!postList) {
      return;
    }
    setPosts(postList);
  }, [setPosts]);

  useEffect(() => {
    getAndSetPosts();
  }, [getAndSetPosts]);

  if (!posts) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:grid sm:grid-cols-2 gap-10 py-8">
      {posts?.map((post) => {
        return (
          <PostItem
            key={post.id}
            post={post}
            onClickProfile={handleClickProfile}
            onClick={handleClickItem}
          />
        );
      })}
    </div>
  );
};

export default PostList;
