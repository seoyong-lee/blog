import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HeadMeta } from "~/components/shared/Head";
import { headerFixedStateAtom } from "~/recoil/common";
import { useWindowSize } from "../hooks/useWindowSize";

function Page404() {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const { height } = useWindowSize();

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <>
      <HeadMeta title={"The page is not found"}></HeadMeta>
      <div
        className="flex flex-col place-items-center justify-center text-center text-3xl w-full font-bold"
        style={{ minHeight: height - 128 }}
      >
        <h1>The page is not found.</h1>
        <div className="mt-4">
          <a href="/" className="link-primary">
            Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Page404;
