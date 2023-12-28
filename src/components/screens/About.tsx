import { HeadMeta } from "~/components/shared/Head";

import SocialButtons from "../features/about/SocialButtons";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "~/recoil/common";
import { useWindowSize } from "../hooks/useWindowSize";

function PageAbout() {
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const { height } = useWindowSize();

  useEffect(() => {
    setHeaderFixed(false);
  }, []);

  return (
    <>
      <HeadMeta title={"About"}></HeadMeta>
      <div
        className="flex flex-col max-w-[780px] px-6 sm:px-10 lg:py-0 pt-12"
        style={{ minHeight: height - 128 }}
      >
        <div className="flex flex-col sm:flex-row mt-14 place-items-center">
          <div className="avatar w-[150px] h-[150px] rounded-full mb-10 sm:mb-0 overflow-hidden">
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
              시각디자인을 전공하고 개발자로 일하고 있습니다. 항상 새롭게
              무언가를 배우는 것을 좋아합니다. 최근에는 대학원에서 컴퓨터 및
              AI/ML 관련 분야를 공부 중입니다.
              <br />
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageAbout;
