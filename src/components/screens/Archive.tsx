import { Head } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "~/recoil/common";

function PageArchive() {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <>
      <Head title={"Archive"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={"Archive"} />
        <section className="px-2">
          {/* <div className="mt-8 flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-tight">2023</span>
            <span className="text-xl font-bold tracking-tight">December</span>
            <div className="divider" />
          </div> */}
          <span className="font-bold tracking-tight">준비중입니다...</span>
        </section>
      </div>
    </>
  );
}

export default PageArchive;
