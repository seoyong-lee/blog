import dayjs from "dayjs";
import { Post } from "@/types/scheme";
import Image from "next/image";

const PostItem = ({
  post,
  onClickProfile,
  onClick,
}: {
  post: Post;
  onClickProfile: (author: string) => void;
  onClick: (postId: string) => void;
}) => {
  const date = dayjs(post.createdAt).format("MMMM DD, YYYY");

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick(post.id);
      }}
    >
      <div className="card card-compact bg-base-200 shadow-xl cursor-pointer hover:bg-base-200">
        <figure className="h-[12rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem]">
          <Image
            src={post?.imgUrl}
            width={200}
            height={300}
            quality={100}
            unoptimized
            priority
            alt="post thumbnail"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body min-h-[15rem] mb-2">
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
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostItem;
