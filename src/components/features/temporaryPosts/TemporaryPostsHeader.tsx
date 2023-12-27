const PostsHeader = ({ onClickNewPost }: { onClickNewPost: () => void }) => {
  return (
    <div className="pt-10 px-2 pb-4 flex justify-between place-items-center">
      <h2 className="text-4xl font-bold">임시 글 리스트</h2>
      <button className="btn btn-outline btn-accent" onClick={onClickNewPost}>
        새 글 작성
      </button>
    </div>
  );
};

export default PostsHeader;
