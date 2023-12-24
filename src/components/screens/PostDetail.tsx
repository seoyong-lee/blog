import { Head } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";

function PagePostDetail() {
  return (
    <>
      <Head title={"Archive"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={"Post"} />
        <section className="px-2">
          <span className="font-bold tracking-tight">준비중입니다...</span>
        </section>
      </div>
    </>
  );
}

export default PagePostDetail;
