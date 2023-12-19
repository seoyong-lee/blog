import { Head } from "~/components/shared/Head";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

function PageArchive() {
  return (
    <>
      <Head title={"Archive"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12"></div>
    </>
  );
}

export default PageArchive;
