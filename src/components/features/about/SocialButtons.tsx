import Link from "next/link";
import { Fragment } from "react";
import { FaLinkedin } from "react-icons/fa/index";
import { FaGithub } from "react-icons/fa6/index";
import { MdEmail } from "react-icons/md/index";
const SocialButtons = () => {
  return (
    <Fragment>
      <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-2 place-items-center">
        <Link href="https://www.linkedin.com/in/seoyong-lee/" target="_blank">
          <FaLinkedin className="w-8 h-8 sm:w-6 sm:h-6 hover:opacity-100 opacity-60" />
        </Link>
        <Link href="https://github.com/seoyong-lee" target="_blank">
          <FaGithub className="w-8 h-8 sm:w-6 sm:h-6 hover:opacity-100 opacity-60" />
        </Link>
        <Link href="mailto:sy3783@gmail.com">
          <MdEmail className="w-[2rem] h-[2rem] sm:w-[1.6rem] sm:h-[1.6rem] hover:opacity-100 opacity-60" />
        </Link>
      </div>
    </Fragment>
  );
};

export default SocialButtons;
