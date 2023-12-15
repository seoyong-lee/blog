import { Fragment, useRef, useState } from "react";
import { useAuthState } from "~/components/contexts/UserContext";
import { Head } from "~/components/shared/Head";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostsMain from "../domain/posts/PostsMain";

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  const markdown = `Just a link: www.nasa.gov.`;

  return (
    <Fragment>
      <Head title="MAIN" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;
