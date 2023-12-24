import { Fragment, useEffect } from "react";
import { Head } from "~/components/shared/Head";

import PostsMain from "~/components/domain/posts/PostsMain";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "~/recoil/common";

function Index() {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <Fragment>
      <Head title="Posts" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;
