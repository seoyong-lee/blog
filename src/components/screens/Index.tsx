import { Fragment } from "react";
import { Head } from "~/components/shared/Head";

import PostsMain from "~/components/features/posts/PostsMain";

function Index() {
  return (
    <Fragment>
      <Head title="Posts" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;
