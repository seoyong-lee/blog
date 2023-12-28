import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useWindowSize } from "~/components/hooks/useWindowSize";
import { headerFixedStateAtom } from "~/recoil/common";

const PostsLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const { height } = useWindowSize();

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <div
      className="h-full w-full max-w-[1040px] px-6 sm:px-10 lg:py-0 pt-12"
      style={{ minHeight: height - 128 }}
    >
      {children}
    </div>
  );
};

export default PostsLayoutWrapper;
