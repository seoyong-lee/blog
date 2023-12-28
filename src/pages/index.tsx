import { Fragment } from "react";
import { HeadMeta } from "@/components/shared/Head";

import PostsMain from "@/components/features/posts/PostsMain";

function Index() {
  return (
    <Fragment>
      <HeadMeta title="Posts" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;
