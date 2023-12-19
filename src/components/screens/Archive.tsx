import { Head } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";

function PageArchive() {
  return (
    <>
      <Head title={"Archive"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={"Archive"} />
      </div>
    </>
  );
}

export default PageArchive;
