import PostList from "./PostList";
import PostsHeader from "./PostsHeader";
import PostsLayoutWrapper from "./PostsLayoutWrapper";

const PostsMain = () => {
  return (
    <PostsLayoutWrapper>
      <PostsHeader />
      <PostList />
    </PostsLayoutWrapper>
  );
};

export default PostsMain;
