import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HeadMeta } from "@/components/shared/Head";
import { headerFixedStateAtom } from "@/recoil/common";
import { useWindowSize } from "../components/hooks/useWindowSize";
import Link from "next/link";

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
        style={{ minHeight: height / 2 }}
      >
        <h1>The page is not found.</h1>
        <div className="mt-4">
          <Link href="/" className="link-primary">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page404;
