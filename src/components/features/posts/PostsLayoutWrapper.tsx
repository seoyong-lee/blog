"use client";

import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "@/recoil/common";

const PostsLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);

  useEffect(() => {
    setHeaderFixed(false);
  }, [setHeaderFixed]);

  return (
    <div className="h-full w-full max-w-[1040px] px-6 sm:px-10 lg:py-0 pt-12">
      {children}
    </div>
  );
};

export default PostsLayoutWrapper;
