import PostList from "./PostList";
import PostsHeader from "./PostsHeader";

const PostsMain = () => {
  return (
    <div className="h-screen w-full max-w-[780px] px-4 sm:px-10 md:py-0 pt-12">
      <PostsHeader />
      <PostList />
    </div>
  );
};

export default PostsMain;
