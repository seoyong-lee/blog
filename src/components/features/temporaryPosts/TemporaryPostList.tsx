import { Post } from "@/types/scheme";
import Loading from "@/components/shared/Loading";
import TemporaryPostItem from "./TemporaryPostItem";

const TemporaryPostList = ({
  posts,
  isLoading,
  onClickItem,
  onClickDelete,
  onClickProfile,
}: {
  posts?: Post[];
  isLoading: boolean;
  onClickItem: (postId: string) => void;
  onClickDelete: (postId: string) => void;
  onClickProfile: (author: string) => void;
}) => {
  if (!posts || isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:grid sm:grid-cols-2 gap-10 py-8 h-full">
      {posts?.map((post) => {
        return (
          <TemporaryPostItem
            key={post.id}
            post={post}
            onClickProfile={onClickProfile}
            onClickDelete={onClickDelete}
            onClick={onClickItem}
          />
        );
      })}
    </div>
  );
};

export default TemporaryPostList;
