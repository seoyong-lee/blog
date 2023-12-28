import { Fragment } from "react";
import { HeadMeta } from "@/components/shared/Head";
import PostDetailWrapper from "../../components/features/postDetail/PostDetailWrapper";
import PostDetailMainImg from "../../components/features/postDetail/PostDetailMainImg";
import PostDetailMarkdown from "../../components/features/postDetail/PostDetailMarkdown";
import PostDetailHeader from "../../components/features/postDetail/PostDetailHeader";
import { usePostDetail } from "../../components/hooks/usePostDetail";
import { getPost } from "@/services/post";
import { Post } from "@/types/scheme";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";

const PagePostDetail = ({ initialPost }: { initialPost: Post }) => {
  const { post, isPublic, date, replacedText, onClickPublish, onClickEdit } =
    usePostDetail(initialPost);

  const router = useRouter();

  const url = "https://www.drewww.dev" + router.asPath;

  return (
    <Fragment>
      <HeadMeta
        title={post?.title ?? "Post"}
        description={post?.desc}
        thumbnail={post?.ogImgUrl ?? post?.imgUrl}
        url={url}
      />
      <PostDetailWrapper>
        <PostDetailHeader
          title={post?.title ?? "제목없는 글"}
          date={date}
          isPublic={isPublic}
          onClickPublish={onClickPublish}
          onClickEdit={onClickEdit}
        />
        <article className="my-10 mb-20 md:px-10 w-full h-full">
          <PostDetailMainImg imgUrl={post?.imgUrl} imgDesc={post?.imgDesc} />
          <PostDetailMarkdown markdown={replacedText} />
        </article>
      </PostDetailWrapper>
    </Fragment>
  );
};

export default PagePostDetail;

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          postId: "5047110781",
        },
      },
    ],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }: { params: any }) {
  const post = await getPost(params.postId);

  return {
    props: {
      initialPost: post,
    },
  };
}
