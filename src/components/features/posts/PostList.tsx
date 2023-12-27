import { useNavigate } from "react-router-dom";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { getPosts } from "~/services/post";
import { useFirestore } from "~/lib/firebase";
import { Post } from "~/types/scheme";
import Loading from "~/components/shared/Loading";

const PostList = () => {
  const navigate = useNavigate();
  const db = useFirestore();

  const [posts, setPosts] = useState<Post[]>();

  const handleClickProfile = (author: string) => {
    if (author === "me") {
      navigate("/about");
    }
  };

  const handleClickItem = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  const getAndSetPosts = async () => {
    const postList = await getPosts(db);
    if (!postList) {
      return;
    }
    setPosts(postList);
  };

  useEffect(() => {
    getAndSetPosts();
  }, []);

  if (!posts) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:grid sm:grid-cols-2 gap-10 py-8 h-full">
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
