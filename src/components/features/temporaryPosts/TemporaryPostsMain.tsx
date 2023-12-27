import TemporaryPostList from "./TemporaryPostList";
import TemporaryPostsHeader from "./TemporaryPostsHeader";
import { useTemporaryPosts } from "~/components/hooks/useTemporaryPosts";

const TemporaryPostsMain = () => {
  const {
    posts,
    isLoading,
    handleClickDelete,
    handleClickNewPost,
    handleClickItem,
    handleClickProfile,
  } = useTemporaryPosts();

  return (
    <div className="h-full min-h-screen w-full max-w-[1040px] px-6 sm:px-10 lg:py-0 pt-12">
      <TemporaryPostsHeader onClickNewPost={handleClickNewPost} />
      <TemporaryPostList
        posts={posts}
        isLoading={isLoading}
        onClickItem={handleClickItem}
        onClickDelete={handleClickDelete}
        onClickProfile={handleClickProfile}
      />
    </div>
  );
};

export default TemporaryPostsMain;
