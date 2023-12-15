import PostList from "./PostList";
import PostsHeader from "./PostsHeader";

const PostsMain = () => {
  return (
    <div className="h-screen w-[780px]">
      <PostsHeader />
      <PostList />
    </div>
  );
};

export default PostsMain;
