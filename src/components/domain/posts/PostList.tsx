import PostItem from "./PostItem";

const PostList = () => {
  return (
    <div className="flex flex-col md:grid sm:grid-cols-2 gap-10 py-8 h-full">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostList;
