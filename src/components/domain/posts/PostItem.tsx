import { Post } from "~/types/scheme";

const PostItem = ({
  post,
  onClickProfile,
  onClick,
}: {
  post: Post;
  onClickProfile: (author: string) => void;
  onClick: (postId: string) => void;
}) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick(post.id);
      }}
    >
      <div className="card card-compact bg-base-200 shadow-xl cursor-pointer hover:bg-base-200">
        <figure className="h-[16rem]">
          <img
            src={post?.imgUrl}
            alt="post thumbnail"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body min-h-[15rem]">
          <h2 className="card-title text-2xl font-bold">{post?.title}</h2>
          <p className="text-base leading-6">{post?.desc}</p>
          <br />
          <div className="flex gap-9 place-items-center">
            <button
              className="flex place-items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClickProfile("me");
              }}
            >
              <div className="avatar mr-3">
                <div className="w-12 rounded-full overflow-hidden">
                  <img src="me.png" alt="avatar" className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-left">Author</span>
                <span>Drew Lee</span>
              </div>
            </button>
            <div className="flex flex-col">
              <span className="font-bold">Date</span>
              <span>October 24, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostItem;
