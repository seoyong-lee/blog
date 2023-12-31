import { Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { showToastStateAtom, toastTextStateAtom } from "@/recoil/toast";

const Toast = () => {
  const [isShow, setIsShow] = useRecoilState(showToastStateAtom);
  const [text] = useRecoilState(toastTextStateAtom);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    }
  }, [isShow, setIsShow]);

  return (
    <>
      {isShow ? (
        <Transition.Root show={isShow} as={Fragment}>
          <Transition
            enter="transition duration-500 ease-out delay-300"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-500 ease-out delay-300"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="toast toast-top toast-end z-[100] absolute top-10 flex justify-center">
              <div className="alert alert-success flex px-8">
                <span className="font-medium text-base-100 text-center w-full">
                  {text}
                </span>
              </div>
            </div>
          </Transition>
        </Transition.Root>
      ) : (
        <></>
      )}
    </>
  );
};

export default Toast;
