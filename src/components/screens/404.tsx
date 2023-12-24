import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Head } from "~/components/shared/Head";
import { headerFixedStateAtom } from "~/recoil/common";

function Page404() {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <>
      <Head title={"The page is not found"}></Head>
      <div className="flex flex-col place-items-center justify-center text-center h-screen text-3xl w-full font-bold">
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
