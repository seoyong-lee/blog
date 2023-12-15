import PostList from "./PostList";
import PostsHeader from "./PostsHeader";

const PostsMain = () => {
  return (
    <div className="h-full min-h-screen w-full max-w-[1040px] px-4 sm:px-10 lg:py-0 pt-12">
      <PostsHeader />
      <PostList />
    </div>
  );
};

export default PostsMain;
