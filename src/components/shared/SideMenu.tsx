import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { Link } from "react-router-dom";
import ButtonTheme from "./ButtonTheme";
import { useRecoilState } from "recoil";
import { isLoginStateAtom } from "~/recoil/common";

const SideMenu = ({
  isOpen,
  showLoginButton,
  onClickMenu,
  onClickAdmin,
}: {
  isOpen: boolean;
  showLoginButton: boolean;
  onClickMenu: () => void;
  onClickAdmin: () => void;
}) => {
  const [isLogin] = useRecoilState(isLoginStateAtom);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed right-0 inset-0 top-0 w-screen h-screen z-20"
        open={isOpen}
        onClose={onClickMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="pointer-events-auto w-screen h-screen bg-base-300 overflow-hidden">
            <Transition.Child
              enter="transition duration-500 ease-out delay-300"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-500 ease-out delay-300"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="flex flex-col p-2">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-none focus:outline-none"
                    onClick={onClickMenu}
                  >
                    <IoIosClose className="w-10 h-10" />
                  </button>
                </div>
                <div className="flex flex-col w-full place-items-center gap-3 mt-20">
                  <Link
                    to={"/"}
                    onClick={onClickMenu}
                    className="text-2xl font-semibold  hover:opacity-50"
                  >
                    Posts
                  </Link>
                  <Link
                    to={"/archive"}
                    onClick={onClickMenu}
                    className="text-2xl font-semibold  hover:opacity-50"
                  >
                    Archive
                  </Link>
                  <Link
                    to={"/about"}
                    onClick={onClickMenu}
                    className="text-2xl font-semibold  hover:opacity-50"
                  >
                    About
                  </Link>
                  {showLoginButton && (
                    <Link
                      to={"/login"}
                      className="text-2xl font-semibold text-primary hover:opacity-50"
                    >
                      Login
                    </Link>
                  )}
                  {isLogin && (
                    <Link
                      to={"/edit"}
                      onClick={onClickMenu}
                      className="text-2xl font-semibold text-accent hover:opacity-50"
                    >
                      Edit
                    </Link>
                  )}
                  <ButtonTheme onClickAdmin={onClickAdmin} />
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SideMenu;
