import { FaLinkedin } from "react-icons/fa/index";
import { FaGithub } from "react-icons/fa6/index";
import { MdEmail } from "react-icons/md/index";
import { Link } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";

const SocialButtons = () => {
  return (
    <ClientOnly>
      {() => (
        <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-2 place-items-center">
          <Link to="https://www.linkedin.com/in/seoyong-lee/" target="_blank">
            <FaLinkedin className="w-8 h-8 sm:w-6 sm:h-6 hover:opacity-50 text-info" />
          </Link>
          <Link to="https://github.com/seoyong-lee" target="_blank">
            <FaGithub className="w-8 h-8 sm:w-6 sm:h-6  hover:opacity-50 text-success" />
          </Link>
          <Link to="mailto:sy3783@gmail.com">
            <MdEmail className="w-[2rem] h-[2rem] sm:w-[1.6rem] sm:h-[1.6rem] hover:opacity-50 text-accent" />
          </Link>
        </div>
      )}
    </ClientOnly>
  );
};

export default SocialButtons;
