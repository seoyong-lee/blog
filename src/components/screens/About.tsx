import { Head } from "~/components/shared/Head";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

function PageAbout() {
  return (
    <>
      <Head title={"About"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12">
        <div className="flex flex-col sm:flex-row mt-16 place-items-center">
          <div className="avatar w-[150px] h-[150px] rounded-full mb-4 sm:mb-0 overflow-hidden">
            <img
              src="/me.png"
              width={150}
              height={150}
              alt="me"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col flex-1 sm:ml-10 justify-center place-items-center sm:place-items-start">
            <h3 className="text-2xl sm:text-xl font-bold">Drew Lee</h3>
            <p className="text-sm mt-3 sm:mt-2 mb-4 font-medium leading-[1.6] text-center sm:text-left">
              프론트엔드 개발자입니다. 시각디자인을 전공하고 잠시 디자이너로
              일하다가 개발자가 되었습니다. 항상 새롭게 무언가를 배우는 것을
              좋아합니다. 최근에는 대학원에서 컴퓨터 및 AI/ML 관련 분야를 공부
              중입니다.
              <br />
            </p>
            <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-2 place-items-center">
              <Link
                to="https://www.linkedin.com/in/seoyong-lee/"
                target="_blank"
              >
                <FaLinkedin className="w-8 h-8 sm:w-6 sm:h-6 hover:opacity-50" />
              </Link>
              <Link to="https://github.com/seoyong-lee" target="_blank">
                <FaGithub className="w-8 h-8 sm:w-6 sm:h-6  hover:opacity-50" />
              </Link>
              <Link to="mailto:sy3783@gmail.com">
                <MdEmail className="w-[2rem] h-[2rem] sm:w-[1.6rem] sm:h-[1.6rem] hover:opacity-50" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageAbout;
