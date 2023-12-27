import { Fragment } from "react";
import { Head } from "~/components/shared/Head";
import Loading from "../shared/Loading";
import PostDetailHeader from "../features/postDetail/postDetailHeader";
import PostDetailWrapper from "../features/postDetail/PostDetailWrapper";
import PostDetailMainImg from "../features/postDetail/PostDetailMainImg";
import PostDetailMarkdown from "../features/postDetail/PostDetailMarkdown";
import { usePostDetail } from "../hooks/usePostDetail";

const PagePostDetail = () => {
  const { post, date, replacedText } = usePostDetail();

  return post ? (
    <Fragment>
      <Head title={post?.title ?? "Post"}></Head>
      <PostDetailWrapper>
        <PostDetailHeader title={post?.title ?? "제목없는 글"} date={date} />
        <article className="my-10 mb-20 md:px-10 w-full h-full">
          <PostDetailMainImg imgUrl={post?.imgUrl} />
          <PostDetailMarkdown markdown={replacedText} />
        </article>
      </PostDetailWrapper>
    </Fragment>
  ) : (
    <Loading />
  );
};

export default PagePostDetail;
