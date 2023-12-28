import { Fragment, useEffect } from "react";
import { HeadMeta } from "@/components/shared/Head";

import PostsMain from "@/components/features/posts/PostsMain";
import { getPosts } from "@/services/post";
import { Post } from "@/types/scheme";
import { postListAtom } from "@/recoil/post";
import { useSetRecoilState } from "recoil";

function Index({ postList }: { postList: Post[] }) {
  const setPosts = useSetRecoilState(postListAtom);

  useEffect(() => {
    if (postList) {
      setPosts(postList);
    }
  }, [postList, setPosts]);

  return (
    <Fragment>
      <HeadMeta title="Posts" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;

export async function getStaticProps() {
  const postList = await getPosts();

  return {
    props: {
      postList: postList,
    },
  };
}
