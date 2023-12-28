import { useNavigate } from "react-router-dom";
import PostItem from "./PostItem";
import { useEffect } from "react";
import { getPosts } from "~/services/post";
import { useFirestore } from "~/lib/firebase";
import Loading from "~/components/shared/Loading";
import { useRecoilState } from "recoil";
import { postListAtom } from "~/recoil/post";

const PostList = () => {
  const navigate = useNavigate();
  const db = useFirestore();

  const [posts, setPosts] = useRecoilState(postListAtom);

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
