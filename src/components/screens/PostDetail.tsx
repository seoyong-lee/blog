import { Fragment } from "react";
import { Head } from "~/components/shared/Head";
import Loading from "../shared/Loading";

import PostDetailWrapper from "../features/postDetail/PostDetailWrapper";
import PostDetailMainImg from "../features/postDetail/PostDetailMainImg";
import PostDetailMarkdown from "../features/postDetail/PostDetailMarkdown";
import PostDetailHeader from "../features/postDetail/PostDetailHeader";
import { usePostDetail } from "../hooks/usePostDetail";

const PagePostDetail = () => {
  const { post, isPublic, date, replacedText, onClickPublish, onClickEdit } =
    usePostDetail();

  return post ? (
    <Fragment>
      <Head title={post?.title ?? "Post"}></Head>
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
  ) : (
    <Loading />
  );
};

export default PagePostDetail;
